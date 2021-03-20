import { Request, Response, NextFunction } from 'express';
import Experiment, { ChartType } from '../../models/experiment';

async function getAllExperiments(req: Request, res: Response, next: NextFunction) {
	const experiments = await Experiment.find();
	return res.json({
		experiments
	});
}

async function getCompleteExperiments(req: Request, res: Response, next: NextFunction) {
	const experiments = await Experiment.find({ isComplete: true });
	return res.json({
		experiments
	});
}

async function generateExperiment(req: Request, res: Response, next: NextFunction) {
	const { datasetsCount, datapointsCount } = req.body;
	const experiment = await Experiment.generateRandomExperiment(parseInt(datasetsCount), parseInt(datapointsCount));
	return res.json({
		experiment
	});
}

async function completeExperiment(req: Request, res: Response, next: NextFunction) {
	const { result, experimentID } = req.body;
	const experiment = await Experiment.findById(experimentID);
	if (!experiment) {
		return res.status(400).json({
			error: `Could not find experiment with _id: ${experimentID}`
		});
	}
	for (const dataset of experiment.datasets) {
		if (!(dataset._id as string in result)) {
			res.status(400).json({
				error: `Missing data for dataset ${dataset._id}`
			});
		}
		dataset.responseTimeMS = parseFloat(result[dataset._id as string].responseTimeMS);
		let pctDifferenceParticipant = parseFloat(result[dataset._id as string].pctDifferenceParticipant);
		dataset.pctDifferenceParticipant = pctDifferenceParticipant;
		// checking for case of user getting the "exact percentage correct"
		if (Math.abs(pctDifferenceParticipant - dataset.pctDifferenceActual) < .5) {
			dataset.error = 0
		} else {
			dataset.error = Math.log2(Math.abs(pctDifferenceParticipant - dataset.pctDifferenceActual) + (1/8));
		}
	}
	if (experiment.datasets.every(dataset => dataset.pctDifferenceParticipant !== null)) {
		experiment.isComplete = true;
	}
	experiment.markModified('dataset');
	const savedExperiment = await experiment.save();
	return res.json({
		experiment: savedExperiment
	});
}

async function getExperimentStats(req: Request, res: Response, next: NextFunction) {
	// typescript stuff
	const initRecord = (startingValue: number): Record<ChartType, number> => ({
		bar: startingValue,
		circular: startingValue,
		donut: startingValue,
		pie: startingValue,
		stackedBar: startingValue
	});

	// initialize vars to hold totals for data
	const counts = initRecord(0), totalLogErrors = initRecord(0), totalRespTimeMS = initRecord(0);
	// aggregate data for response
	const minLogErrors = initRecord(Infinity), minRepsonseTimeMS = initRecord(Infinity);
	const meanLogErrors = initRecord(0), meanRepsonseTimeMS = initRecord(0);
	const maxLogErrors = initRecord(-Infinity), maxRepsonseTimeMS = initRecord(-Infinity);
	const responseTimeMS_overTime: number[] = [];

	// fetch data from DB
	const experiments = await Experiment.find({ isComplete: true });

	// do data analysis
	for (const experiment of experiments) {
		let i = 0;
		for (const dataset of experiment.datasets) {
			// counts
			counts[dataset.chartType] += 1;
			// log error
			minLogErrors[dataset.chartType] = Math.min(minLogErrors[dataset.chartType], dataset.error as number);
			totalLogErrors[dataset.chartType] += dataset.error as number;
			maxLogErrors[dataset.chartType] = Math.max(maxLogErrors[dataset.chartType], dataset.error as number);
			// resp time
			minRepsonseTimeMS[dataset.chartType] = Math.min(minRepsonseTimeMS[dataset.chartType], dataset.responseTimeMS as number);
			totalRespTimeMS[dataset.chartType] += dataset.responseTimeMS as number;
			maxRepsonseTimeMS[dataset.chartType] = Math.max(maxRepsonseTimeMS[dataset.chartType], dataset.responseTimeMS as number);

			if (responseTimeMS_overTime[i]) {
				responseTimeMS_overTime[i] += dataset.responseTimeMS as number;
			} else {
				responseTimeMS_overTime[i] = dataset.responseTimeMS as number;
			}
			i++;
		}
	}

	// calculate averages
	for (const key in counts) {
		meanLogErrors[key as ChartType] = totalLogErrors[key as ChartType] / counts[key as ChartType];
		meanRepsonseTimeMS[key as ChartType] = totalRespTimeMS[key as ChartType] / counts[key as ChartType];
	}
	
	// CIs and stuff
	const sumOfSquaredDeviationsLogErrors =  initRecord(0);
	for (const experiment of experiments) {
		for (const dataset of experiment.datasets) {
			sumOfSquaredDeviationsLogErrors[dataset.chartType] += Math.pow(dataset.error as number - meanLogErrors[dataset.chartType], 2);
		}
	}

	const Z = 1.96; // 95% CI
	const stdDevLogErrors = initRecord(0), confidenceIntervalsLogErrors = initRecord(0);
	for (const key in counts) {
		stdDevLogErrors[key as ChartType] = Math.sqrt(sumOfSquaredDeviationsLogErrors[key as ChartType] / counts[key as ChartType]);
		confidenceIntervalsLogErrors[key as ChartType] = Z * (stdDevLogErrors[key as ChartType] / Math.sqrt(counts[key as ChartType]));
	}


	return res.json({
		participants: experiments.length,
		counts,
		minLogErrors,
		minRepsonseTimeMS,
		meanLogErrors,
		meanRepsonseTimeMS,
		maxLogErrors,
		maxRepsonseTimeMS,
		stdDevLogErrors,
		confidenceIntervalsLogErrors,
		responseTimeMS_overTime: responseTimeMS_overTime.map(t => t / experiments.length)
	});
}

export {
	getAllExperiments,
	getCompleteExperiments,
	generateExperiment,
	completeExperiment,
	getExperimentStats
};
