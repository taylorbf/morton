import { Group, compose } from '../wonderscore';

console.log(Group);

const a = new Group()
console.log(a);

a.events[0].frequency = 550;

const work = compose([
  a,
  a.reverse(),
])
console.log(work)

export default work;
