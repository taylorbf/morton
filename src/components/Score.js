import React, { useState, useEffect } from "react";
import { VictoryChart, VictoryScatter, VictoryZoomContainer, VictoryAxis, VictoryHistogram, VictoryLine } from 'victory';
import * as Tone from 'tone';
import composition from '../scores/dev.js'

const score = [
    { frequency: 750, duration: 100, volume: 0.5, onset: 100 },
    { frequency: 250, duration: 100, volume: 0.5, onset: 300 },
    { frequency: 1050, duration: 100, volume: 0.5, onset: 500 },
]

const LineChart = () => {

    const [ cursor, setCursor ] = useState(0);

    // useEffect(() => {
    //     const pulse = setInterval(() => {
    //         // console.log(Tone.Transport.ticks*5.2)
    //         setCursor(Tone.Transport.ticks*5.2)
    //     }, 30)
    //     return () => clearInterval(pulse);
    // })

    const data = composition.map(note => ({ x: note.time, y: note.frequency }))

    return (
        <div>
            <VictoryChart
                height={window.innerHeight*0.3-40}
                width={window.innerWidth}
                padding={{ top: 0, bottom: 32, left: 48 }}
                domain={{ y: [0, 1500] }}
                scale={{ y: "sqrt", x: "time" }}
                containerComponent={
                    <VictoryZoomContainer
                        responsive={false}
                        zoomDimension='x'
                    />
                }
                // x: [-1000, 3*60*1000],
            >
                <VictoryScatter
                    data={data}
                    width={1}
                    style={{
                        data: {
                            // stroke: Palette.Pink500,
                            strokeWidth: 2
                        },
                        labels: {
                            fontSize: 15,   
                        }
                    }}
                />
                <VictoryLine
                    data={[
                        { x: cursor, y: 0 },
                        { x: cursor, y: 10 },
                      ]}
                />
                <VictoryAxis />
                <VictoryAxis dependentAxis />
            </VictoryChart> 
        </div>
    );
};

export default LineChart;

