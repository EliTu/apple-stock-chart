import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';

import Overview from './components/UI/Overview';
import StockChart from './components/StockChart';
import ErrorModal from './components/errors/ErrorModal';
import TimeToggle from './components/TimeToggle';

import { StyledMainContainer } from './styles/styled';
import { ResultData, TimeData } from './utils/interfaces';
import { THEME_COLORS } from './styles/themeColors';
import { setUrlParamsBy } from './utils/utils';

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
		<ThemeProvider theme={THEME_COLORS}>
			<StyledMainContainer>
				<ErrorModal error={error} />
				<Overview />
				<TimeToggle
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
		</ThemeProvider>
	);
}

export default App;
