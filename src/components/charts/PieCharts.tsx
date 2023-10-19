import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { PieChartProps } from "interfaces/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function PieCharts({ title, value, series, colors, icon }: PieChartProps) {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  return (
    <Box
      id="chart"
      flex={2}
      bgcolor="#ffffff"
      flexDirection={isNonMobileScreens ? "row" : "column"}
      alignItems="center"
      px={2}
      py={2}
      gap={1}
      borderRadius="15px"
      minHeight="110px"
      width="fit-content"
      border="2px solid #ebebeb"
      boxShadow="5px 10px 10px #ebebeb"
    >
      <Stack direction="column">
        <Box
          bgcolor={colors}
          p={1}
          width="50px"
          borderRadius="50%"
          marginBottom={1}
        >
          <FontAwesomeIcon
            icon={icon}
            fontSize={24}
            width="100%"
            color="#FCFCFC"
          />
        </Box>
        <Typography fontSize={14} color="#11142d">
          {title}
        </Typography>

        <Box
          gap="1rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontSize={24} color="#11142d" fontWeight={700}>
            {value}
          </Typography>
          <Box borderRadius="15px" bgcolor="#e9f9eb" px="0.5rem" py="0.25rem">
            <Typography color="#98d89e" fontSize="14px">+{series}%</Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default PieCharts;
