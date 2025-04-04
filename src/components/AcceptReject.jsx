import Sketch from "react-p5";

const AcceptReject = () => {
  let randomCounts = [];
  let total = 20;

  const acceptReject = (p5) => {
    while (true) {
      let r1 = p5.floor(p5.random(1) * total);
      let probability = r1;
      let r2 = p5.floor(p5.random(1) * total);
      if (r2 < probability) {
        return r1;
      }
    }
  };
  // In setup, use the parent container’s width and set height proportional to width.
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5; // 50% of width (adjust as needed)
    p5.background(255);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    for (let i = 0; i < total; i++) {
      randomCounts[i] = 0;
    }
  };

  // Draw function to render the sketch
  const draw = (p5) => {
    let index;
    do {
      index = p5.floor(acceptReject(p5));
    } while (index < 0 || index >= randomCounts.length);
    randomCounts[index]++;
    p5.stroke(0);
    p5.fill(127);
    let w = p5.width / randomCounts.length;

    for (let x = 0; x < randomCounts.length; x++) {
      p5.rect(x * w, p5.height - randomCounts[x], w - 1, randomCounts[x]);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default AcceptReject;
