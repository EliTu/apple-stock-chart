import { SyntheticEvent } from 'react';

import Loader from './UI/Loader';

import { TimeData, TimeToggleContainerProps } from '../utils/interfaces';
import { StyledTimeToggleContainer, StyledTimeButton } from '../styles/styled';

const TIME_DATA: TimeData[] = [
	{ timeUnits: 'Minutes', amount: '1', label: '1 Min' },
	{ timeUnits: 'Minutes', amount: '5', label: '5 Mins' },
	{ timeUnits: 'Hours', amount: '1', label: '1 Hour' },
	{ timeUnits: 'Hours', amount: '168', label: '1 Week' },
];

function TimeToggle({
	setTimeData,
	timeData,
	isLoadingData,
}: TimeToggleContainerProps) {
	const handleButtonClick = ({
		currentTarget,
	}: SyntheticEvent<HTMLButtonElement>) => {
		const clickedButtonLabel = currentTarget.innerHTML;
		const clickedButton = TIME_DATA.find(
			({ label }) => label === clickedButtonLabel
		);

		if (clickedButton && clickedButton.label !== timeData.label)
			setTimeData(clickedButton);
	};

	return (
		<StyledTimeToggleContainer>
			{TIME_DATA.map(({ label }) => {
				const isButtonSelected = timeData.label === label;
				return (
					<StyledTimeButton
						isSelected={isButtonSelected}
						isLoading={isButtonSelected && isLoadingData}
						key={label}
						onClick={handleButtonClick}
					>
						{isLoadingData && isButtonSelected ? <Loader /> : label}
					</StyledTimeButton>
				);
			})}
		</StyledTimeToggleContainer>
	);
}

export default TimeToggle;
