import { TooltipProps } from 'recharts';
import { ChartData } from './interfaces';
import { StyledTooltipContainer, StyledSpan } from './styled';

function CustomTooltip({ active, payload }: TooltipProps<any, any>) {
	if (!active || !payload?.length) return null;

	const { Close, Date, Time }: ChartData = payload[0].payload;
	return (
		<StyledTooltipContainer>
			<StyledSpan>
				<b>Date/Time:</b> {Date} {Time}
			</StyledSpan>
			<StyledSpan>
				<b>Close:</b> {Close}
			</StyledSpan>
		</StyledTooltipContainer>
	);
}

export default CustomTooltip;
