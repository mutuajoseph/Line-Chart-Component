import * as React from 'react';
import LineChart from './components/LineChart';
import './style.css';
import {
  singleDataSeries,
  multiDataSeries,
  singleDataSeriesNull,
  multiDataSeriesNull,
} from './dataStub';
import {
  AnimatedAxisProps,
  AnimatedGridProperties,
  XScaleProps,
  YScaleProps,
} from './types';

export default function App() {
  let chartHeight = 400;
  let xScale: XScaleProps = { type: 'band' };
  let yScale: YScaleProps = { type: 'linear' };
  let animatedAxis: AnimatedAxisProps[] = [
    { orientation: 'bottom' },
    { orientation: 'left' },
  ];
  let animatedGridProperties: AnimatedGridProperties = {
    columns: false,
    numTicks: singleDataSeries
      ? singleDataSeries?.data?.length
      : multiDataSeries
      ? multiDataSeries[0]?.data?.length
      : 4,
  };

  return (
    <div>
      <h1>Welcome to my line chart</h1>

      <section>
        <LineChart
          singleDataSeries={singleDataSeriesNull}
          multiDataSeries={multiDataSeries}
          chartHeight={chartHeight}
          xScale={xScale}
          yScale={yScale}
          animatedAxis={animatedAxis}
          animatedGridProperties={animatedGridProperties}
        />
      </section>
    </div>
  );
}
