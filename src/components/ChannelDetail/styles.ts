import styled from "styled-components";
import {Box} from "@mui/material";

export const ChannelDetailLine = styled.div`
    height: 300px;
  background: linear-gradient(90deg, rgba(0,238,247,1) 0%,
              rgba(206,3,184,1) 100%,
              rgba(0,212,255,1) 100%);
  z-index: 10;
`;

export const ChannelDetailVideosBlock = styled(Box)`
  margin-right: 100px;

  @media (max-width: 600px) {
    margin-right: 0;
  }
`;