import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { TotalRevenueSeries, TotalRevenueOptions } from "./chart.config";

function Activities() {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#ffffff"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
      border="2px solid #ebebeb"
      boxShadow="5px 10px 10px #ebebeb"
    >
      <Typography fontSize={18} fontWeight={700} color="#11142d">
        Activities
      </Typography>
      <Stack direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={14} fontWeight={500} color="#808191">
          May-June 2021
        </Typography>
      </Stack>
      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  );
}

export default Activities;
