import { Note, Group, compile, loop, pick } from '../wonderscore';
import seedrandom from 'seedrandom';
seedrandom('wonderscore', { global: true });


/* define a motive */
let a = new Group([
  new Note(440, 1000, 0.3),
  new Note(660, 1000, 0.5),
  new Note(330, 1000, 0.5),
  new Note(220, 1000, 0.4),
])

let intervals = [9/8, 3/2, 4/3, 2/1, 3/1]  // 7/4,
// let rates = [1/3, 1.3, 4, 1/3, 2, 1.6, 1.1, 1, 1/3, 1.3, 1/3, 1.6, 1.1, 1 ]
let rates = [1/2, 2/3, 2.5, 1.1, 0.8, 1.8]
let reps = [1, 2, 3]

const composition = new Group(
  loop(15, index => {
    const start = Math.random()
    const end = Math.random() * (1 - start) + start
    return a
      .slice(start, end)
      .times(pick(intervals, index))
      .compress(pick(rates, index))
      .repeat(pick(reps, index))
      .modulate('frequency',phase => (Math.floor(phase*6)+1) * 0.25)
      // .modulate('frequency',phase => Math.sin(phase * Math.PI) / 100 + 0.995)
      .modulate('duration',phase => phase * 3)
      .modulate('velocity',phase => 1-phase/4 )
  })
)

const notes = compile(composition)

export default notes;
