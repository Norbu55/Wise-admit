// import React from "react";
// import { Box, AppBar, Button } from "@mui/material";
// import logo from "../images/wiseadmit-logo.png";

// function Header() {
//   return (
//     <AppBar sx={{ border: "1px solid red" }}>
//       <Box
//         sx={{
//           height: 100,

//           background: "white",
//           display: "flex",

//           // justifyContent: "space-around",
//         }}
//       >
//         <Box mt={"40px"} ml={"100px"} color={"black"} sx={{ display: "flex" }}>
//           <img
//             src={logo}
//             alt="wise-admit-logo"
//             sx={{ height: "100px", width: "100px" }}
//           />
//           <h2>Wiseadmit</h2>
//         </Box>
//         <Box
//           ml={"41.4rem"}
//           sx={{
//             // border: "1px solid red",
//             width: "fit-content",

//             // float: "right",
//           }}
//         >
//           <Button>About us</Button>
//           <Button>Partner with us</Button>
//           <Button>Programs</Button>
//           <Button color="warning" variant="contained">
//             Apply now!
//           </Button>
//         </Box>
//       </Box>
//     </AppBar>
//   );
// }
// export default Header;

import React from "react";
import { AppBar, Box, Grid, Button } from "@mui/material";
import Image1 from "../images/wiseadmit-logo.png";

function Header() {
  return (
    <AppBar>
      <Box sx={{ border: "1px solid red" }}>
        <Grid md={3}>
          <img src={Image1} alt="wise-admit-logo" />
        </Grid>
        <Grid md={3}>About us</Grid>
        <Grid md={3}>Partner with us</Grid>
        <Grid md={3}>Programs</Grid>
        <Grid>
          <Button color="warning" varaint="contained">
            Apply now!
          </Button>
        </Grid>
      </Box>
    </AppBar>
  );
}

export default Header;
