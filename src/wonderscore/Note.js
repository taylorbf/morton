class Note {

  constructor(...initial) {
    this.frequency = initial[0] || 440;
    this.duration = initial[1] || 1000;
    this.velocity = initial[2] || 0.5;
    this.pan = initial[3] || 0.5;
    // this.fade = initial[4] || 0;
  }

  up() {}

  down() {}

  times(parameter, ratio) {}
    // i.e. times('duration', 0.5)

  remove() {}

  // ??
  duplicate() {}

}

export {Note};
