abstract class GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  visible: boolean;

  constructor(x, y, width, height, visible = true) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.visible = visible;
  }
  abstract initialize();
  abstract updateEveryFrame();
  isTouching() {
    this.
  }
}

export { GameObject };
