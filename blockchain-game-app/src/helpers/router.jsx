import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet, // Default route in case it doesn't match.
  Link,
} from "react-router-dom";

import StartHost from "../components/StartHost";
import StartGuest from "../components/StartGuest";

const Root = () => {
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

const Test = () => {
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Root />} />
      <Route path="/test" element={<Test />} />
      {/* <Route path="*" element={return (<div>Esta ruta no existe<div/>)} /> */}
    </Route>
  )
);

export default { router };
