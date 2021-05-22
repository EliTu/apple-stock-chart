import { StyledOverviewContainer } from '../../styles/styled';

function Overview() {
	return (
		<StyledOverviewContainer>
			<div>Apple Inc</div>
			<span>
				AAPL (
				<a
					href='https://www.fxempire.com/stock-exchanges/xnas'
					target='_blank'
					rel='noreferrer'
				>
					Nasdaq - US
				</a>
				)
			</span>
		</StyledOverviewContainer>
	);
}

export default Overview;
