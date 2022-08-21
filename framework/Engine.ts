class Engine {
  renderer: Renderer;
  gameObjects: GameObject[] = [];
  maxObjects: number;

  constructor(maxObjects: number = 200) {
    this.maxObjects = maxObjects;
  }
}

export { Engine };
