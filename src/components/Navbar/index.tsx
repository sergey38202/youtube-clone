import React from "react";
// @ts-ignore
import Logo from "../../assets/logo.png";
import SearchBar from "../SearchBar";

import * as SC from "./styles";

const Navbar = () => (
  <SC.NavbarContainer
      direction="row"
      alignItems="center"
      p={2}
  >
    <SC.NavbarLink to="/">
      <img
          src={Logo}
          alt="logo"
          height={45}
      />
    </SC.NavbarLink>
    <SearchBar />
  </SC.NavbarContainer>
);

export default Navbar;
