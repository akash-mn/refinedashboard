export interface PieChartProps {
    title: string;
    value: string;
    icon:IconProp;
    series: number;
    colors: string;
}
export interface ProductChartProps {
    labels: Array<string>;
    series: Array<number>;
    colors: Array<string>;
}