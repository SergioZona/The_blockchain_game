import { useState } from "react";

import { Box } from "@mui/material";
import {
  Link,
  Outlet, // Default route in case it doesn't match.
} from "react-router-dom";
import ConfirmationAlert from "./root/ConfirmationAlert";
import Description from "./root/Description";
import StartGuest from "./root/StartGuest";
import StartHost from "./root/StartHost";

const Root = ({ socket }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = async () => {
    // Handle user confirmation action here
    setOpen(false);
  };

  return (
    <>
      <Description />
      <Box
        className="start-game"
        sx={{
          marginTop: "-4em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <StartHost sendData={setOpen}></StartHost>
        <ConfirmationAlert
          open={open}
          handleClose={handleClose}
          handleConfirm={handleConfirm}
        />
        <Link to="/guestLogin" style={{ textDecoration: "none" }}>
          <StartGuest socket={socket}></StartGuest>
        </Link>
      </Box>
      <Outlet />
    </>
  );
};
export default Root;
