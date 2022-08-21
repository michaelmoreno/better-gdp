import { Canvas } from "../framework/Canvas";
// import { Engine } from "../framework/Engine";
import { Renderer } from "../framework/Renderer";

var canvas = new Canvas();
canvas.centerOrigin();
canvas.flipYAxis();

var renderer = new Renderer(canvas);
renderer.frameLoop();
export { canvas };
