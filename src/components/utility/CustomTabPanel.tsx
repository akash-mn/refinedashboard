import { useState } from "react";
import { useGetIdentity } from "@refinedev/core";
import { useForm } from "@refinedev/core";
import {
  Box,
  Stack,
  Typography,
  TextField,
  InputLabel,
  Button,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  tabs: {
    display: "flex",
    justifyContent: "space-between",
  },
  tab: {
    padding: "10px 1px",
    cursor: "pointer",
    borderBottom: "5px solid transparent",
  },
  activeTab: {
    borderBottom: "5px solid #4285f4",
    borderBottomRightRadius: "4px",
    borderBottomLeftRadius: "4px",
  },
}));
interface CustomTabPanelProps {
  handleClose: () => void;
}

function CustomTabPanel(props: CustomTabPanelProps) {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:900px)");
  const classes = useStyles();
  const { data: user } = useGetIdentity<{
    email: string;
    userid: string;
  }>();
  const [activeTab, setActiveTab] = useState(0);
  const { onFinish } = useForm({
    action: "create",
  });
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    phoneNumber: "",
    instagram: "",
    youtube: "",
  });
  const handleCloseModal = () => {
    props.handleClose(); // Call the function to close the modal
  };
  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };

  const handleNext = () => {
    setActiveTab(1);
  };

  const handleBack = () => {
    setActiveTab(0);
  };
  const onchange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await onFinish({ ...formData, id: user?.userid });
    handleCloseModal();
    navigate("/");
  };

  return (
    <>
      <form>
        <Stack
          direction="column"
          maxWidth="440px"
          margin="0 auto"
          px={1}
          py={1}
        >
          <Box className={classes.tabs}>
            <Box
              className={clsx(
                classes.tab,
                `${activeTab === 0 ? classes.activeTab : ""} `
              )}
              onClick={() => handleTabClick(0)}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  px: 5,
                }}
              >
                <Typography fontWeight="700">Basic</Typography>
              </Box>
            </Box>
            <Box
              className={clsx(
                classes.tab,
                `${activeTab === 1 ? classes.activeTab : ""} `
              )}
              onClick={() => handleTabClick(1)}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  px: 5,
                }}
              >
                <Typography fontWeight="700">Contact</Typography>
              </Box>
            </Box>
          </Box>

          {activeTab === 0 && (
            <Stack direction="column" gap={2}>
              <Box mt={2} px={1}>
                <InputLabel sx={{ color: "#2f3542" }}>Enter Name*</InputLabel>
                <TextField
                  placeholder="Eg.Jhon Doe"
                  name="name"
                  sx={{
                    // "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                    //   {
                    //     padding: "8px",
                    //     width: `${isNonMobile ? "300px" : "250px"}`,
                    //     borderRadius: "8px",
                    //   },
                    "& .css-1v4ccyo":
                    {
                      width: `${isNonMobile ? "300px" : "250px"}`,
                      borderRadius: "8px",
                      height: "2rem",
                    },
                    
                  }}
                  onChange={(e) => onchange(e)}
                />
              </Box>
              <Box px={1}>
                <InputLabel sx={{ color: "#2f3542" }}>
                  Enter password*
                </InputLabel>
                <TextField
                  placeholder="Eg.Jhon@xyz"
                  name="password"
                  sx={{
                    // "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                    //   {
                    //     padding: "8px",
                    //     width: `${isNonMobile ? "300px" : "250px"}`,
                    //     borderRadius: "8px",
                    //   },
                    "& .css-1v4ccyo":
                    {
                      width: `${isNonMobile ? "300px" : "250px"}`,
                      borderRadius: "8px",
                      height: "2rem",
                    },
                    
                  }}
                  onChange={(e) => onchange(e)}
                />
              </Box>
              <Box px={1}>
                <InputLabel sx={{ color: "#2f3542" }}>Enter Phone*</InputLabel>
                <TextField
                  placeholder="Eg.9123456789"
                  name="phoneNumber"
                  sx={{
                    // "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                    //   {
                    //     padding: "8px",
                    //     width: `${isNonMobile ? "300px" : "250px"}`,
                    //     borderRadius: "8px",
                    //   },
                    "& .css-1v4ccyo":
                    {
                      width: `${isNonMobile ? "300px" : "250px"}`,
                      borderRadius: "8px",
                      height: "2rem",
                    },
                    
                  }}
                  onChange={(e) => onchange(e)}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="end"
                mt="20px"
                alignItems="center"
              >
                <Button
                  sx={{
                    borderRadius: "8px",
                    color: "#4285f4",
                    py: "8px",
                    px: "4px",
                  }}
                  variant="contained"
                  onClick={handleNext}
                >
                  <Typography
                    color="#FFFFFF"
                    fontSize="10px"
                    py="5px"
                    fontWeight={300}
                  >
                    Next
                  </Typography>
                </Button>
              </Box>
            </Stack>
          )}
          {activeTab === 1 && (
            <Stack direction="column" gap={2}>
              <Box mt={2} px={1}>
                <InputLabel sx={{ color: "#2f3542" }}>
                  Instagram Link*
                </InputLabel>
                <TextField
                  placeholder="Eg. ..instagram.com/username"
                  name="instagram"
                  sx={{
                    // "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                    //   {
                    //     padding: "8px",
                    //     width: `${isNonMobile ? "300px" : "250px"}`,
                    //     borderRadius: "8px",
                    //   },
                    "& .css-1v4ccyo":
                    {
                      width: `${isNonMobile ? "300px" : "250px"}`,
                      borderRadius: "8px",
                      height: "2rem",
                    },
                    
                  }}
                  onChange={(e) => onchange(e)}
                />
              </Box>
              <Box px={1}>
                <InputLabel sx={{ color: "#2f3542" }}>Youtube Link*</InputLabel>
                <TextField
                  placeholder="Eg. ..youtube.com/username"
                  name="youtube"
                  sx={{
                    // "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                    //   {
                    //     padding: "8px",
                    //     width: `${isNonMobile ? "300px" : "250px"}`,
                    //     borderRadius: "8px",
                    //   },
                    "& .css-1v4ccyo":
                    {
                      width: `${isNonMobile ? "300px" : "250px"}`,
                      borderRadius: "8px",
                      height: "2rem",
                    },
                  }}
                  onChange={(e) => onchange(e)}
                />
              </Box>
              <Box
                display="flex"
                justifyContent={isNonMobile ? "end" : "end"}
                mt="20px"
                alignItems="center"
                py={1}
              >
                <Stack direction="row" gap="8px">
                  <Button
                    sx={{
                      borderRadius: "8px",
                      color: "#4285f4",
                      py: "8px",
                      px: "4px",
                    }}
                    variant="contained"
                    onClick={handleBack}
                  >
                    <Typography
                      color="#FFFFFF"
                      fontSize="10px"
                      py="5px"
                      fontWeight={300}
                    >
                      Back
                    </Typography>
                  </Button>
                  <Button
                    sx={{
                      borderRadius: "8px",
                      color: "#4285f4",
                      py: "8px",
                      px: "4px",
                    }}
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    <Typography
                      color="#FFFFFF"
                      fontSize="10px"
                      py="5px"
                      fontWeight={300}
                    >
                      Submit
                    </Typography>
                  </Button>
                </Stack>
              </Box>
            </Stack>
          )}
        </Stack>
      </form>
    </>
  );
}

export default CustomTabPanel;
