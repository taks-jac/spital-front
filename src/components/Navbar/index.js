import React from "react";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  NavWalletBtn,
  NavWalletLink,
} from "./NavbarElements";

import spital_dark from "../../images/spital_dark.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
              <img style={{ maxHeight: '42px' }} src={spital_dark} alt="Spital Logo" />
              &nbsp;
              Spital
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="out-work">Our Work</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="out-team">Our Team</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="lets-talk">Let's Talk</NavLinks>
            </NavItem>
          </NavMenu>
          <NavWalletBtn>
            <NavWalletLink to="metamask">Connect to Wallet</NavWalletLink>
          </NavWalletBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
