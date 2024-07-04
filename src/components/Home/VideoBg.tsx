'use client';
import { useEffect } from 'react';
import type Player from '@vimeo/player';
import styles from './VideoBg.module.css';

// Extend the Window interface to include the Vimeo property
declare global {
  interface Window {
    Vimeo: typeof Player;
  }
}

const VideoBg = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);

    const handleScriptLoad = () => {
      if (window.Vimeo) {
        const iframe = document.querySelector<HTMLIFrameElement>('iframe');
        if (iframe) {
          const player = new window.Vimeo(iframe);
          player.setVolume(0); // Mute the video
          player.play(); // Play the video
        }
      }
    };

    script.onload = handleScriptLoad;

    // Cleanup function to remove the script from the DOM
    return () => {
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
