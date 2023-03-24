import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

function ButtonGuest({ socket }) {
  const [t, i18n] = useTranslation("global");

  const handleLanguageClick = () => {
    socket.connect();

    // Listen to an event
    socket.on("joined", (data) => {
      console.log(data);
    });
  };

  return (
    <Button
      variant="contained"
      sx={{
        width: "100%",
        height: "5vh",
        borderRadius: '20px',
        backgroundColor: '#708c5c',
        '@media (min-width: 600px)': {
          width: "30%",
        },
      }}
      onClick={handleLanguageClick}
    >
     Let's do it
    </Button>
  );
}

export default ButtonGuest;
