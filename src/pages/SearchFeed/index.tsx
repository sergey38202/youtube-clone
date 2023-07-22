import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import {IVideoDto} from "../Feed/types";
import Videos from "../../components/Videos";

import * as SC from "./styles";

const SearchFeed = () => {
  const [videos, setVideos] = useState<IVideoDto[] | null>(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box
        p={2}
        minHeight="95vh"
    >
      <Typography
          variant="h4"
          fontWeight={900}
          color="white"
          mb={3}
          ml={{ sm: "100px"}}
      >
        Search Results for <SC.SearchFeedTerms>{searchTerm}</SC.SearchFeedTerms> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
