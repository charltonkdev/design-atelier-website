'use client'
import { useEffect } from 'react';
import styles from './VideoBg.module.css';

const VideoBg = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const iframe = document.querySelector('iframe');
      const player = new Vimeo.Player(iframe);

      player.setVolume(0); // Mute the video
      player.play(); // Play the video
    };
  }, []);

  return (
    <div className={styles.videoBackground}>
      <iframe
        src="https://player.vimeo.com/video/976446682?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        className={styles.iframe}
        title="herovideo"
      ></iframe>
    </div>
  );
};

export default VideoBg;
