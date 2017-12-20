function getContext(canvas) {
  return canvas.getContext("webgl");
}

let gl = getContext(canvas);