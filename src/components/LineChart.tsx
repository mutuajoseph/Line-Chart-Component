import * as React from 'react';
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
} from '@visx/xychart';
import _ from 'lodash';
import {
  LineChartProps,
  SingleDataSeriesProps,
  AnimatedAxisProps,
} from '../types';

const accessors = {
  xAccessor: (d) => d.x,
  yAccessor: (d) => d.y,
};

const LineChart = ({
  singleDataSeries,
  multiDataSeries,
  chartHeight,
  xScale,
  yScale,
  animatedAxis,
  animatedGridProperties,
}: LineChartProps) => {
  return (
    <XYChart height={chartHeight} xScale={xScale} yScale={yScale}>
      {animatedAxis &&
        animatedAxis.map((item: AnimatedAxisProps, index: number) => (
          <AnimatedAxis key={index} orientation={item?.orientation} />
        ))}
      <AnimatedGrid
        columns={animatedGridProperties?.columns}
        numTicks={animatedGridProperties?.numTicks}
      />

      {/* check if its single data or multiData */}
      {!_.isEmpty(singleDataSeries) && (
        <AnimatedLineSeries
          dataKey={singleDataSeries.dataKey}
          data={singleDataSeries.data}
          {...accessors}
        />
      )}

      {multiDataSeries &&
        multiDataSeries?.map((item: SingleDataSeriesProps, index: number) => (
          <AnimatedLineSeries
            key={index}
            dataKey={item.dataKey}
            data={item.data}
            {...accessors}
          />
        ))}

      <Tooltip
        snapTooltipToDatumX
        snapTooltipToDatumY
        showVerticalCrosshair
        showSeriesGlyphs
        renderTooltip={({ tooltipData, colorScale }) => (
          <div>
            <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
              {tooltipData.nearestDatum.key}
            </div>
            {accessors.xAccessor(tooltipData.nearestDatum.datum)}
            {', '}
            {accessors.yAccessor(tooltipData.nearestDatum.datum)}
          </div>
        )}
        debounce={undefined}
        detectBounds={undefined}
        scroll={undefined}
        zIndex={undefined}
      />
    </XYChart>
  );
};

export default LineChart;
