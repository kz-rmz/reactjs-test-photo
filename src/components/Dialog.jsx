import * as React from "react";
import { Dialog, Box, Button } from "@mui/material";

export default function ModalDialog(props) {
  const { onClose, open, bigImage } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box
        sx={{
          position: "relative",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          "&:hover": {
            boxShadow: "1px 2px 9px #000000",
          },
        }}
      >
        <Button
          sx={{ position: "absolute", right: "1rem", top: "1rem" }}
          onClick={handleClose}
        >
          Close
        </Button>
        <img
          sx={{ objectFit: "fill" }}
          src={bigImage}
          alt=""
          height="600px"
          width="600px"
        />
      </Box>
    </Dialog>
  );
}
