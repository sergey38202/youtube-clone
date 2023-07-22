import styled from "styled-components";
import {Stack} from "@mui/material";
import {Link} from "react-router-dom";

export const NavbarContainer = styled(Stack)`
  position: sticky;
  background: white;
  top: 0;
  justify-content: space-between;
`;

export const NavbarLink = styled(Link)`
  display: flex;
  align-content: center;
`;