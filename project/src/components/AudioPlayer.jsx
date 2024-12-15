import React, { useState, useRef, useEffect } from "react";
import audio from "../assets/audio.mp3";

const AudioPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // Play or Pause the audio
    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Update current time as the audio plays
    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    // Update duration when audio is loaded
    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    // Update audio position when slider changes
    const handleSeek = (event) => {
        const newTime = (event.target.value / 100) * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    // Reset the button to 'Play' when audio ends
    const handleAudioEnd = () => {
        setIsPlaying(false); // Reset the play/pause state
    };

    useEffect(() => {
        const audio = audioRef.current;
        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("loadedmetadata", handleLoadedMetadata);
        audio.addEventListener("ended", handleAudioEnd); // Event listener for audio end

        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
            audio.removeEventListener("ended", handleAudioEnd);
        };
    }, [duration]);

    return (
        <section className="p-2">
            <audio
                ref={audioRef}
                src={audio}
                preload="metadata"
            ></audio>

            <div className="flex justify-around items-center">
                <div>
                    {Math.floor(currentTime / 60)}:
                    {Math.floor(currentTime % 60).toString().padStart(2, '0')}
                </div>

                <button
                    onClick={togglePlayPause}
                    className="border-2 border-white rounded-full px-12"
                >
                    {isPlaying ? "Pause" : "Play"}
                </button>

                <div>
                    {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
                </div>
            </div>

            <input
                type="range"
                value={(currentTime / duration) * 100 || 0}
                onChange={handleSeek}
                className="w-full h-2 rounded-lg focus:outline-none"
            />
        </section>
    );
};

export default AudioPlayer;
