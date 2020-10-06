class Note {

  constructor(...initial) {
    this.frequency = initial[0] || 440;
    this.duration = initial[1] >=0 ? initial[1] : 1000;
    this.velocity = initial[2] || 0.5;
    this.pan = initial[3] || 0.5;
    // this.fade = initial[4] || 0;
  }

  up() {
  }

  down() {}

  times(ratio) {
    this.frequency *= ratio;
    return this;
  }
    // i.e. times('duration', 0.5)
  remove() {}

  // ??
  duplicate() {}

  compress(ratio) {
    this.duration *= ratio;
    return this;
  }
  
  flatten() {
    return [this];
  }

}

export {Note};
