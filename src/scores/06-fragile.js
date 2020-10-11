import { Note, Group, compose, compile, loop } from '../wonderscore';

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

const rm = 1.167//7.4321//0.73 // random multiplier
const rx = index => (index % rm) / rm;

const pick = arr => arr[Math.floor(Math.random()*arr.length)]

const picki = (arr, index) => arr[Math.floor(rx(index)*arr.length)]

const composition = new Group(
  loop(50, index => {
    const start = rx(index)
    const end = rx(index) * (1 - start) + start
    return a
      .slice(start, end)
      .times(picki(intervals, index))
      .compress(picki(rates, index))
      .repeat(picki(reps, index))
      .modulate('frequency',phase => (Math.floor(phase*6)+1) * 0.25)
      .modulate('frequency',phase => Math.sin(phase * Math.PI) / 100 + 0.995)
      .modulate('duration',phase => phase * 3)
      .modulate('velocity',phase => 1-phase/4 )
  })
)

const notes = compile(composition)

export default notes;






// const work = compose([
//   a,
//   a.times(9/8),
//   a.times(10/9),
// ])

// export default work;



// new Note(440, 400, 0.5),
// new Note(660, 400, 0.3),
// new Note(495, 400, 0.6),
// new Note(330, 400, 0.4),
// new Note(440, 400, 0.5),
// new Note(495, 400, 0.6),
// new Note(660, 400, 0.5),
// new Note(770, 400, 0.4),
