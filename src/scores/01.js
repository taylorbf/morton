import { Note, Group, compose } from '../wonderscore';

/* define a motive */
const a = new Group([
  new Note(440, 300, 0.5),
  new Note(460, 400, 0.3),
  new Note(660, 400, 0.6),
  new Note(480, 200, 0.6),
  new Note(550, 100, 0.6),
  new Note(660, 400, 0.6),
])
a.events[0].frequency = 550;
console.log(a);

const work = compose([
  a,
  a,
  a.reverse(),
  a.reverse(),
  a.scramble(),
  a.scramble(),
])

export default work;
