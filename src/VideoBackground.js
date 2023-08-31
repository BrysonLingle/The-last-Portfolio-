import React from 'react';
import './VideoBackground.css'; // Import your CSS file

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="path-to-your-video.mp4" type="video/mp4" />
        <source src="path-to-your-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {/* Add your content here */}
    </div>
  );
};

export default VideoBackground;
