import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Button } from "@mui/material";
import ModalDialog from "./Dialog";

export default function CardElement({ id, cardImage, bigImage }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 345 }} key={id}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={cardImage} />
        <ModalDialog open={open} onClose={handleClose} bigImage={bigImage} />
      </CardActionArea>
      <Button
        sx={{
          width: "100%",
        }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Open
      </Button>
    </Card>
  );
}
