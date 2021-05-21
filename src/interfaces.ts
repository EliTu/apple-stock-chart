export interface ResultData {
	StartDate: string;
	StartTIme: string;
	Open: number;
	High: number;
	Low: number;
	Close: number;
	Volume: number;
	Date: Date;
}

export interface FetchDataParams {
	precision: 'Minutes' | 'Hours';
	periodInMinutes?: '1' | '5';
	periodInHours?: '1' | '168'; // 168 hours = 1 week
}

export interface StockChartProps {
	data: ResultData[];
}
