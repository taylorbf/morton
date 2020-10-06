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

  slice(start=0,end=1) {
    const startIndex = Math.floor(start * this.events.length)
    const endIndex = Math.ceil(end * this.events.length)
    return new Group(this.clonedEvents().slice(startIndex,endIndex));
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

  times(ratio) {
    return new Group(this.clonedEvents().map(note => note.times(ratio))) 
  }

  timesBy() {

  }

  compress(ratio) {
    return new Group(this.clonedEvents().map(note => note.compress(ratio)))
  }

  repeat(reps) {
    let events = []
    for (let i=0;i<reps;i++) {
      events = events.concat(this.clonedEvents())
    }
    // const test = new Group(Array(reps).reduce((accum, curr) => {
    //   console.log(accum)
    //   return [
    //     ...accum,
    //     this.clonedEvents()
    //   ]
    // }, []))
    // console.log(test)
    return new Group(events)
  }

  flatten() {
    return this.clonedEvents().reduce((a,c) => {
      return [
        ...a,
        ...c.flatten()
      ]
    }, [])
  }

}

export {Group};
