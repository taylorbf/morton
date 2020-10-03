import { Note, Group, compose, compile } from '../wonderscore';

/* define a motive */
let a = new Group([
  new Note(440, 800, 0.5),
  new Note(660, 800, 0.3),
  new Note(550, 400, 0.6),
  new Note(440, 400, 0.6),
  new Note(550, 500, 0.6),
  new Note(660, 300, 0.6),
])
a = a.times(1/2)
a = a.compress(1/6)
a = a.repeat(4)
console.log(a);

const composition = new Group([
  a,
  a.times(9/8),
  a.times(8/9),
])

const notes = compile(composition)
console.log(notes)







const work = compose([
  a,
  a.times(9/8),
  a.times(8/9),
])

export default work;
