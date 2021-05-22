import { TooltipProps } from 'recharts';
import { ChartData } from '../../utils/interfaces';
import { StyledTooltipContainer, StyledTooltipLine } from '../styled';

function CustomTooltip({ active, payload }: TooltipProps<any, any>) {
	if (!active || !payload?.length) return null;

	const { Close, Date, Time }: ChartData = payload[0].payload;
	return (
		<StyledTooltipContainer>
			<StyledTooltipLine>
				<b>Date/Time:</b> {Date} {Time}
			</StyledTooltipLine>
			<StyledTooltipLine>
				<b>Close:</b> {Close}
			</StyledTooltipLine>
		</StyledTooltipContainer>
	);
}

export default CustomTooltip;
