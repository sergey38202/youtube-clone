import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import Loader from "../../components/Loader";
import Videos from "../../components/Videos";

import {IVideoDto} from "../Feed/types";
import * as SC from "./styles";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState<IVideoDto | null>(null);
  const [videos, setVideos] = useState<IVideoDto[] | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail?.snippet) return <Loader />;

  const {
    snippet:
        { title, channelId, channelTitle },
    statistics: { viewCount, likeCount }
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <SC.VideoDetailWrapper>
        <Box flex={1}>
          <SC.VideoDetailMain>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
            />
            <Typography
                color="#fff"
                variant="h5"
                fontWeight="bold"
                p={2}
            >
              {title}
            </Typography>
            <SC.VideoDetailStackWrapper
                direction="row"
                justifyContent="space-between"
                py={1}
                px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <SC.VideoDetailChannelTitle>
                  {channelTitle}
                  <SC.VideoDetailChannelIcon />
                </SC.VideoDetailChannelTitle>
              </Link>
              <Stack
                  direction="row"
                  gap="20px"
                  alignItems="center"
              >
                <SC.VideoDetailInfo variant="body1">
                  {parseInt(viewCount).toLocaleString()} views
                </SC.VideoDetailInfo>
                <Typography variant="body1">
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </SC.VideoDetailStackWrapper>
          </SC.VideoDetailMain>
        </Box>
        <SC.VideosBlock
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent="center"
            alignItems="center"
        >
          <Videos
              videos={videos}
              direction="column"
          />
        </SC.VideosBlock>
      </SC.VideoDetailWrapper>
    </Box>
  );
};

export default VideoDetail;
