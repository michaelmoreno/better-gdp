class Canvas {
  context: CanvasRenderingContext2D;
  width: number;
  height: number;

  constructor() {
    var canvas = document.querySelector("canvas");
    this.width = canvas.width = window.innerWidth;
    this.height = canvas.height = window.innerHeight;
    // canvas.style.margin = "auto";
    this.context = canvas.getContext("2d");
  }
  centerOrigin() {
    this.context.translate(this.width / 2, this.height / 2);
  }
  flipYAxis() {
    this.context.scale(1, -1);
  }
  erase() {
    this.context.clearRect(
      0 - this.width / 2,
      0 - this.height / 2,
      this.width * 2,
      this.height * 2
    );
  }
  fillRectangle(x, y, width, height, color) {
    this.context.fillStyle = color;
    this.context.fillRect(x - width / 2, y - height / 2, width, height);
  }
  strokeRectangle(x, y, width, height, color) {
    this.context.strokeStyle = color;
    this.context.strokeRect(x - width / 2, y - height / 2, width, height);
  }
  fillCircle(x, y, radius, color) {
    this.context.fillStyle = color;
    this.context.beginPath();
    this.context.arc(x, y, radius, 0, Math.PI * 2, false);
    this.context.fill();
    this.context.closePath();
  }
  strokeCircle(x, y, radius, color) {
    this.context.strokeStyle = color;
    this.context.beginPath();
    this.context.arc(x, y, radius, 0, Math.PI * 2, false);
    this.context.stroke();
    this.context.closePath();
  }
  line(x1, y1, x2, y2, color, thickness, dash = []) {
    this.context.strokeStyle = color;
    this.context.lineWidth = thickness;
    this.context.beginPath();
    this.context.setLineDash(dash);
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
    this.context.closePath();
  }
  drawXAxis(interval = 30, notchSize = 10, color = "black") {
    this.line(-this.width / 2, 0, this.width / 2, 0, color, 1);
    for (var i = -this.width / 2; i < this.width / 2; i += interval) {
      this.line(i, -notchSize / 2, i, notchSize / 2, color, 1);
    }
  }
  drawYAxis(interval = 30, notchSize = 10, color = "black") {
    this.line(0, -this.height / 2, 0, this.height / 2, color, 1);
    for (var i = -this.height / 2; i < this.height / 2; i += interval) {
      this.line(-notchSize / 2, i, notchSize / 2, i, color, 1);
    }
  }
  drawAxes(interval = 30, notchSize = 10, color = "black") {
    this.drawXAxis(interval, notchSize, color);
    this.drawYAxis(interval, notchSize, color);
  }
  drawCells(interval = 30, color = "grey") {
    for (var i = -this.width / 2; i < this.width / 2; i += interval) {
      this.line(i, -this.height / 2, i, this.height / 2, color, 1);
    }
    for (var y = -this.height / 2; y < this.height / 2; y += interval) {
      this.line(-this.width / 2, y, this.width / 2, y, color, 1);
    }
  }
}

export { Canvas };
