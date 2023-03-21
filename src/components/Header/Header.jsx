import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/images/Zomato-Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import blackLogo from "../../assets/images/blackLogo.webp";
import { Button } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";

const Header = () => {
  const [open, setOpen] = useState(false);



  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#ffffff',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });


  return (
    <div className="header">
      <nav>
      <ThemeProvider theme={theme}><Button  variant="contained">Get the App</Button></ThemeProvider>
        <div className="right">
  
        <ThemeProvider theme={theme}><Button  variant="contained">Investor Relations</Button></ThemeProvider>
        <ThemeProvider theme={theme}><Button variant="contained">Add restaurant</Button></ThemeProvider>
        <ThemeProvider theme={theme}><Button variant="contained">Log in</Button></ThemeProvider> 
        <ThemeProvider theme={theme}><Button variant="contained">Sign up</Button></ThemeProvider>
        </div>
      </nav>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon style={{ color: "black" }} /> : <MenuIcon />}
      </div>
      {open && (
        <div className="sideMenu">
          <img src={blackLogo} alt="logo"  />
          <div className="innerMenu">
            <span>Investor Relations</span>
            <span>Add Shop</span>
            <span>Log In</span>
            <span>Sign Up</span>
          </div>
        </div>
      )}
      <div className="headerContent">
        <img src={Logo} alt="logo" style={{marginTop:"6rem", }} />
        <h3>Discover Products for You</h3>
        <div className="input">
          {/* <select name="" id="">
            <option value="Chennai">Chennai</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
          </select>
          | */}
          <input
            type="text"
            placeholder="Search for products, appliances etc."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
