
import { Typography, Box, Stack } from "@mui/material";
import { PieCharts, Activities, TopProducts } from "components";
import {
  faMoneyBillTransfer,
  faTags,
  faThumbsUp,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import AddProfile from "./AddProfile";

function Home() {
  return (
    <Box bgcolor="#f8faff">
      <Typography fontSize={25} fontWeight={700} color="#2f3542">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieCharts
          title="Total Revenues"
          value="$2,129,430"
          series={2.5}
          colors="#98d89e"
          icon={faMoneyBillTransfer}
        />
        <PieCharts
          title="Total Transctions"
          value="1,520"
          series={1.7}
          colors="#debf85"
          icon={faTags}
        />
        <PieCharts
          title="Total Likes"
          value="9,721"
          series={1.4}
          colors="#ee8484"
          icon={faThumbsUp}
        />
        <PieCharts
          title="Total Users"
          value="9,721"
          series={4.2}
          colors="#a9b0e5"
          icon={faUserGroup}
        />
      </Box>
      <Stack mt="25px" width="100%">
        <Activities />
      </Stack>
      <Stack
        mt="25px"
        gap={2}
        width="100%"
        direction={{ xs: "column", lg: "row" }}
      >
        <TopProducts
          labels={["Basic Tees", "Custom Short Pants", "Super Hoodies"]}
          series={[47, 32, 10]}
          colors={["#ee8484", "#98d89e", "#f6dc7d"]}
        />
        <AddProfile />
      </Stack>
    </Box>
  );
}

export default Home;
