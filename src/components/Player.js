import * as Tone from 'tone';
import React, { useEffect } from 'react';
import composition from '../scores/01.js'


const filter = new Tone.Filter(1500, "lowpass").toDestination();

const sampler = new Tone.Sampler({
  urls: {
    A0: "A0.mp3",
    C1: "C1.mp3",
    "D#1": "Ds1.mp3",
    "F#1": "Fs1.mp3",
    A1: "A1.mp3",
    C2: "C2.mp3",
    "D#2": "Ds2.mp3",
    "F#2": "Fs2.mp3",
    A2: "A2.mp3",
    C3: "C3.mp3",
    "D#3": "Ds3.mp3",
    "F#3": "Fs3.mp3",
    A3: "A3.mp3",
    C4: "C4.mp3",
    "D#4": "Ds4.mp3",
    "F#4": "Fs4.mp3",
    A4: "A4.mp3",
    C5: "C5.mp3",
    "D#5": "Ds5.mp3",
    "F#5": "Fs5.mp3",
    A5: "A5.mp3",
    C6: "C6.mp3",
    "D#6": "Ds6.mp3",
    "F#6": "Fs6.mp3",
    A6: "A6.mp3",
    C7: "C7.mp3",
    "D#7": "Ds7.mp3",
    "F#7": "Fs7.mp3",
    A7: "A7.mp3",
    C8: "C8.mp3"
  },
  release: 1,
  baseUrl: "https://tonejs.github.io/audio/salamander/"
}).connect(filter)

const initAudio = async () => {
  await Tone.start()
  console.log('audio is ready')
  Tone.Transport.bpm.value = 108;
  Tone.Transport.loop = false;

  const notes = composition.map(note => [note.time/1000, note])

  new Tone.Part(((time, note) => {
    sampler.triggerAttackRelease(note.frequency, 4000, time, note.velocity);
  }), notes).start(0);

}

const start = () => Tone.Transport.start();
const stop = () => Tone.Transport.stop();

const Player = () => {

  return (
    <>
      <button onClick={initAudio}>init</button>
      <button onClick={start}>play</button>
      <button onClick={stop}>stop</button>
    </>
  )
}

export default Player;



// setInterval(() => {
//   // scale it between 0-1
//   const progress = (Tone.Transport.progress + 1) / 2;
//   document.querySelector("#progress").style = `left: ${progress*100}%`;
// }, 16);
