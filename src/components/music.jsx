import { useEffect, useRef } from "react";

export default function Music() {
  const audio = useRef();
  useEffect(() => {
    audio.current.volume = 0.5;

    audio.current.play();
  }, []);
  return (
    <>
      <div>
        <audio
          ref={audio}
          src=""
          loop
        />
      </div>
    </>
  );
}
