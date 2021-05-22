import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import StockChart from './StockChart';
import ErrorModal from './ErrorModal';
import TimeSelectionContainer from './TimeSelectionContainer';

import { StyledMainContainer } from './styled';
import { ResultData, TimeData } from './interfaces';
import { setUrlParamsBy } from './utils';

function App() {
	const [stockData, setStockData] = useState<ResultData[]>([]);
	const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
	const [error, setError] = useState<string>('');
	const [timeData, setTimeData] = useState<TimeData>({
		timeUnits: 'Minutes',
		amount: '1',
		label: '1 Min',
	});

	const fetchApiData = useCallback(async () => {
		try {
			const { data, status } = await axios.get<ResultData[]>(
				setUrlParamsBy({
					precision: timeData.timeUnits,
					period: timeData.amount,
				})
			);

			if (status === 200 && data.length) {
				setStockData(() => data);
				setIsLoadingData(() => false);
				setError('');
			}
		} catch (error: any) {
			setError(error.message);
			setIsLoadingData(false);
		}
	}, [timeData.amount, timeData.timeUnits]);

	useEffect(() => {
		fetchApiData();
	}, [fetchApiData]);

	return (
		<StyledMainContainer>
			<ErrorModal error={error} />
			<TimeSelectionContainer
				setTimeData={setTimeData}
				timeData={timeData}
				isLoadingData={isLoadingData}
			/>
			<StockChart
				data={stockData}
				isLoadingData={isLoadingData}
				isError={!!error}
				xAxisDisplayBy={
					timeData.label && /week/gi.test(timeData.label) ? 'date' : 'time'
				}
			/>
		</StyledMainContainer>
	);
}

export default App;
