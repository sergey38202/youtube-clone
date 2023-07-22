import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./pages/SearchFeed";

import * as SC from "./styles";

const App = () => (
  <BrowserRouter>
    <SC.AppContainer>
      <Navbar />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </SC.AppContainer>
  </BrowserRouter>
);

export default App;
