import styled from 'styled-components';

export const StyledResponsiveContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: 0rem;
`;

export const StyledMainContainer = styled(StyledResponsiveContainer)`
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	position: relative;
`;

export const StyledOverviewContainer = styled(StyledResponsiveContainer)`
	display: flex;
	flex-direction: column;
	margin: 0 0 1rem 0.5rem;

	div {
		font-size: 28px;
		font-weight: 800;
		margin-bottom: 0.1rem;
	}

	span {
		color: ${({ theme }) => theme.grey_pale};

		a {
			text-decoration: none;
			color: ${({ theme }) => theme.link_blue};
		}
	}
`;

export const StyledCenteredDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const StyledErrorModal = styled.div`
	position: absolute;
	top: 0;
	left: 40%;
	width: auto;
	height: auto;
	padding: 1rem;
	background-color: ${({ theme }) => theme.error_red};
	color: ${({ theme }) => theme.main_white};
	border-radius: 3px;
`;

export const StyledTimeSelectionContainer = styled.div`
	height: 2rem;
	width: 30%;
	margin-left: 4.4rem;
	display: flex;
`;

export const StyledTimeButton = styled.button<{
	isSelected: boolean;
	isLoading: boolean;
}>`
	height: 100%;
	width: 50%;
	cursor: pointer;
	background: none;
	border: none;
	border-bottom: ${({ isSelected, theme }) =>
		isSelected
			? `4px solid ${theme.stroke_blue}`
			: `2px solid ${theme.pale_blue}`};
	transition: all 0.2s ease-in;
	background-color: ${({ isLoading, theme }) =>
		isLoading ? theme.secondary_blue : ''};
	&:hover {
		background-color: ${({ theme }) => theme.pale_blue};
	}
`;

export const StyledTooltipContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: auto;
	width: 100%;
	padding: 0.3rem;
	border: ${({ theme }) => `1px solid ${theme.shadow_pale}`};
	background-color: ${({ theme }) => theme.secondary_blue};
	color: ${({ theme }) => theme.main_white};
	text-shadow: ${({ theme }) => `0 0 1px ${theme.grey_pale}`};
	font-size: 14px;
	border-radius: 3px;
`;

export const StyledTooltipLine = styled.span`
	display: flex;
	justify-content: space-between;
`;

export const StyledClickableSpan = styled.span`
	color: ${({ theme }) => theme.link_blue};
	transition: all 0.2s ease-in;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.main_blue};
	}
`;

export const StyledSvgImage = styled.img`
	margin-left: 0.5rem;
`;
