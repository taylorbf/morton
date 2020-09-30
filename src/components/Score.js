import React from "react";
import { VictoryChart, VictoryScatter } from 'victory';
import composition from '../scores/01.js'

const score = [
    { frequency: 750, duration: 100, volume: 0.5, onset: 100 },
    { frequency: 250, duration: 100, volume: 0.5, onset: 300 },
    { frequency: 1050, duration: 100, volume: 0.5, onset: 500 },
]

const LineChart = () => {

    console.log({composition});

    const data = composition.map(note => ({ x: note.time, y: note.frequency }))

    console.log({data})


    return (
        <div>
            <VictoryChart
                height={window.innerHeight*0.2-40}
                width={window.innerWidth}
                padding={{ top: 0, bottom: 0 }}
                domain={{ y: [0, 1500] }}
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
            </VictoryChart> 
        </div>
    );
};

export default LineChart;

