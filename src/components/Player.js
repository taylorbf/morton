import * as Tone from 'tone';
import React, { useEffect } from 'react';
import composition from '../scores/dev.js'


const filter = new Tone.Filter(1300, "lowpass").toDestination();

const sampler = new Tone.Sampler({
  urls: {
    C1: "C1v1.mp3",
    "D#1": "Ds1v1.mp3",
    "F#1": "Fs1v1.mp3",
    A1: "A1v1.mp3",
    C2: "C2v1.mp3",
    "D#2": "Ds2v1.mp3",
    "F#2": "Fs2v1.mp3",
    A2: "A2v1.mp3",
    C3: "C3v1.mp3",
    "D#3": "Ds3v1.mp3",
    "F#3": "Fs3v1.mp3",
    A3: "A3v1.mp3",
    C4: "C4v1.mp3",
    "D#4": "Ds4v1.mp3",
    "F#4": "Fs4v1.mp3",
    A4: "A4v1.mp3",
    C5: "C5v1.mp3",
    "D#5": "Ds5v1.mp3",
    "F#5": "Fs5v1.mp3",
    A5: "A5v1.mp3",
    C6: "C6v1.mp3",
    "D#6": "Ds6v1.mp3",
    "F#6": "Fs6v1.mp3",
    A6: "A6v1.mp3",
    C7: "C7v1.mp3",
    "D#7": "Ds7v1.mp3",
    "F#7": "Fs7v1.mp3",
    A7: "A7v1.mp3",
  },
  release: 1,
  baseUrl: process.env.PUBLIC_URL + '/audio/'
}).connect(filter)

const initAudio = async () => {
  await Tone.start()
  console.log('audio is ready')
  Tone.Transport.bpm.value = 60;
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
