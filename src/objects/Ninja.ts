/* eslint-disable */
import { GameObject } from "../../framework/GameObject";
import { Keyboard } from "../../framework/Keyboard";

class Ninja extends GameObject {
  constructor(x, y, width, height, visible) {
    super(x, y, width, height, visible);
  }

  // EVENTS
  initialize() {
    // code that runs when object is first created
  }
  updateEveryFrame() {
    // code that runs every frame
  }
}

export { Ninja };
