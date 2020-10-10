import { Note, Group, compose, compile } from '../wonderscore';

/* define a motive */
let a = new Group([
  new Note(440, 1000, 0.3),
  new Note(220, 0, 0.5),
  new Note(445, 1000, 0.7),
  new Note(495, 2000, 0.5),
  new Note(435, 0, 0.3),
  new Note(330, 1000, 0.5),
])
a = a.times(1/2)
// a = a.compress(1/4)
// a = a.repeat(2)
console.log(a);

let intervals = [9/8, 3/2, 4/3, 7/4, 2/1, 3/1]
let rates = [1, 1.3, 1.6, 5, 1/2]
let reps = [1, 2, 3]

const pick = arr => arr[Math.floor(Math.random()*arr.length)]

const loop = (amt, func) => {
  let events = []
  for (let i=0;i<amt;i++) {
    events = events.concat(func(i))
  }
  return events
}

const composition = new Group(
  loop(100, () => {
    const start = Math.random()
    const end = Math.random() * (1 - start) + start
    return a.scramble().slice(start, end).times(pick(intervals)).compress(pick(rates)).repeat(pick(reps))
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
