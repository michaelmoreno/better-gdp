import { Canvas } from "../framework/Canvas";

type Renderable = {
  render();
};

class Renderer {
  gameObjects: Renderable[] = [];
  canvas: Canvas;
  constructor(canvas: Canvas) {
    this.canvas = canvas;
  }

  frameLoop() {
    // clear last frame to give illusion of movement
    this.canvas.erase();
    this.canvas.drawAxes();
    this.canvas.drawCells();
    this.canvas.fillRectangle(0, 0, 50, 50, "red");

    // this.gameObjects.forEach((object) => {
    //   object.render();
    // });

    // start next frame and repeat all above
    requestAnimationFrame(() => this.frameLoop());
  }
}

export { Renderer };
