import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import {TChannelCardProps} from "./types";
import * as SC from "./styles";

const ChannelCard = ({ channelDetail, marginTop }: TChannelCardProps) => (
  <SC.ChannelCardContainer marginTop={marginTop}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <SC.ChannelCardWrapper>
        <SC.ChannelCardImage image={channelDetail?.snippet?.thumbnails?.high?.url} />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{' '}
          <SC.ChannelCardCheckCircleIcon />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <SC.ChannelCardText>
            {parseInt(channelDetail?.statistics?.subscriberCount)
                .toLocaleString('en-US')} Subscribers
          </SC.ChannelCardText>
        )}
      </SC.ChannelCardWrapper>
    </Link>
  </SC.ChannelCardContainer>
);

export default ChannelCard;
