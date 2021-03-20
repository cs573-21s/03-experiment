import mongoose from 'mongoose';
import randomInteger from '../util/randomInteger';
import calculatePctDifference from '../util/calculatePctDifference';

type DataPoint = {
	_id?: string;
	value: number; // 0-100
	isMarked: boolean; // 2 marked datapoints per dataset to compare
};

export type ChartType = 'bar' | 'donut' | 'circular' | 'pie' | 'stackedBar';

type DataSet = {
	_id?: string;
	data: DataPoint[];
	chartType: ChartType;
	pctDifferenceActual: number; // calculated percentage difference between two marked data points
	pctDifferenceParticipant: number | null; // participant response
	error: number | null; // difference between true percentage and reported percentage (adjusted with log-base-2 equation)
	responseTimeMS: number | null; // response time in milliseconds for this data set
};

export interface IExperiment extends mongoose.Document {
	datasets: DataSet[];
	isComplete: boolean;
};

export interface ExperimentModel extends mongoose.Model<IExperiment> {
  generateRandomExperiment(datasetsCount: number, datapointsCount: number): Promise<IExperiment>;
}

const ExperimentSchema = new mongoose.Schema<IExperiment, ExperimentModel>(
	{
		datasets: {
			type: [
				{
					data: {
						type: [
							{
								value: Number,
								isMarked: Boolean
							}
						]
					},
					chartType: {
						type: String,
						enum: ['bar', 'donut', 'circular', 'pie', 'stackedBar']
					},
					pctDifferenceActual: Number,
					pctDifferenceParticipant: Number,
					error: Number,
					responseTimeMS: Number
				}
			]
		},
		isComplete: {
			type: Boolean,
			default: false
		}
	}, {
		timestamps: true
	}
);

ExperimentSchema.statics.generateRandomExperiment = function(datasetsCount: number, datapointsCount: number): Promise<IExperiment> {
	const chartTypes: ChartType[] = ['bar' as const, 'donut' as const, 'circular' as const, 'pie' as const, 'stackedBar' as const];
	const datasets = [];
	for (let i = 0; i < datasetsCount; i++) {
		const data: DataPoint[] = [];
		for (let j = 0; j < datapointsCount; j++) {
			data.push({
				value: randomInteger(10, 90),
				isMarked: false
			});
		}
		let markedDataPoint1 = randomInteger(0, data.length - 1);
		let markedDataPoint2 = randomInteger(0, data.length - 1);
		while (markedDataPoint1 === markedDataPoint2) { // make sure we don't have the same data point marked twice
			markedDataPoint2 = randomInteger(0, data.length - 1);
		}
		data[markedDataPoint1].isMarked = true;
		data[markedDataPoint2].isMarked = true;
		const pctDifferenceActual = calculatePctDifference(data[markedDataPoint1].value, data[markedDataPoint2].value);
		const dataset: DataSet = {
			chartType: chartTypes[i % chartTypes.length],
			data,
			pctDifferenceActual,
			pctDifferenceParticipant: null,
			error: null,
			responseTimeMS: null
		}
		datasets.push(dataset);
	}
	// shuffle datasets (https://stackoverflow.com/a/12646864)
	for (let i = datasets.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[datasets[i], datasets[j]] = [datasets[j], datasets[i]];
	}
	return this.create({
		datasets
	});
};

const Experiment: ExperimentModel = mongoose.model<IExperiment, ExperimentModel>('Experiment', ExperimentSchema);

export default Experiment;
