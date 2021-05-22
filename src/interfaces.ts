type TimeUnits = 'Minutes' | 'Hours';

type TimeAmount = '1' | '5' | '168';
export interface ResultData {
	StartDate: string;
	StartTime: string;
	Open: number;
	High: number;
	Low: number;
	Close: number;
	Volume: number;
	Date: string;
}
export interface TimeData {
	timeUnits: TimeUnits;
	amount: TimeAmount;
	label?: string;
}

export interface FetchDataParams {
	precision: TimeUnits;
	period: TimeAmount;
}

export interface ChartData {
	Time: ResultData['StartTime'];
	Close: ResultData['Close'];
	Date: ResultData['StartDate'];
}
export interface StockChartProps {
	data: ResultData[];
	isLoadingData: boolean;
	xAxisDisplayBy: 'date' | 'time';
	isError: boolean;
}

export interface TimeSelectionContainerProps {
	timeData: TimeData;
	isLoadingData: boolean;
	setTimeData: React.Dispatch<React.SetStateAction<TimeData>>;
}

export interface ErrorModalProps {
	error: string;
}
