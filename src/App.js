// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import MainFeatured from './components/MainFeatured';
import TrendingSection from './components/TrendingSection';
import data from './data.json';
import './App.css';
import backgroundImage from './assets/FeaturedCoverImage.png';

const App = () => {
  const [featuredVideo, setFeaturedVideo] = useState({});
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(backgroundImage);
  useEffect(() => {
    setFeaturedVideo(data.Featured);
    setTrendingVideos(data.TendingNow);
  }, []);

  const handleVideoClick = async (video) => {
    setFeaturedVideo(video);
    const image = await import(`./assets/${video.CoverImage}`);
    setCurrentBackgroundImage(image.default);
  };
  

  return (
    <Router>
      <div className="app" style={{ backgroundImage: `url(${currentBackgroundImage})` }}>
        <MainMenu />
        <MainFeatured featuredVideo={featuredVideo} />
        <TrendingSection trendingVideos={trendingVideos} onVideoClick={handleVideoClick} />
      </div>
    </Router>
  );
};

export default App;
