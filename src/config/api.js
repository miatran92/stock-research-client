
export const getHistoricalData = (ticker) => `https://alpaca-stock-app.herokuapp.com/${ticker}`;
export const getStockSummary = (ticker) => `https://alpaca-stock-app.herokuapp.com/stocks/${ticker}`;
export const getTopGainers = () => 'https://alpaca-stock-app.herokuapp.com/overview/movers/gainers';
export const getTopLosers = () => 'https://alpaca-stock-app.herokuapp.com/overview/movers/losers';
export const getMostActives = () => 'https://alpaca-stock-app.herokuapp.com/overview/movers/most-active';
export const getIndexes = () => 'https://alpaca-stock-app.herokuapp.com/overview/market';