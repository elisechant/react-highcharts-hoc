
import React from 'react';
import ReactDOM from 'react-dom';
import HighchartsProvider from "./providers/highchartsProvider";
import Highcharts from 'highcharts';

import BarChart from './components/barChart';

const ExampleApp = () => {
  return (
    <HighchartsProvider Highcharts={Highcharts}>
      <BarChart />
    </HighchartsProvider>
  )
};

ReactDOM.render(
  <ExampleApp />,
  document.getElementById('root')
);
