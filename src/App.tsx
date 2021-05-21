import { useState, useEffect } from 'react';
import axios from 'axios';

import StockChart from './Chart';

import { ResultData } from './interfaces';
import { setUrlParamsBy } from './utils';

function App() {
	const [data, setData] = useState<ResultData[]>([]);

	const fetchApiData = async () => {
		try {
			const res = await axios.get<ResultData[]>(
				setUrlParamsBy({ precision: 'Minutes', periodInMinutes: '5' })
			);

			if (res.status === 200 && res.data) setData(res.data);
		} catch (error) {}
	};

	useEffect(() => {
		fetchApiData();
	}, []);

	return (
		<div>
			<StockChart data={data} xAxisDisplayBy={'time'} />
		</div>
	);
}

export default App;
