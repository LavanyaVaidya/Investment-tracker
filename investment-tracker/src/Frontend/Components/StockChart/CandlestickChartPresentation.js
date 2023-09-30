import React, { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';

const CandlestickChartPresentation = ({chartOptions, Highcharts, volumeChartOptions }) => {
  return (
    <div>
      {chartOptions && (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
      {volumeChartOptions && (
        <HighchartsReact
          highcharts={Highcharts}
          options={volumeChartOptions}
        />
      )}
    </div>
  )
}

export default CandlestickChartPresentation