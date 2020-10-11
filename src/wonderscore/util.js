export const loop = (amt, func) => {
  let events = []
  for (let i=0;i<amt;i++) {
    events = events.concat(func(i))
  }
  return events
}
