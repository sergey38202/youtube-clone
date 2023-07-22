import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography } from "@mui/material";
import {IVideoCardProps} from "./types";
import * as SC from "./styles";

const VideoCard = ({ video: { id: { videoId }, snippet } }: IVideoCardProps) => (
  <SC.VideoCardContainer>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <SC.VideoCardMedia image={snippet?.thumbnails?.high?.url} />
    </Link>
    <SC.VideoCardWrapper>
      <Link to={`/video/${videoId}`}>
        <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#FFF"
        >
          {snippet?.title.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={`/channel/${snippet?.channelId}`} >
        <Typography
            variant="subtitle2"
            color="gray"
        >
          {snippet?.channelTitle}
          <SC.VideoCardCheckCircleIcon />
        </Typography>
      </Link>
    </SC.VideoCardWrapper>
  </SC.VideoCardContainer>
);

export default VideoCard