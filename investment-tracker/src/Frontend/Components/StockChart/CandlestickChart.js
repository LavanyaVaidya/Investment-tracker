import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts/highstock';
import CandlestickChartPresentation from './CandlestickChartPresentation';

const CandlestickChart = ({ stockName }) => {
  const [containerOptions, setContainerOptions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-chart',
          {
            params: {
              interval: '1mo',
              symbol: `${stockName}`,
              range: 'max',
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
          x: timestamp * 1000,
          open: yahooData.indicators.quote[0].open[index],
          high: yahooData.indicators.quote[0].high[index],
          low: yahooData.indicators.quote[0].low[index],
          close: yahooData.indicators.quote[0].close[index],
          color:
            yahooData.indicators.quote[0].close[index] >=
            yahooData.indicators.quote[0].open[index]
              ? 'green'
              : 'red',
        }));

        const volumeData = yahooData.timestamp.map((timestamp, index) => ({
          x: timestamp * 1000,
          y: yahooData.indicators.quote[0].volume[index],
        }));

        const scrollbar = {
          enabled: true,
        };

        setContainerOptions({
          rangeSelector: {
            selected: 2,
            inputEnabled: false,
          },
          navigator: {
            enabled: true,
          },
          scrollbar: {
            liveRedraw: false,
          },
          chart: {
            height: 550,
          },
          title: {
            text: `${stockName}`,
          },
          xAxis: {
            type: 'datetime',
          },
          yAxis: [
            {
              title: {
                text: 'Price',
              },
              height: '80%',
              marginTop: 20,
            },
            {
              title: {
                text: 'Volume',
              },
              top: '85%',
              height: '15%',
              offset: 0,
              marginTop: 20,
            },
          ],
          series: [
            {
              type: 'candlestick',
              name: 'Candlestick',
              data: candlestickData,
              yAxis: 0,
            },
            {
              type: 'column',
              name: 'Volume',
              data: volumeData,
              color: '#5a287d',
              yAxis: 1,
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [stockName]);

  return (
    <div className='gridGap'>
      <CandlestickChartPresentation
        Highcharts={Highcharts}
        containerOptions={containerOptions}
      />
    </div>
  );
};

export default CandlestickChart;
