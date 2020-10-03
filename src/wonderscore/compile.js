const compile = (group) => {
  let moment = 0;
  const notes = [];

  group.flatten().forEach(note => {
    notes.push({ ...note, time: moment})
    moment += note.duration;
  })

  return notes
}

export {compile};
