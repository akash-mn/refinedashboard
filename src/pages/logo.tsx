import {
  Box,
  Typography,
} from "@mui/material";
import FlexBetween from "components/styledComponents/FlexBetween";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

function Logo() {
  return (
    <>
      <Box>
        <Typography fontWeight="bold" fontSize="22px" color="#FFFFFF" m="2rem">
          Logo
        </Typography>
      </Box>
      <Box display="flex" justifyContent="start" alignItems="center" padding="10rem">
        <Box>
          <Typography fontWeight="bold" fontSize="44px" color="#FFFFFF">Board.</Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="start" alignItems="start" mx="6rem" p="2rem">
        <FlexBetween gap="1rem">
          <GitHubIcon sx={{color:"#ffffff",fontSize:"32px"}}/>
          <TwitterIcon sx={{color:"#ffffff",fontSize:"32px"}} />
          <LinkedInIcon sx={{color:"#ffffff",fontSize:"32px"}} />
          <FontAwesomeIcon icon={faDiscord} style={{color:"#ffffff",fontSize:"32px"}} />
        </FlexBetween>
      </Box>
    </>
  );
}

export default Logo;
