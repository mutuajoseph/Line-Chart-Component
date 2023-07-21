export interface LineChartProps {
  singleDataSeries: SingleDataSeriesProps;
  multiDataSeries: SingleDataSeriesProps[] | null;
  chartHeight: number;
  xScale: XScaleProps;
  yScale: YScaleProps;
  animatedAxis: AnimatedAxisProps[];
  animatedGridProperties: AnimatedGridProperties;
}

export interface SingleDataSeriesProps {
  dataKey: string;
  data: { x: string | number; y: string | number }[];
}

export interface XScaleProps {
  type: string;
}

export interface YScaleProps {
  type: string;
}

export interface AnimatedGridProperties {
  columns: boolean;
  numTicks: number;
}

export interface AnimatedAxisProps {
  orientation: 'bottom' | 'top' | 'left' | 'right';
}
