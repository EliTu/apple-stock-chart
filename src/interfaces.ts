export interface ResultData {
	StartDate: string;
	StartTime: string;
	Open: number;
	High: number;
	Low: number;
	Close: number;
	Volume: number;
	Date: Date;
}

type TimeUnits = 'Minutes' | 'Hours';
type TimeAmount = '1' | '5' | '168';
export interface TimeData {
	timeUnits: TimeUnits;
	amount: TimeAmount;
	label?: string;
}

export interface FetchDataParams {
	precision: TimeUnits;
	period: TimeAmount;
}

export interface StockChartProps {
	data: ResultData[];
	xAxisDisplayBy: 'date' | 'time';
}

export interface TimeSelectionContainerProps {
	timeData: TimeData;
	setTimeData: React.Dispatch<React.SetStateAction<TimeData>>;
}
