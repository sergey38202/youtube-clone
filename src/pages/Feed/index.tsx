import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import Sidebar from "../../components/Sidebar";
import Videos from "../../components/Videos";

import {IVideoDto} from "./types";
import * as SC from "./styles";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState<IVideoDto[] | null>(null);
  const [isOpenedSideBar, setIsOpenedSideBar] = useState(false);

  const handleToggleSidebar = () => setIsOpenedSideBar((prevState) => !prevState);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data?.items))
    }, [selectedCategory]);

  return (
    <SC.FeedContainer>
      <SC.FeedInfoBlock isOpenedSideBar={isOpenedSideBar}>
        <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
        />
          <SC.SidebarCloseIcon
              isOpenedSideBar={isOpenedSideBar}
              onClick={handleToggleSidebar}
          />
      </SC.FeedInfoBlock>
      <SC.FeedItemWrapper p={2}>
          <SC.SidebarBurgerIcon
              isOpenedSideBar={isOpenedSideBar}
              onClick={handleToggleSidebar}
          />
        <SC.FeedCategoryTitle
            variant="h4"
            fontWeight="bold"
        >
          {selectedCategory} <span>videos</span>
        </SC.FeedCategoryTitle>

        <SC.FeedVideosWrapper>
            <Videos videos={videos} />
        </SC.FeedVideosWrapper>
      </SC.FeedItemWrapper>
    </SC.FeedContainer>
  );
};

export default Feed;
