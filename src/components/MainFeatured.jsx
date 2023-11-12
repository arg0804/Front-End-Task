import React from 'react';
import './mainFeatured.css';

const MainFeatured = ({ featuredVideo, backgroundImage }) => {
  const {
    Category,
    Title,
    ReleaseYear,
    MpaRating,
    Duration,
    Description,
  } = featuredVideo;

  if (!Object.keys(featuredVideo).length) {
    return null;
  }

  return (
    <div className="main-featured">
      <div className="video-info">
      <div className="video-info" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <div className="category">{Category}</div>
        <div className="title">{Title}</div>
        <div className="release-year">{ReleaseYear}</div>
        <div className="mpaa-rating">{MpaRating}</div>
        <div className="duration">{Duration}</div>
        <div className="description">{Description}</div>
      </div>

      <div className="buttons">
        <button className="play-button">Play</button>
        <button className="info-button">More Info</button>
      </div>
    </div>
  );
};

export default MainFeatured;
