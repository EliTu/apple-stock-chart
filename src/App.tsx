import { useState, useEffect } from 'react';
import axios from 'axios';
import { ResultData } from './interfaces';
import { getDataBy } from './utils';

function App() {
	const [httpRequestResult, setHttpRequestResult] = useState<ResultData[]>([]);

	const fetchApiData = async () => {
		const res = await getDataBy({ precision: 'Hours', periodInMinutes: '1' });

		if (res.status === 200 && res.data) setHttpRequestResult(res.data);
	};

	console.log(httpRequestResult);
	useEffect(() => {
		fetchApiData();
	}, []);

	return <div className='App'></div>;
}

export default App;
