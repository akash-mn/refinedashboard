import { Box, Stack, Typography,useMediaQuery } from "@mui/material";
import { ProductChartProps } from "interfaces/home";
import ReactApexChart from "react-apexcharts";

function TopProducts({ labels, series, colors }: ProductChartProps) {
  const isNonMobile = useMediaQuery("(min-width:900px)");
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#ffffff"
      display="flex"
      id="chart"
      flexDirection="column"
      borderRadius="15px"
      border="2px solid #ebebeb"
      boxShadow="5px 10px 10px #ebebeb"
      width="100%"
    >
      <Stack direction="row" display="flex" justifyContent="space-between">
        <Typography fontSize={18} fontWeight={700} color="#11142d">
          Top products
        </Typography>
        <Typography fontSize={14} fontWeight={500} color="#808191">
          May-June 2021
        </Typography>
      </Stack>
      <ReactApexChart
        options={{
          chart: { type: "donut" },
          colors,
          plotOptions: {
            pie: {
              donut: {
                size: "75%",
              },
            },
          },
          legend: {
            show: true,
            position: "right",
            offsetY: 20,
          },
          labels,
          dataLabels: { enabled: true,  offsetY: 10 },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#ABE5A1"],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: "round",
          },
        }}
        series={series}
        type="donut"
        width={isNonMobile ? 380 : 330}
      />
    </Box>
  );
}

export default TopProducts;
