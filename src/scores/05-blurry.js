import { Note, Group, compose, compile } from '../wonderscore';

/* define a motive */
let a = new Group([
  new Note(440, 1000, 0.3),
  new Note(220, 0, 0.5),
  new Note(445, 1000, 0.7),
  new Note(495, 2000, 0.5),
  new Note(435, 0, 0.3),
  new Note(330, 1000, 0.5),
  new Note(220, 1000, 0.4),
  new Note(550, 400, 0.2),
])
a = a.times(1/2)
// a = a.compress(1/4)
// a = a.repeat(2)
console.log(a);

let intervals = [9/8, 3/2, 4/3, 7/4, 2/1, 3/1]
let rates = [1/3, 1.3, 4, 1/3, 2, 1.6, 1.1, 1, 1/3, 1.3, 1/3, 1.6, 1.1, 1 ]
let reps = [1, 2, 3]

const rm = 2.567//7.4321//0.73 // random multiplier
const rx = index => (index % rm) / rm;

const pick = arr => arr[Math.floor(Math.random()*arr.length)]

const picki = (arr, index) => arr[Math.floor(rx(index)*arr.length)]

const loop = (amt, func) => {
  let events = []
  for (let i=0;i<amt;i++) {
    events = events.concat(func(i))
  }
  return events
}


const composition = new Group(
  loop(20, index => {
    const start = rx(index)
    const end = rx(index) * (1 - start) + start
    return a
      .reverse()
      .slice(start, end)
      .times(picki(intervals, index))
      .compress(picki(rates, index))
      .repeat(picki(reps, index))
      .modulate('frequency',phase => phase + 1)
      .modulate('duration',phase => phase * 2)
      .modulate('velocity',phase => 1-phase/2 )
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
