import React from 'react';
import HighchartsReact from 'highcharts-react-official';

const CandlestickChartPresentation = ({
  containerOptions,
  Highcharts,
}) => {
  return (
    <div>
      {containerOptions && (
        <HighchartsReact highcharts={Highcharts} options={containerOptions} />
      )}
    </div>
  );
};

export default CandlestickChartPresentation;
