import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import { ChartData, StockChartProps } from './interfaces';
import { formatStringByLength } from './utils';

export default function StockChart({ data, xAxisDisplayBy }: StockChartProps) {
	const formattedChartData: ChartData[] = data.map(
		({ Close, StartTime, StartDate }) => {
			const formattedTime = formatStringByLength(StartTime, -6);
			const formattedDate = formatStringByLength(StartDate, -5);
			return {
				Date: formattedDate,
				Time: formattedTime,
				Close,
			};
		}
	);

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
			<defs>
				<linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='40%' stopColor='#063cebcf' stopOpacity={0.7} />
					<stop offset='90%' stopColor='#FFFFFF' stopOpacity={0.1} />
				</linearGradient>
			</defs>
			<XAxis
				dataKey={xAxisDisplayBy === 'date' ? 'Date' : 'Time'}
				tickMargin={5}
			/>
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
				stroke='#080185f0'
				fill='url(#colorUv)'
				fillOpacity={0.4}
			/>
			<Tooltip content={CustomTooltip} />
		</AreaChart>
	);
}
