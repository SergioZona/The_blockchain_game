import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, IconButton } from "@mui/material";
import { React, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavigationArrows = ({ socket, host, usersInfo, room }) => {
  const location = useLocation();
  let navigate = useNavigate();

  const list = [
    "WaitingRoom",
    "Step_1",
    "Step_2",
    "Step_2_1",
    "Step_3",
    "Step_4",
    "Step_4_1",
  ];
  const index = list.indexOf(location.pathname.slice(1)); // remove leading slash
  const previous = index > 0 ? list[index - 1] : null;
  const next = index < list.length - 1 ? list[index + 1] : null;
  const previousExists = previous == null ? false : true;
  const nextExists = next == null ? false : true;

  const handleClick = async (path) => {
    await socket.emit("change_path", usersInfo, path, parseInt(room));
  };

  useEffect(() => {
    // Join the user to the next step
    socket.on("change_path", (data) => {
      navigate("/" + data.path, {
        state: {
          host: host,
          data: data.usersInfo,
          path: data.path,
          room: data.room,
        },
      });
    });
  }, [socket]);

  return (
    <>
      {host && (
        <Box
          sx={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100px",
          }}
        >
          <>
            {previousExists && (
              <Link
                to={"/" + previous}
                style={{ textDecoration: "none" }}
                onClick={(event) => {
                  event.preventDefault();
                  handleClick(previous);
                }}
              >
                <IconButton sx={{ color: "black" }}>
                  <NavigateBeforeIcon sx={{ fontSize: "40px" }} />
                </IconButton>
              </Link>
            )}

            {nextExists && (
              <Link
                to={"/" + next}
                style={{ textDecoration: "none" }}
                onClick={(event) => {
                  event.preventDefault();
                  handleClick(next);
                }}
              >
                <IconButton sx={{ color: "black" }}>
                  <NavigateNextIcon sx={{ fontSize: "40px" }} />
                </IconButton>
              </Link>
            )}
          </>
        </Box>
      )}
    </>
  );
};

NavigationArrows.defaultProps = {
  host: false,
};

export default NavigationArrows;
