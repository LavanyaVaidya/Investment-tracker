import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import NavbarLogin from '../../Components2/NavbarLogin/NavbarLogin';

const CandlestickChartPresentation = ({
  containerOptions,
  Highcharts,
}) => {
  return (
    <>
    <NavbarLogin/>
    <div className='gridGap mt-5 ' >
      
      {containerOptions && (
        <HighchartsReact highcharts={Highcharts} options={containerOptions} />
      )}
    </div>
    </>
  );
};

export default CandlestickChartPresentation;

