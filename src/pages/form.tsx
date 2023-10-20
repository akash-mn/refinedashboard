import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  InputLabel,
} from "@mui/material";

const Form: React.FC = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const classes = useStyles();

  const handleLogin = () => {
    // Add your login logic here, e.g., call an authentication API.
    console.log("Login clicked");
  };
  const customStyles = {
    smallButton: {
      height: "30px", // Reduce the height
      padding: "8px 16px", // Reduce the padding
    },
  };

  return (
    <Box
      width={isNonMobile ? "100%" : "93%"}
      display="flex"
      flexDirection="column"
      gap="1rem"
    >
      <InputLabel sx={{ color: "#2f3542" }}>Email Address</InputLabel>
      <TextField
        // label="Email"
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.email}
        name="email"
        // error={Boolean(touched.email) && Boolean(errors.email)}
        // helperText={touched.email && errors.email}
        // className={classes.textField}
        sx={{
          // "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
          //   padding: "4px",
          //   backgroundColor: "#F0F0F0",
          //   borderRadius: "8px",
          // },
          "& .css-1v4ccyo": {
            height: "2rem",
          },
          "& .css-igs3ac": {
            border: "none",
            backgroundColor: "#F0F0F0",
            borderRadius: "8px",
          },
          // "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
          //   border: "none",
          // },
        }}
      />
      <InputLabel sx={{ color: "#2f3542" }}>Password</InputLabel>
      <TextField
        // label="Password"
        type="password"
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.password}
        name="password"
        // error={Boolean(touched.password) && Boolean(errors.password)}
        // helperText={touched.password && errors.password}
        // className={classes.textField}
        sx={{
          // "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
          //   padding: "4px",
          //   backgroundColor: "#F0F0F0",
          //   borderRadius: "8px",
          // },
          // "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
          //   border: "none",
          // },
          "& .css-1v4ccyo": {
            height: "2rem",
          },
          "& .css-igs3ac": {
            border: "none",
            backgroundColor: "#F0F0F0",
            borderRadius: "8px",
          },
        }}
      />
      <Box>
        <Typography color="#4285f4">Forgot password?</Typography>
        <Button
          fullWidth
          type="submit"
          sx={{
            m: "2rem 0",
            p: "1rem",
            backgroundColor: "#4285f4",
            color: "#1A1A1A",
            "&:hover": { color: "#00D5FA" },
            borderRadius: "0.5rem",
          }}
          style={customStyles.smallButton}
        >
          <Typography fontWeight="bold" fontSize="14px" color="#FFFFFF">
            LOGIN
          </Typography>
        </Button>
        <Typography onClick={() => {}}>
          Don't have an account?{" "}
          <span style={{ color: "#4285f4" }}>Register here</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Form;
