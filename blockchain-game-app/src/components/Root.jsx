import { Box } from "@mui/material";
import {
  Outlet, // Default route in case it doesn't match.
  Link,
} from "react-router-dom";
import StartHost from "./StartHost";

const Root = ({ socket }) => {
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

        <Link to="/test">test</Link>
      </Box>
      <Outlet />
    </>
  );
};
export default Root;