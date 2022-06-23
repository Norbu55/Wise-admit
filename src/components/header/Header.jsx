import React from "react";
import Grid from "@mui/material/Grid";
import logo from "../images/wiseadmit-logo.png";

const Header = () => {
  return (
    <Grid container>
      <Grid xs={8}>
        <img src={logo} alt="wise logo" />
      </Grid>
      <Grid container xs={4}>
        <p>About us</p>
        <p>Partner with us</p>
        <p>Programs</p>
        <button>Apply now!</button>
      </Grid>
    </Grid>
  );
};

export default Header;
