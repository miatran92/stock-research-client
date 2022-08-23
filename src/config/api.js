const baseUrl = 'https://alpaca-stock-app.herokuapp.com/'

export const getHistoricalData = (ticker) => `${baseUrl}/${ticker}`;
export const getStockSummary = (ticker) => `${baseUrl}/stocks/${ticker}`;

