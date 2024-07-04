'use client';
import { useEffect } from 'react';
import Player from '@vimeo/player';
import styles from './VideoBg.module.css';

const VideoBg = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;

    const handleScriptLoad = () => {
      const iframe = document.querySelector<HTMLIFrameElement>('iframe');
      if (iframe) {
        const player = new Player(iframe);
        player.setVolume(0); // Mute the video
        player.play(); // Play the video
      }
    };

    script.addEventListener('load', handleScriptLoad);

    document.body.appendChild(script);

    // Cleanup function to remove the script and event listener
    return () => {
      script.removeEventListener('load', handleScriptLoad);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.videoBackground}>
      <iframe
        src="https://player.vimeo.com/video/976446682?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        className={styles.iframe}
        title="herovideo"
      />
    </div>
  );
};

export default VideoBg;
