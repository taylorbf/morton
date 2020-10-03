const compose = (groups) => {
  let moment = 0;
  const notes = [];

  groups.forEach(group => {
    // group.events.forEach(note => {
    group.events.forEach(note => {
      notes.push({ ...note, time: moment})
      moment += note.duration;
    })
  })

  return notes
}

export {compose};
