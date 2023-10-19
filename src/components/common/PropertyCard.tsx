import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { PropertyProps } from "interfaces/common";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FlexBetween from "components/styledComponents/FlexBetween";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function PropertyCard({
  name,
  phoneNumber,
  email,
  youtube,
  instagram,
}: PropertyProps) {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Stack my={2}>
        <Typography fontSize={18} fontWeight={700} color="#11142d">
          {name}
        </Typography>
      </Stack>
      <FlexBetween mt={3} gap={2} flexDirection={isNonMobile ? undefined :"column"}>
        <Box minWidth={isNonMobile ? "50%" : "93%"}>
          <Box display="flex" flexDirection="row">
            <Box
              borderRadius="50%"
              maxHeight="30px"
              maxWidth="30px"
              bgcolor="#bdedc5"
              display="flex"
              justifyContent="center"
              alignItems="center"
              p="4px"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <WhatsAppIcon sx={{ color: "#51cf65" }} />
            </Box>
            <Box sx={{ marginLeft: 1 }} mt={1} alignItems="end">
              <Typography
                variant="body1"
                sx={{
                  textDecoration: "underline",
                }}
                fontWeight="300"
                fontSize="12px"
              >
                +91 {phoneNumber}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box minWidth={isNonMobile ? "50%" : "93%"}>
          <Box display="flex" flexDirection="row">
            <Box
              borderRadius="50%"
              minHeight="20px"
              minWidth="20px"
              bgcolor="#ffe9ec"
              display="flex"
              justifyContent="center"
              alignItems="center"
              p="4px"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <YouTubeIcon sx={{ color: "#ff6175" }} />
            </Box>
            <Box sx={{ marginLeft: 1 }} mt={1} alignItems="end">
              <Typography
                variant="body1"
                sx={{
                  textDecoration: "underline",
                }}
                fontWeight="300"
                fontSize="12px"
              >
                {youtube}
              </Typography>
            </Box>
          </Box>
        </Box>
      </FlexBetween>
      <FlexBetween mt={3} gap={2} flexDirection={isNonMobile ? undefined :"column"}>
        <Box minWidth={isNonMobile ? "50%" : "93%"}>
          <Box display="flex" flexDirection="row">
            <Box
              borderRadius="50%"
              maxHeight="30px"
              maxWidth="30px"
              bgcolor="#c7b9ee"
              display="flex"
              justifyContent="center"
              alignItems="center"
              p="4px"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <EmailOutlinedIcon sx={{ color: "#5c33cf" }} />
            </Box>
            <Box sx={{ marginLeft: 1 }} mt={1} alignItems="end">
              <Typography
                variant="body1"
                sx={{
                  textDecoration: "underline",
                }}
                fontWeight="300"
                fontSize="12px"
              >
                {email}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box minWidth={isNonMobile ? "50%" : "93%"}>
          <Box display="flex" flexDirection="row">
            <Box
              borderRadius="50%"
              minHeight="20px"
              minWidth="20px"
              bgcolor="#ffe9e9"
              display="flex"
              justifyContent="center"
              alignItems="center"
              p="4px"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <InstagramIcon sx={{ color: "#ff5757" }} />
            </Box>
            <Box sx={{ marginLeft: 1 }} mt={1} alignItems="end">
              <Typography
                variant="body1"
                sx={{
                  textDecoration: "underline",
                }}
                fontWeight="300"
                fontSize="12px"
              >
                {instagram}
              </Typography>
            </Box>
          </Box>
        </Box>
      </FlexBetween>
    </>
  );
}

export default PropertyCard;
