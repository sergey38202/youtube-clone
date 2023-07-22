import styled from "styled-components";
import {Box, Stack, Typography} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const VideoDetailWrapper = styled(Stack)`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const VideoDetailMain = styled(Box)`
  width: 100%;
  position: sticky;
  top: 86px;
`;

export const VideoDetailStackWrapper = styled(Stack)`
    color: white;
`;

export const VideoDetailChannelTitle = styled(Typography)`
  color: #fff;
`;

export const VideoDetailChannelIcon = styled(CheckCircleIcon)`
  font-size: 12px;
  color: gray;
  margin-left: 5px;
`;

export const VideoDetailInfo = styled(Typography)`
    opacity: 0.7;
`;

export const VideosBlock = styled(Box)`
    display: flex;
  
  > div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    
    > div {
      >div {
        width: 100%;
        max-width: 270px;
      }
    }

    @media (max-width: 1219px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1148px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 864px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 400px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`