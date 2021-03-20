export default function calculatePctDifference(a: number, b: number): number {
	const max = Math.max(a, b);
	const min = Math.min(a, b);
	return (min / max) * 100;
};
