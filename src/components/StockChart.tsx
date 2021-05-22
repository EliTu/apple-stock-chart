import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	ResponsiveContainer,
} from 'recharts';
import CustomTooltip from './UI/CustomTooltip';
import { ChartData, StockChartProps } from '../utils/interfaces';
import { formatStringByLength } from '../utils/utils';
import { THEME_COLORS } from '../styles/themeColors';

export default function StockChart({
	data,
	xAxisDisplayBy,
	isError,
	isLoadingData,
}: StockChartProps) {
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
		<ResponsiveContainer width='90%' height={500}>
			<AreaChart
				margin={{
					top: 20,
					right: 10,
					left: 10,
					bottom: 0,
				}}
				data={formattedChartData}
				style={{
					filter: isError || isLoadingData ? 'opacity(0.30)' : '',
					cursor: 'crosshair',
				}}
			>
				<CartesianGrid strokeDasharray='3 3' />
				<defs>
					<linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
						<stop
							offset='40%'
							stopColor={THEME_COLORS.main_blue}
							stopOpacity={0.7}
						/>
						<stop
							offset='90%'
							stopColor={THEME_COLORS.main_white}
							stopOpacity={0.1}
						/>
					</linearGradient>
				</defs>
				<XAxis
					dataKey={xAxisDisplayBy === 'date' ? 'Date' : 'Time'}
					tickMargin={5}
					fontSize={12}
				/>
				<YAxis
					dataKey='Close'
					domain={['dataMin', 'dataMax']}
					tickCount={5}
					tickMargin={5}
					allowDecimals={true}
					fontSize={13}
				/>
				<Area
					type='monotone'
					dataKey='Close'
					stroke={THEME_COLORS.stroke_blue}
					fill='url(#colorUv)'
					fillOpacity={0.4}
				/>
				{!isError && !isLoadingData && (
					<Tooltip isAnimationActive={false} content={CustomTooltip} />
				)}
			</AreaChart>
		</ResponsiveContainer>
	);
}
