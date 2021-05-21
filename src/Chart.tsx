import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { StockChartProps } from './interfaces';

export default function StockChart({ data, xAxisDisplayBy }: StockChartProps) {
	const formattedChartData = data
		.sort((a, b) => {
			return new Date(a.Date).getTime() - new Date(b.Date).getTime();
		})
		.map(({ Close, StartTime, StartDate, Date: d }) => {
			const formattedTime = StartTime.slice(0, -6);
			return {
				time: xAxisDisplayBy === 'date' ? StartDate : formattedTime,
				Close,
				date: new Date(d),
			};
		});

	console.log(formattedChartData);

	return (
		<AreaChart
			width={1400}
			height={500}
			// margin={{
			// 	top: 10,
			// 	right: 30,
			// 	left: 0,
			// 	bottom: 0,
			// }}
			data={formattedChartData}
		>
			<Area type='monotone' dataKey='Close' stroke='#8884d8' />
			<XAxis dataKey='time' />
			<YAxis dataKey='Close' />
			<Tooltip />
		</AreaChart>
	);
}
