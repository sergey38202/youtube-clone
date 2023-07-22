import styled from "styled-components";
import {Box, CardContent, CardMedia, Typography} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const ChannelCardContainer = styled(Box)<{ marginTop?: string }>`
  box-shadow: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 356px;
  height: 326px;
  margin: auto;
  margin-top: ${({ marginTop }) => marginTop ? marginTop : 'auto'};

  @media (min-width: 768px) {
    width: 320px;
  }
`;

export const ChannelCardWrapper = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #fff;
`;

export const ChannelCardImage = styled(CardMedia)`
  border-radius: 50%;
  height: 180px;
  width: 180px;
  margin-bottom: 2px;
  border: 1px solid #e3e3e3;
`

export const ChannelCardCheckCircleIcon = styled(CheckCircleIcon)`
  font-size: 14px;
  color: gray;
  margin-left: 5px;
`;

export const ChannelCardText = styled(Typography)`
  font-size: 15px;
  font-weight: 500;
  color: gray;
`;