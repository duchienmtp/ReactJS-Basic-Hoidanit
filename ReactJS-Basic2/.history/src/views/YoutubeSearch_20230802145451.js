import axios from "axios";
const YouTubeSearch = () => {
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
