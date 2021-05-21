import { XYPlot, LineSeries, XAxis, YAxis, LineSeriesPoint } from 'react-vis';
import '../node_modules/react-vis/dist/style.css';
import { StockChartProps } from './interfaces';

export default function StockChart({ data }: StockChartProps) {
	const formatData: LineSeriesPoint[] = data.map((dataSet) => ({
		y: +dataSet.Close,
		x: Math.random(),
	}));

	return (
		<XYPlot height={600} width={600} animation>
			<XAxis />
			<YAxis />
			<LineSeries data={formatData} />
		</XYPlot>
	);
}
