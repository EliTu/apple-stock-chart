import { FetchDataParams } from './interfaces';

export const setUrlParamsBy = ({ period, precision }: FetchDataParams) => {
	const augmentedUrl = `https://www.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${period}&Precision=${precision}&StartTime=8/28/2020%2016:0&EndTime=9/4/2020%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;

	return augmentedUrl;
};

export const formatStringByLength = (value: string, end: number) =>
	value.slice(0, end);
