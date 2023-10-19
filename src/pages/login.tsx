import { useLogin } from "@refinedev/core";
import { useEffect, useRef } from "react";

import { Box, useMediaQuery } from "@mui/material";

import Typography from "@mui/material/Typography";

import { CredentialResponse } from "../interfaces/google";
import FlexBetween from "components/styledComponents/FlexBetween";
import Form from "./form";
import { makeStyles } from "@mui/styles";
import Logo from "./logo";

const useStyles = makeStyles((theme: any) => ({
  customBox: {
    width: "200px",
    height: "100%",
    background:
      "linear-gradient(to bottom right, #4285f4 0%, #4285f4 50%, #f8faff 50%, #f8faff 100%)",
  },
}));

// Todo: Update your Google Client ID here
// const GOOGLE_CLIENT_ID =
//   "1041339102270-e1fpe2b6v6u1didfndh7jkjmpcashs4f.apps.googleusercontent.com";

export const Login: React.FC = () => {
  const classes = useStyles();
  const { mutate: login } = useLogin<CredentialResponse>();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: "outline",
          size: "medium",
          type: "standard",
        });
      } catch (error) {
        console.log(error);
      }
    }, []);

    return <div ref={divRef} />;
  };

  return (
    <>
      {isNonMobileScreens ? (
        <Box
          height="100vh"
          display="flex"
          alignItems="flex-start"
          bgcolor="#f8faff"
        >
          <Box
            position="relative"
            width="50%"
            height="100%"
            display="flex"
            flexDirection="column"
            bgcolor="#4285f4"
          >
            <Logo />
            <Box
              position="absolute"
              bottom="0"
              right="0"
              className={classes.customBox}
            ></Box>
          </Box>
          <Box
            width="50%"
            height="100%"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            bgcolor="#f8faff"
            p="4rem"
          >
            <Typography fontWeight="bold" fontSize="32px">
              Sign In
            </Typography>
            <Typography font-size="0.875rem" line-height="1.25rem" mb="0.5rem">
              Sign in to your account
            </Typography>
            <FlexBetween gap="0.5rem">
              <Box>
                <GoogleButton />
              </Box>
              <Box>
                <GoogleButton />
              </Box>
            </FlexBetween>
            <Box p="2rem" my="1rem" borderRadius="1.5rem" bgcolor="#ffffff">
              <Form />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          bgcolor="#f8faff"
          p="1rem"
        >
          <Typography fontWeight="bold" fontSize="32px">
            Sign In
          </Typography>
          <Typography font-size="0.875rem" line-height="1.25rem" mb="0.5rem">
            Sign in to your account
          </Typography>
          <Box gap="0.5rem" display="flex" flexDirection="column">
            <GoogleButton />

            <GoogleButton />
          </Box>
          <Box p="2rem" my="1rem" borderRadius="1.5rem" bgcolor="#ffffff">
            <Form />
          </Box>
        </Box>
      )}
    </>
  );
};
