import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PlayerContext } from "../helper/Context";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
} from "mdb-react-ui-kit";
import { GiCandyCanes } from "react-icons/gi";
import { BsPersonCircle } from "react-icons/bs";
import { GrScorecard } from "react-icons/gr";

const Navbar = () => {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
  const currentPage = useLocation().pathname.substring(1, 5);

  const playerName = localStorage.getItem("candyCrashName");
  const playerScore = localStorage.getItem("candyCrashScore");

  if (currentPage !== "game") {
    return (
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <Link to="/"><GiCandyCanes className="bg-icon" /> Candy Crash</Link>
          </MDBNavbarBrand>
          <MDBBtn outline color="primary" size="sm" type="button">
            <Link to="/game">Start</Link>
          </MDBBtn>
        </MDBContainer>
      </MDBNavbar>
    );
  }
  if (currentPage === "game") {
    return (
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <Link to="/">
              <GiCandyCanes style={{ fontSize: "24px", marginLeft: "5px" }} />{" "}
              Candy Crash ||
            </Link>
          </MDBNavbarBrand>

          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 justify-content-between">
              <MDBNavbarItem>
                <div className="user-info">
                  <div className="icon">
                    <BsPersonCircle />
                  </div>
                  <p>
                    <span>Player:</span>
                    {playerName}
                  </p>
                </div>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <div className="user-info">
                  <div className="icon">
                    <GrScorecard />
                  </div>

                  <p>
                    <span>Score:</span>
                    {playerScore}
                  </p>
                </div>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBBtn outline color="secondary" size="sm" type="button">
                  <Link to="/dashboard">Dashboard</Link>
                </MDBBtn>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBBtn outline color="danger" size="sm" type="button">
                  <Link to="/">Exit</Link>
                </MDBBtn>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
};

export default Navbar;
