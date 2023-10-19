import { ApexOptions } from 'apexcharts';

export const TotalRevenueSeries = [
  {
    name: 'User',
    data: [500, 352, 200, 400],
  },
  {
    name: 'Guest',
    data: [400, 434, 300, 340],
  },
];

export const TotalRevenueOptions: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: ['#98d89e', '#ee8484'],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: true,
  },
  stroke: {
    colors: ['transparent'],
    width: 4,
  },
  xaxis: {
    categories: ['Week1', 'Week2', 'Week3', 'Week4'],
  },
  yaxis: {
    // title: {
    //   text: '$ (thousands)',
    // },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `${val}`;
      },
    },
  },
};