import React from "react";
import Sketch from "react-p5";

const score = [
    { frequency: 750, duration: 100, volume: 0.5, onset: 100 },
    { frequency: 250, duration: 100, volume: 0.5, onset: 300 },
    { frequency: 1050, duration: 100, volume: 0.5, onset: 500 },
]

export default (props) => {
    let x = 50;
    const y = 50;

    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(400, 600).parent(canvasParentRef);
    };

    const draw = (p5) => {
        p5.background(0);
        score.forEach(note => {
            p5.ellipse(note.onset/10, note.frequency/10, 5, 5);
        })
    };

    return <Sketch setup={setup} draw={draw} />;
};
