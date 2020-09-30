import * as Tone from 'tone';
import React, { useEffect } from 'react';
import composition from '../scores/01.js'


const initAudio = async () => {
  await Tone.start()
  console.log('audio is ready')
  //create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination();



  Tone.Transport.bpm.value = 108;
  Tone.Transport.loop = false;



  const keys = new Tone.PolySynth(Tone.Synth, {
    volume: -8,
    oscillator: {
      partials: [1, 2, 1],
    },
  }).toDestination();

    
    
  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease("C4", "8n");

  const notes = composition.map(note => [note.time/1000, note.frequency])


  console.log(notes)

  const pianoPart = new Tone.Part(((time, chord) => {
    keys.triggerAttackRelease(chord, "8n", time);
  }), 
    notes
  ).start(0);

}

// [1000, 440], [2000, 660] ["0:2:2", cChord], ["0:3", cChord], ["0:3:2", gChord]

// 
// [1, 440],
// [2, 550],
// [2, 660],
// [3, 220],

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
