import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";

const YouTubeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearchYoutube = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/search",
        params: {
          part: "snippet",
          maxResults: "20",
          key: "AIzaSyAe2PDAJ9EjbFtXfFPMsml1CQpN49MGFaw",
          type: "video",
          q: query,
        },
      });

      if (response.data.items && response.data.items.length > 0) {
        const result = response.data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.medium.url,
          publishedAt: moment(item.snippet.publishedAt).format("DD/MM/YYYY"),
        })
        result.push()
        );

        setVideos(result);
      } else {
        setVideos([]);
      }
    } catch (error) {
      console.error("Error occurred: ", error);
    }
  };

  return (
    <div className="youtube-search-container">
      <div className="yt-search">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="button" onClick={handleSearchYoutube}>
          search
        </button>
      </div>

      {videos &&
        videos.length > 0 &&
        videos.map((item, index) => {
          return (
            <div className="yt-result" key={item.id}>
              <div className="left">
                <iframe
                  className="iframe-yt"
                  width="760"
                  height="428"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title="#30.2 Design Giao Diện &amp; Hoàn Thiện Chức Năng &#39;Search Youtube&#39; với Google APIs và React Hook"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="right">
                <div className="title">{item.title}</div>
                <div className="created-at">
                  Created At:{" "}
                  {moment(item.createdAt).format("DD-MM-YYYY HH:mm:ss")}
                </div>
                <div className="author">{item.author}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default YouTubeSearch;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "E9CvlWQEstfgwBtkstfJjMQOzik",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 861,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "6GZbREsdXoZuejdHEtBW3j7tS_Y",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "1kSY7cCo7Q0"
//         },
//         "snippet": {
//           "publishedAt": "2023-04-23T10:00:10Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "Tương Lai Của Dev React.JS | Nên Học Gì Để Không Thất Nghiệp Khi React Thay Đổi ?",
//           "description": "Vào tháng 3, 2023, React chính thức có ngôi nhà mới với địa chỉ https://react.dev, nhà cũ reactjs.org đã được đổi thành ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/1kSY7cCo7Q0/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/1kSY7cCo7Q0/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/1kSY7cCo7Q0/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-04-23T10:00:10Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "BI3hUAtqyiOL_H1m_qQnyRJgo8w",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "hoMAVLW-66c"
//         },
//         "snippet": {
//           "publishedAt": "2023-05-13T05:00:11Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "[FULL] Khóa Học  React Level Thực Tập - Thực Hành Bài Test React.JS Cho Beginners | Hỏi Dân IT",
//           "description": "Trong video này, chúng ta cùng nhau đi làm một bài test thực tập dành cho sinh viên muốn đi làm thực tế ngoài công ty, sử dụng ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/hoMAVLW-66c/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/hoMAVLW-66c/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/hoMAVLW-66c/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-05-13T05:00:11Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "2hUocmjsM4f397auC4lp5IFrkzU",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "GdSWU8pK6qI"
//         },
//         "snippet": {
//           "publishedAt": "2023-08-01T11:00:11Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#18. Sử Dụng CSS với Next.JS | Next.JS Cơ Bản Cho Beginners với React và Typescript",
//           "description": "Trong video này, chúng ta sẽ cùng nhau đi tìm hiểu về cách sử dụng CSS với Next.js Bạn nào muốn donate hay mua cho mình ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/GdSWU8pK6qI/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/GdSWU8pK6qI/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/GdSWU8pK6qI/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-08-01T11:00:11Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "HJGy598cq78o4x9XZx-B__xOX6w",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "CMigSUq1AIk"
//         },
//         "snippet": {
//           "publishedAt": "2022-11-19T02:36:01Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "Vite và Create React App (Frontend)",
//           "description": "shorts #hoidanit So sánh nhanh về công cụ Vite và Create React App cho ứng dụng React Bạn nào muốn donate hay mua cho ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/CMigSUq1AIk/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/CMigSUq1AIk/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/CMigSUq1AIk/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-11-19T02:36:01Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "b4OBGqMMZqiuKsF2Sz1cQpXL8N4",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "FQvgGl1Qr8c"
//         },
//         "snippet": {
//           "publishedAt": "2023-04-25T05:00:08Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "React Dev Sẽ Cần Thay Đổi ? 1m2 20 Dev React.Js",
//           "description": "Với trang tài liệu mới react.dev, react đã định hướng là công cụ dùng ở client lẫn server (hybrid apps). Vì vậy, react dev sẽ cần ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/FQvgGl1Qr8c/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/FQvgGl1Qr8c/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/FQvgGl1Qr8c/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-04-25T05:00:08Z"
//         }
//       }
//     ]
//   }
