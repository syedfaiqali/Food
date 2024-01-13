import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants'
import './Intro.css';

const Intro = () => {
  const [video, setVideo] = useState(false);
  const vidref = useRef();
  const handleVideo = () => {
    setVideo((prevVideo) => !prevVideo);
    if (video) {
      vidref.current.pause();
    } else {
      vidref.current.play();
    }
  }
  return (
    <div className="app__video">
      <video src={meal} type="video/mp4" loop controls={false} muted ref={vidref} />
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
          {video ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : <BsFillPlayFill color="#fff" fontSize={30} />
          }
        </div>
      </div>
    </div>
  )
};

export default Intro;