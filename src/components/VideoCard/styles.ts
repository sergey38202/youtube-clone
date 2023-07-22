import styled from "styled-components";
import {Card, CardContent, CardMedia} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const VideoCardContainer = styled(Card)`
  width: 100%;
  @media (min-width: 576px) {
    width: 358px;
  }
  @media (min-width: 768px) {
    width: 286px;
  }
  box-shadow: none;
  border-radius: 0;
`;

export const VideoCardMedia = styled(CardMedia)`
  width: 100%;
  height: 180px;

  @media (min-width: 576px) {
    width: 358px;
  }
` ;

export const VideoCardWrapper = styled(CardContent)`
  background-color: #1E1E1E;
  height: 106px;
`;

export const VideoCardCheckCircleIcon = styled(CheckCircleIcon)`
  font-size: 12px;
  color: gray;
  margin-left: 5px;
`;