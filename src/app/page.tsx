import { Button, Typography } from "@mui/material";
import React from "react";

const Page = () => {
  return (
    <>
      <Typography sx={{ color: "red" }}>Hello world</Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
};

export default Page;
