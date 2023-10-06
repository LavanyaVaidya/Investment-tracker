import React, { useEffect, useState  } from 'react';
import  {useLocation} from 'react-router-dom'
import axios from 'axios';
import Highcharts from 'highcharts/highstock';
import CandlestickChartPresentation from './CandlestickChartPresentation';


const CandlestickChart = () => {

  const location = useLocation();
  const stockName = location.state;
  console.log(stockName)

  const [containerOptions, setContainerOptions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4200/stockHistory');
        const nameToFilter = `${stockName}`; 

        const filteredData = response.data.filter(item => item.name === nameToFilter);
        if(filteredData.length === 0) {
          alert("Stock of this symbol doesn't exist");
          return;
        }
        const yahooData = filteredData[0].chart.result[0];

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
    <div >
      <CandlestickChartPresentation
        Highcharts={Highcharts}
        containerOptions={containerOptions}
      />
    </div>
  );
};

export default CandlestickChart;
