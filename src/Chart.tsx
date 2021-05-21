import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
} from 'recharts';
import { StockChartProps } from './interfaces';
import { formatStringByLength } from './utils';

export default function StockChart({ data, xAxisDisplayBy }: StockChartProps) {
	const formattedChartData = data.map(
		({ Close, StartTime, StartDate, Date: d }) => {
			const formattedTime = formatStringByLength(StartTime, -6);
			const formattedDate = formatStringByLength(StartDate, -5);
			return {
				time: xAxisDisplayBy === 'date' ? formattedDate : formattedTime,
				Close,
				date: new Date(d),
			};
		}
	);

	console.log(formattedChartData);

	return (
		<AreaChart
			width={1200}
			height={500}
			margin={{
				top: 20,
				right: 10,
				left: 10,
				bottom: 0,
			}}
			data={formattedChartData}
		>
			<CartesianGrid strokeDasharray='3 3' />
			<XAxis dataKey='time' tickMargin={5} />
			<YAxis
				dataKey='Close'
				domain={['dataMin', 'dataMax']}
				tickCount={5}
				tickMargin={5}
				allowDecimals={true}
			/>
			<Area
				type='monotone'
				dataKey='Close'
				stroke='#0f04dfa0'
				fill='#291ef07f'
			/>
			<Tooltip />
		</AreaChart>
	);
}
