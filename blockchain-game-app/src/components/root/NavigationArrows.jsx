import { useState, useEffect, React } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useLocation, Link } from "react-router-dom";

const linkedPathList = ["WaitingRoom", "Step_1", "Step_2", "Step_3"];

const NavigationArrows = () => {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextItem, setNextItem] = useState("");
  const [prevItem, setPrevItem] = useState("");

  useEffect(() => {
    const index = items.findIndex(
      (item) => item === location.pathname.slice(1)
    );
    setCurrentIndex(index);
  }, [location]);

  useEffect(() => {
    if (currentIndex !== null && currentIndex < items.length - 1) {
      setNextItem(items[currentIndex + 1]);
    }
    if (currentIndex !== null && currentIndex > 0) {
      setPrevItem(items[currentIndex - 1]);
    }
  }, [currentIndex]);

  return (
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
        <Link to={"/" + prevItem} style={{ textDecoration: "none" }}>
          <IconButton sx={{ color: "black" }}>
            <NavigateBeforeIcon sx={{ fontSize: "40px" }} />
          </IconButton>
        </Link>

        <Link to={"/" + nextItem} style={{ textDecoration: "none" }}>
          <IconButton sx={{ color: "black" }}>
            <NavigateNextIcon sx={{ fontSize: "40px" }} />
          </IconButton>
        </Link>
      </>
    </Box>
  );
};

export default NavigationArrows;
