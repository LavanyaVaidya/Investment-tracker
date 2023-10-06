import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import NavBar from '../Navbar/NavBar';

const CandlestickChartPresentation = ({
  containerOptions,
  Highcharts,
}) => {
  return (
    <>
    <NavBar/>
    <div className='gridGap mt-5 ' >
      
      {containerOptions && (
        <HighchartsReact highcharts={Highcharts} options={containerOptions} />
      )}
    </div>
    </>
  );
};

export default CandlestickChartPresentation;

