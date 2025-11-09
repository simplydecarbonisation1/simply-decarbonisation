import React, { useEffect, useState } from "react";
import axios from "axios";

export default function YoutubeFeed() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; // set this in .env
  const CHANNEL_ID = "UCt83xcUJk6cM8bDifkuo6cQ";
  const MAX_RESULTS = 4;

  useEffect(() => {
    if (!API_KEY) {
      setError("YouTube API key not found. Set VITE_YOUTUBE_API_KEY in .env");
      return;
    }
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              key: API_KEY,
              channelId: CHANNEL_ID,
              part: "snippet,id",
              order: "date",
              maxResults: MAX_RESULTS,
            },
          }
        );
        setVideos(res.data.items || []);
      } catch (err) {
        console.error("Error fetching YouTube videos:", err);
        setError("Failed to load videos.");
      }
    };
    fetchVideos();
  }, []);

  if (error) {
    return <div className="text-sm text-red-600">{error}</div>;
  }

  if (!videos.length) {
    return <div className="text-sm text-slate-600">No videos found.</div>;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {videos.map((video) => {
        const vidId = video.id?.videoId || (video.id?.kind === "youtube#video" && video.id?.videoId) || null;
        if (!vidId) return null;
        return (
          <div key={vidId} className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${vidId}`}
              title={video.snippet?.title || "YouTube video"}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="p-2 text-sm font-medium">{video.snippet?.title}</div>
          </div>
        );
      })}
    </div>
  );
}