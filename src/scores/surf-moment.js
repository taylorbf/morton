import { Note, Group, compose, compile } from '../wonderscore';

/* define a motive */
let a = new Group([
  new Note(440, 400, 0.5),
  new Note(660, 400, 0.3),
  new Note(495, 400, 0.6),
])
a = a.times(1/2)
a = a.compress(1/6)
a = a.repeat(2)
console.log(a);

let intervals = [9/8, 3/2, 4/3, 7/4]

const pick = arr => arr[Math.floor(Math.random()*arr.length)]

const composition = new Group([
  a,
  a.times(pick(intervals)),
  a.times(pick(intervals)),
])

const notes = compile(composition)
console.log(notes)







const work = compose([
  a,
  a.times(9/8),
  a.times(10/9),
])

export default work;
