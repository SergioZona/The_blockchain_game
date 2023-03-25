import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

function ButtonGuest({ socket }) {
  const [t, i18n] = useTranslation("global");

  return (
    <Button
      variant="contained"
      sx={{
            width: '40ch',
            marginTop:"-1em",
            maxWidth: '350px',
            backgroundColor: '#708c5c',
            borderRadius: '20px',
            textAlign: "center",
            '@media (max-width:600px)': {
                width: '100%',
                maxWidth: '100%',
                marginLeft: '0px',
                marginRight: '0px'
            },
      }}
    >
     Let's do it
    </Button>
  );
}

export default ButtonGuest;
