import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";

export const LazyLoadVideoPlayer = ({ src }) => {
  const [videoLink, setVideoLink] = useState("");
  const { ref, inView } = useInView({ threshold: 1 });
  useEffect(() => {
    if (inView === true) {
      setVideoLink(src);
    }
  }, [inView, videoLink]);
  return (
    <div ref={ref}>
      {videoLink ? (
        <ReactPlayer
          width={"100%"}
          height="auto"
          url={videoLink}
          muted
          playing
          loop
          className="react-player"
          style={{ aspectRatio: "2.4/1" }}
        />
      ) : (
        <p>Loading Video</p>
      )}
    </div>
  );
};
