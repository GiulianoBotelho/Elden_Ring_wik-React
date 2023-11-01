import { useEffect, useRef } from "react";
import audioFile from "../assets/cutscene/main-sound.mp3";

export default function Music() {
  const audio = useRef();
  useEffect(() => {
    audio.current.volume = 0.5;

    audio.current.play();
  }, []);
  return (
    <>
      <div>
        <audio ref={audio} src={audioFile} loop />
      </div>
    </>
  );
}
