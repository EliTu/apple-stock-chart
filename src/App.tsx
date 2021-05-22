import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import StockChart from './Chart';
import { StyledMainContainer } from './styled';

import { ResultData, TimeData } from './interfaces';
import { setUrlParamsBy } from './utils';
import TimeSelectionContainer from './TimeSelectionContainer';

function App() {
	const [stockData, setStockData] = useState<ResultData[]>([]);
	const [timeData, setTimeData] = useState<TimeData>({
		timeUnits: 'Minutes',
		amount: '1',
	});

	const fetchApiData = useCallback(async () => {
		try {
			const { data, status } = await axios.get<ResultData[]>(
				setUrlParamsBy({
					precision: timeData.timeUnits,
					period: timeData.amount,
				})
			);

			if (status === 200 && data.length) setStockData(data);
		} catch (error) {}
	}, [timeData.amount, timeData.timeUnits]);

	useEffect(() => {
		fetchApiData();
	}, [fetchApiData]);

	return (
		<StyledMainContainer>
			<TimeSelectionContainer setTimeData={setTimeData} timeData={timeData} />
			<StockChart
				data={stockData}
				xAxisDisplayBy={
					timeData.label && /week/gi.test(timeData.label) ? 'date' : 'time'
				}
			/>
		</StyledMainContainer>
	);
}

export default App;
