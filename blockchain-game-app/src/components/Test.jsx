import { Box } from "@mui/material";
import {
  Outlet, // Default route in case it doesn't match.
  Link,
} from "react-router-dom";
import StartGuest from "./root/StartGuest";
import StartHost from "./root/StartHost";

const Test = ({ socket }) => {
  return (
    <>
      <Box
        className="start-game"
        sx={{
          marginTop: "20em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <Link to="/">
          <StartHost socket={socket}></StartHost>
        </Link>

        <Link to="/test">
          <StartGuest socket={socket}></StartGuest>
        </Link>
      </Box>
      <Outlet />
    </>
  );
};

export default Test;
