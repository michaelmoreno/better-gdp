class Mouse {
  x: number = 0;
  y: number = 0;
  clicked: boolean = false;

  constructor() {
    document.addEventListener("mousemove", (event) => {
      this.x = event.screenX;
      this.y = event.screenY;
    });
    document.addEventListener("mousedown", (event) => {
      this.clicked = true;
    });
    document.addEventListener("mouseup", (event) => {
      this.clicked = false;
    });
  }
  isClicked() {
    return this.clicked;
  }
}

export { Mouse };
