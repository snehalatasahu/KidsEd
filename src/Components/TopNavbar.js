import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { TiThMenu } from "react-icons/ti"
import "./CSS/TopNavbar.css";
import { FaUserCircle } from "react-icons/fa";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const TopNavbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [smallscreen, setSmallscreen] = useState(
    window.innerWidth <= 600 ? true : false
  );



  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    };
    setDrawer(open);
  };

  const changeMenu = () => {
    if (window.innerWidth <= 600) {
      setSmallscreen(true);
    } else {
      setSmallscreen(false);
    }
  };



  window.addEventListener("resize", changeMenu);
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <Navbar sticky="top" className={navbar ? "navbar active" : "navbar"}>
        <Navbar.Brand href="/">KidsEd.</Navbar.Brand>
        <Nav className="ml-auto" style={{ display: smallscreen ? "none" : "" }}>
          <Nav.Link href="#home">Development Structure</Nav.Link>
          <Nav.Link href="#home">Tips For Parents</Nav.Link>
          <NavDropdown title="Start Learning" id="collasible-nav-dropdown">
            <NavDropdown.Item> Age 0-2 </NavDropdown.Item>
            <NavDropdown.Item> Age 0-2 </NavDropdown.Item>
            <NavDropdown.Item> Age 0-2 </NavDropdown.Item>
            <NavDropdown.Item> Age 0-2 </NavDropdown.Item>
            <NavDropdown.Item> Age 0-2 </NavDropdown.Item>
            <NavDropdown.Item> Age 0-2 </NavDropdown.Item>
            <NavDropdown.Item> Age 0-2 </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">
            <FaUserCircle
              style={{ height: "1.5em", width: "1.5em", paddingRight: "5px" }}
            />
            Login
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto" style={{ display: smallscreen ? "" : "none" }}>
          <Button onClick={toggleDrawer(true)}><TiThMenu size="2em" style={{color:"white"}}/></Button>
        </Nav>
      </Navbar>
      <SwipeableDrawer
        anchor="left"
        open={drawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem button key="Login">
            <ListItemIcon>
              <FaUserCircle
                style={{ height: "2.5em", width: "2.5em", paddingRight: "5px" }}
              />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
          <Divider />
          <ListItem button key="Development Structure">
            <ListItemText primary="Development Structure" />
          </ListItem>
          <ListItem button key="Tips For Parents">
            <ListItemText primary="Tips For Parents" />
          </ListItem>
          <ListItem button key="Start Learning">
            <ListItemText primary="Start Learning" />
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );
};

export default TopNavbar;
