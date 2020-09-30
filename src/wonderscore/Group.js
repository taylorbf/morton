import { Note } from '.';

class Group {
  constructor(initial) {
    this.events = initial || [
      new Note(440, 2000, 0.5),
      new Note(660, 2000, 0.3),
      new Note(880, 1000, 0.6),
    ]
    this.root = 60;
  }

  reverse() {
    return new Group([ ...this.events ].reverse())
  }

  scramble() {
    return new Group(this.events.sort(() => Math.random() - 0.5))
  }

  toRoot() {

  }

  copy() {
    // must also make copy of each note...
    return new Group([ ...this.events ])
  }

}

export {Group};
