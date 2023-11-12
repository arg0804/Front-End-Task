import React, { useState, useEffect } from 'react';
import './trendingSection.css';

const TrendingSection = ({ trendingVideos, onVideoClick }) => {
  const [visibleVideos, setVisibleVideos] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const images = await Promise.all(
        trendingVideos.map((video) =>
          import(`../assets/${video.CoverImage}`).then((module) => module.default)
        )
      );
      setVisibleVideos(images);
    };

    loadImages();
  }, [trendingVideos]);

  const handleClick = (video) => {
    onVideoClick(video);
  };

  return (
    <div className="trending-section">
      {visibleVideos.map((video, index) => (
        <div key={video.Id} className="trending-video" onClick={() => handleClick(trendingVideos[index])}>
          <img src={video} alt={trendingVideos[index].Title} />
        </div>
      ))}
    </div>
  );
};

export default TrendingSection;
