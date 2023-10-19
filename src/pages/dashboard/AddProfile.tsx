import * as React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CustomTabPanel from "../../components/utility/CustomTabPanel";
import CloseIcon from "@mui/icons-material/Close";
import { useGetIdentity, useOne } from "@refinedev/core";
import { PropertyCard } from "components";

function AddProfile() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { data: user } = useGetIdentity<{
    email: string;
    userid: string;
  }>();

  const { data, isLoading, isError } = useOne({
    resource: "dashboard",
    id: user?.userid,
  });


  const profiles = data?.data ?? [];
  console.log(data);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error...</Typography>;

  return (
    <>
      <Box
        p={4}
        flex={1}
        bgcolor="#ffffff"
        display="flex"
        flexDirection="column"
        borderRadius="15px"
        border="2px solid #ebebeb"
        boxShadow="5px 10px 10px #ebebeb"
        width="100%"
      >
        {profiles && profiles.length > 0 ? (
          <>
            <PropertyCard
              name={profiles[0].name}
              phoneNumber={profiles[0].phoneNumber}
              email={user?.email}
              youtube={profiles[0].social.youtube}
              instagram={profiles[0].social.instagram}
            />
          </>
        ) : (
          <>
           <Box display="flex" justifyContent="center" alignItems="center" p={2}>
            <Stack direction="column" mt={3} gap={2}>
              <Box
                borderRadius="50%"
                minHeight="60px"
                bgcolor="#f5f5f5"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={handleClickOpen}
              >
                <AddIcon sx={{ color: "#a5a7ab" }} />
              </Box>
              <Typography fontSize="14px" color="#808191" fontWeight={500}>
                Add Profile
              </Typography>
            </Stack>
          </Box>
          </>
        )}

      </Box>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose} sx={{ borderRadius: "100px" }}>
        <DialogTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontWeight="700">Add New Profile</Typography>
            <CloseIcon
              sx={{ fontSize: "18px", "&:hover": { cursor: "pointer" } }}
              onClick={handleClose}
            />
          </Box>
        </DialogTitle>
        <Divider />
        <CustomTabPanel handleClose={handleClose} />{" "}
        {/* Pass the form submit function to the CustomTabPanel */}
      </Dialog>
    </>
  );
}

export default AddProfile;
