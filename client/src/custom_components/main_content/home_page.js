import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './resources/videos/network.mp4'
import Card from '@material-ui/core/Card';

function HomePage() {

  useEffect(() => {
  }, []);

  return (
    <div className="login_page">
      <div className="container">
        <video className="background_video" src={Video} muted loop autoPlay playsInline/>
        <Card></Card>
      </div>
    </div>
  );
}

export default HomePage;