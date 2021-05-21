import styled from 'styled-components';

export const StyledMainContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: 0.5rem;
`;

export const StyledTimeSelectionContainer = styled.div`
	height: 2rem;
	width: 30%;
	margin-left: 4.4rem;
`;

export const StyledTimeButton = styled.button`
	height: 100%;
	width: 20%;
	cursor: pointer;
	background-color: #3c3fdb7b;
	border: none;
	transition: all 0.2s ease-in;

	&:hover {
		background-color: #4649f5c5;
	}
`;
