import { SyntheticEvent } from 'react';

import Loader from './Loader';

import { TimeData, TimeSelectionContainerProps } from './interfaces';
import { StyledTimeSelectionContainer, StyledTimeButton } from './styled';

const TIME_SELECTION_UNITS: TimeData[] = [
	{ timeUnits: 'Minutes', amount: '1', label: '1 Min' },
	{ timeUnits: 'Minutes', amount: '5', label: '5 Mins' },
	{ timeUnits: 'Hours', amount: '1', label: '1 Hour' },
	{ timeUnits: 'Hours', amount: '168', label: '1 Week' },
];

function TimeSelectionContainer({
	setTimeData,
	timeData,
	isLoadingData,
}: TimeSelectionContainerProps) {
	const handleButtonClick = ({
		currentTarget,
	}: SyntheticEvent<HTMLButtonElement>) => {
		const clickedButtonLabel = currentTarget.innerHTML;
		const clickedButton = TIME_SELECTION_UNITS.find(
			({ label }) => label === clickedButtonLabel
		);

		if (clickedButton && clickedButton.label !== timeData.label)
			setTimeData(clickedButton);
	};

	return (
		<StyledTimeSelectionContainer>
			{TIME_SELECTION_UNITS.map(({ label }) => (
				<StyledTimeButton
					isSelected={timeData.label === label}
					key={label}
					onClick={handleButtonClick}
				>
					{isLoadingData ? <Loader /> : label}
				</StyledTimeButton>
			))}
		</StyledTimeSelectionContainer>
	);
}

export default TimeSelectionContainer;
