import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts/highstock';
import CandlestickChartPresentation from './CandlestickChartPresentation';

const CandlestickChart = ({ stockName }) => {
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-chart',
          {
            params: {
              interval: "1mo",
              symbol: `${stockName}`,
              range: '5y',
              region: 'US',
              includePrePost: 'false',
              useYfid: 'true',
              includeAdjustedClose: 'true',
              events: 'capitalGain,div,split',
            },
            headers: {
              'X-RapidAPI-Key':
                '27f0259ee1msh4deb4018f355c14p15bb58jsnfbc02b9c12c2',
              'X-RapidAPI-Host':
                'apidojo-yahoo-finance-v1.p.rapidapi.com',
            },
          }
        );
  
        const yahooData = response.data.chart.result[0];
  
        const candlestickData = yahooData.timestamp.map((timestamp, index) => ({
          x: timestamp * 1000, // Convert timestamp to milliseconds
          open: yahooData.indicators.quote[0].open[index],
          high: yahooData.indicators.quote[0].high[index],
          low: yahooData.indicators.quote[0].low[index],
          close: yahooData.indicators.quote[0].close[index],
          color: yahooData.indicators.quote[0].close[index] >= yahooData.indicators.quote[0].open[index] ? 'green' : 'red',
        }));
  
        const volumeData = yahooData.timestamp.map((timestamp, index) => ({
          x: timestamp * 1000, // Convert timestamp to milliseconds
          y: yahooData.indicators.quote[0].volume[index],
        }));
  
        setChartOptions({
          title: { 
            text: '',
          },
          rangeSelector: {
            selected: 2,
          },
          xAxis: {
            type: 'datetime', // Use datetime type for x-axis
          },
          series: [
            {
              type: 'candlestick',
              name: 'Candlestick',
              data: candlestickData,
            },
          ],
        });
  
        setVolumeChartOptions({
          title: {
            text: '',
          },
          xAxis: {
            type: 'datetime',
          },
          yAxis: {
            title: {
              text: 'Volume',
            },
          },
          series: [
            {
              type: 'column',
              name: 'Volume',
              data: volumeData,
              color: '#5a287d',
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [stockName]);

  const [volumeChartOptions, setVolumeChartOptions] = useState(null);

  return (
    <div className='gridGap'>
      <h3>{stockName}</h3>
      <CandlestickChartPresentation Highcharts={Highcharts} chartOptions={chartOptions} volumeChartOptions={volumeChartOptions}/>
    </div>
  );
};

export default CandlestickChart;
