import { GameObject } from './GameObject'
abstract class Collider {
  parent: GameObject

  constructor(parent: GameObject) {
    this.parent = parent
  }
  abstract isTouching(gameObject: GameObject): boolean;
  calculateDistance(gameObject: GameObject): number {
    return Math.sqrt(Math.pow(this.parent.position.x - gameObject.position.x, 2) + Math.pow(this.parent.position.y - gameObject.position.y, 2))
  }
}

class CircleCollider extends Collider {
  radius: number;
  
  constructor(radius: number, parent: GameObject) {
    super(parent);
    this.radius = radius;
  }
  isTouching(gameObject: GameObject): boolean {
    var distance = this.calculateDistance(gameObject);
    if (distance < this.radius) {
      return true;
    }
  }
}

class RectangleCollider extends Collider {
  width: number;
  height: number;

  constructor(width: number, height: number, parent: GameObject) {
    super(parent);
    this.width = width;
    this.height = height;
  }
  isTouching(gameObject: GameObject): boolean {
    if 
  }
}
