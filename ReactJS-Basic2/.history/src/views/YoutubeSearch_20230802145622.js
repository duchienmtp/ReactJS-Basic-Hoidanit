import axios from "axios";
import { useState, useEffect } from "react";
const YouTubeSearch = () => {
  const [videos, setVideos] = useState([]);
const [query, setQuery] = useSt

  useEffect(() => {}, [])

  return (
    <div className="youtube-search-container">
      <div className="yt-search">
        <input type="text" placeholder="Search" />
        <button type="button">search</button>
      </div>
    </div>
  );
};

export default YouTubeSearch;
