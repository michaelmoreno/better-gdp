class Keyboard {
  keysPressed: string[];

  constructor() {
    document.addEventListener("keydown", (event) => {
      this.keysPressed[event.key] = true;
    });
    document.addEventListener("keyup", (event) => {
      this.keysPressed[event.key] = false;
    });
  }
  isKeyPressed(key: string) {
    return this.keysPressed[key];
  }
}

export { Keyboard };
