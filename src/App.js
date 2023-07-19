import React, { useState } from "react";
import "./styles.css";

const audioContext = new AudioContext();

/**
 * Helper function to emit a sound in the browser using the Web Audio API.
 */
export function playSound(
  duration = 1,
  frequency = 350,
  volume = 50,
  oscNodeType = "sine"
) {
  return new Promise((resolve, reject) => {
    try {
      const oscNode = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscNode.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscNode.frequency.value = frequency;

      gainNode.gain.setValueAtTime(
        gainNode.gain.value,
        audioContext.currentTime
      );
      gainNode.gain.exponentialRampToValueAtTime(
        0.00001,
        audioContext.currentTime + duration
      );

      oscNode.type = oscNodeType;
      gainNode.gain.value = volume * 0.01;

      oscNode.onended = () => {
        gainNode.disconnect(audioContext.destination);
        oscNode.disconnect(gainNode);
        resolve();
      };

      oscNode.start(audioContext.currentTime);
      oscNode.stop(audioContext.currentTime + duration);
    } catch (error) {
      reject(error);
    }
  });
}

export default function App() {
  const [duration, setDuration] = useState(1);
  const [frequency, setFrequency] = useState(350);
  const [volume, setVolume] = useState(50);
  const [type, setType] = useState("sine");
  return (
    <div className="App">
      <h1>Simple sound generator</h1>
      <form>
        <div>
          <label for="duration">duration: </label>
          <input
            name="duration"
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </div>
        <div>
          <label for="frequency">frequency: </label>
          <input
            name="frequency"
            type="number"
            value={frequency}
            onChange={(e) => setFrequency(Number(e.target.value))}
          />
        </div>
        <div>
          <label for="volume">volume: </label>
          <input
            name="volume"
            type="number"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>
        <div>
          <label for="type">type: </label>
          <select
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option label="sine" value="sine" />
            <option label="sawtooth" value="sawtooth" />
            <option label="square" value="square" />
            <option label="triangle" value="triangle" />
          </select>
        </div>
      </form>
      <button
        type="button"
        onClick={() => playSound(duration, frequency, volume, type)}
      >
        Play sound
      </button>
    </div>
  );
}
