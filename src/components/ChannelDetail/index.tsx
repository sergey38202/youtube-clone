import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import {IVideoDto} from "../../pages/Feed/types";
import ChannelCard from "../ChannelCard";
import Videos from "../Videos";

import * as SC from "./styles";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState<IVideoDto | null>(null);
  const [videos, setVideos] = useState<IVideoDto[] | null>(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <SC.ChannelDetailLine />
        <ChannelCard
            channelDetail={channelDetail}
            marginTop="-93px"
        />
      </Box>
      <SC.ChannelDetailVideosBlock
          p={2}
          display="flex"
      >
      <SC.ChannelDetailVideosBlock />
        <Videos videos={videos} />
      </SC.ChannelDetailVideosBlock>
    </Box>
  );
};

export default ChannelDetail;
