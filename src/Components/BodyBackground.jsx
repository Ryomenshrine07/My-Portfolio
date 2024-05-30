import React from 'react'

function BodyBackground() {
  return (
    <div className="video-background">
        <video autoPlay muted loop id="background-video">
            <source src={require('E:/Web Developement/my_portfolio/src/Images/BackGroundVideo.mp4')} type='video/mp4' />
        </video>
    </div>
  )
}

export default BodyBackground