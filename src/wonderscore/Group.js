import { Note } from '.';
import _ from 'lodash';

class Group {
  constructor(initial) {
    this.events = initial || [
      new Note(440, 200, 0.5),
      new Note(660, 200, 0.3),
      new Note(880, 100, 0.6),
    ]
    this.root = 60;
  }

  reverse() {
    return new Group(this.clonedEvents().reverse())
  }

  scramble() {
    return new Group(this.clonedEvents().sort(() => Math.random() - 0.5))
  }

  toRoot() {

  }

  copy() {
    // must also make copy of each note...
    return new Group(this.clonedEvents())
  }

  clonedEvents() {
    return _.cloneDeep(this.events)
  }

}

export {Group};
