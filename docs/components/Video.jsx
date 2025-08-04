import React, { useRef, useEffect } from "react";
import ReactPlayer from "react-player";
export default function Video({ src, caption, playing = true, muted = true }) {
  const playerRef = useRef(null);

  console.log({ playing, muted })

  const updateAspectRatio = () => {
    if (playerRef.current) {
      const playerWidth = playerRef.current.offsetWidth;
      const aspectRatioHeight = (playerWidth * 9) / 16;
      playerRef.current.style.height = `${aspectRatioHeight}px`;
    }
  };

  useEffect(() => {
    updateAspectRatio(); // Initial calculation
    window.addEventListener("resize", updateAspectRatio);
    return () => {
      window.removeEventListener("resize", updateAspectRatio);
    }; 
  }, []);

  return (
    <div>
      <div
        ref={playerRef}
        style={{
          width: "100%",
          border: "2px solid #C0C0FF",
          borderRadius: "1rem 0 1rem 1rem",
          overflow: "hidden",
          margin: "20px 0 20px 0",
        }}
      >
        <video
          style={{ width: "100%", height: "100%" }}
          muted={muted}
          autoPlay={playing}
          controls
          loop
          src={src}
        />
      </div>
      <span style={{ color: "var(--ifm-font-color-secondary)" }}>
        {caption}
      </span>
    </div>
  );
}
