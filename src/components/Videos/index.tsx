import React from "react";
import { Stack } from "@mui/material";
import {TVideosProps} from "./types";
import Loader from "../Loader";
import VideoCard from "../VideoCard";
import ChannelCard from "../ChannelCard";

import * as SC from "./styles";

const Videos = ({ videos, direction }: TVideosProps) => {
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack
        direction={direction || "row"}
        flexWrap="wrap"
        justifyContent="start"
        alignItems="start"
        gap={2}
    >
      {videos.map((item, idx) => (
        <SC.VideoBox key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </SC.VideoBox>
      ))}
    </Stack>
  );
}

export default Videos;
