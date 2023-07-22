import styled from "styled-components";
import { Stack } from "@mui/material";

export const SidebarContainer = styled(Stack)`
  overflow-y: auto;
  height: auto;
  background: white;
  
  @media (min-width: 768px) {
    height: 95%;
    flex-direction: column;
  }
`;

export const SidebarBtn = styled.button<{ selectedCategory: boolean }>`
  background: ${({ selectedCategory }) => selectedCategory ? '#FC1503' : 'unset'};
  color: white;
`;

export const SidebarBtnIcon = styled.span<{ selectedCategory: boolean }>`
  color: ${({ selectedCategory }) => selectedCategory ? 'white' : 'red'};
  margin-right: 15px;
`;

export const SidebarBtnTitle = styled.span<{ selectedCategory: boolean }>`
  opacity: ${({ selectedCategory }) => selectedCategory ? '1' : '0.8'};
  color: ${({ selectedCategory }) => selectedCategory ? 'white' : 'black'};
`;