import { Box } from "@mui/material";
import {
  Outlet, // Default route in case it doesn't match.
  Link,
} from "react-router-dom";
import StartHost from "./root/StartHost";
import Description from "./root/Description";
import StartGuest from "./root/StartGuest";

const Root = ({ socket }) => {
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
        <Link to="/">
          <StartHost socket={socket}></StartHost>
        </Link>
        <Link to="/guestLogin">
          <StartGuest socket={socket}></StartGuest>
        </Link>

        <Link to="/test">test</Link>
      </Box>
      <Outlet />
    </>
  );
};
export default Root;
