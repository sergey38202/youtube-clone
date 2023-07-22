import {Box, Stack, Typography} from "@mui/material";
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export const FeedContainer = styled(Stack)`
  display: flex;
  flex-direction: row !important;

  @media (min-width: 768px) {
    position: relative;
    flex-direction: column;
  }
`;

export const FeedInfoBlock = styled(Box)<{ isOpenedSideBar: boolean }>`
  height: auto;
  padding-left: 0;
  padding-right: 2px;
  width: 100%;
  max-width: 200px;
  background: white;

  @media (max-width: 768px) {
    height: 92vh;
    max-width: 150px;
  }

  @media (max-width: 550px) {
    display: ${({ isOpenedSideBar }) => isOpenedSideBar ? 'block' : 'none'};
    position: absolute;
    z-index: 11;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    max-width: 270px;
    padding-top: 50px;
    box-shadow: 20px 1px 63px 13px rgba(0,0,0,0.72);
    -webkit-box-shadow: 20px 1px 63px 13px rgba(0,0,0,0.72);
    -moz-box-shadow: 20px 1px 63px 13px rgba(0,0,0,0.72);
  }
`;

export const SidebarCloseIcon = styled(CloseIcon)<{ isOpenedSideBar: boolean }>`
  display: none;
  
  @media (max-width: 550px) {
    display: ${({ isOpenedSideBar }) => isOpenedSideBar ? 'block' : 'none'};
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 10;
    cursor: pointer;
  }
`;

export const SidebarBurgerIcon = styled(MenuIcon)<{ isOpenedSideBar: boolean }>`
  display: none;
    @media (max-width: 550px) {
      display: ${({ isOpenedSideBar }) => isOpenedSideBar ? 'none' : 'block'};
      position: absolute;
      top: 13%;
      left: 15px;
      z-index: 10;
      cursor: pointer;
    }
`;

export const FeedTitle = styled(Typography)`
  margin-top: 1.5rem;
  color: #fff;
`;

export const FeedItemWrapper = styled(Box)`
  overflow-y: auto;
  height: 90vh;
  flex: 2;
  background: white;
  
  @media (max-width: 760px) {
    flex: 1;
  }
`;

export const FeedCategoryTitle = styled(Typography)`
  margin-bottom: 30px !important;
  color: white;
  
  > span {
    color: #FC1503;
  }
`;

export const FeedVideosWrapper = styled.div`
    @media (max-width: 550px) {
      > div {
        display: block !important;
      }
    }
`