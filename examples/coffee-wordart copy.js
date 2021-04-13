var Canvas = require("canvas");

var cloud = require("../build/d3.layout.cloud");

const canvasWidth = 1000
const canvasHeight = 1000 * 5400 / 4500

const colors = [
  "rgb(255, 209, 96)",
  "rgb(253, 238, 196)",
  "rgb(249, 166, 128)",
  "rgb(246, 135, 59)",
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
]

var wordList = [

  {text: "affogato", size: 75, color: 2},
  {text: "americano", size: 75, color: 3},
  {text: "bicerin", size: 25, color: 2},
  {text: "bombon", size: 25, color: 2},
  {text: "breve", size: 30, color: 1},
  {text: "cafè au lait", size: 50, color: 1},
  {text: "cappuccino", size: 80, color: 1},
  {text: "coffee", size: 150, color: 0},
  {text: "cold brew", size: 50, color: 2},
  {text: "con panna", size: 50, color: 1},
  {text: "corretto", size: 25, color: 3},
  {text: "cortado", size: 25, color: 1},
  {text: "decaf", size: 25, color: 2},
  {text: "doppio", size: 40, color: 3},
  {text: "drip brew", size: 50, color: 2},
  {text: "espresso", size: 80, color: 3},
  {text: "flat white", size: 80, color: 1},
  {text: "frappé", size: 50, color: 1},
  {text: "iced", size: 60, color: 1},
  {text: "irish", size: 40, color: 2},
  {text: "latte", size: 80, color: 1},
  {text: "long black", size: 70, color: 3},
  {text: "lungo", size: 50, color: 3},
  {text: "macchiato", size: 70, color: 2},
  {text: "manilo", size: 30, color: 2},
  {text: "marocchino", size: 40, color: 1},
  {text: "mocha", size: 70, color: 1},
  {text: "percolated", size: 40, color: 2},
  {text: "piccolo", size: 30, color: 1},
  {text: "plunger", size: 30, color: 2},
  {text: "red eye", size: 20, color: 3},
  {text: "ristretto", size: 50, color: 3},
  {text: "romano", size: 40, color: 3},
  {text: "short black", size: 60, color: 3},
  {text: "vienna", size: 50, color: 1},
].map(function (d) {
  return { text: d.text, size: d.size, color: d.color };
});

cloud()
  .size([canvasWidth, canvasHeight])
  .canvas(function () {
    return new Canvas.createCanvas(1, 1);
  })
  .words(wordList)
  .padding(2)
  .rotate(function (d) {
    return d.text === "coffee" ? 0 : -45 +  Math.floor(Math.random() * 4) * 45;
  })
  .font("Chalkduster")
  .fontWeight("bold")
  .fontSize(function (d) {
    return d.size;
  })
  .spiral("archimedean") // rectangular
  .on("end", end)
  .start();

// function end(words) { console.log(JSON.stringify(words, null, 4)); }

// output as svg

function cl(s) {
  console.log(s);
}

function end(words) {
  cl(
    `<svg width="${canvasWidth}" height="${canvasHeight}" version="1.1" xmlns="http://www.w3.org/2000/svg">`
  );

  cl(
    `<g transform="translate(${canvasWidth / 2}, ${canvasHeight / 2}) scale(1,1)">`
  );

  // <text text-anchor="middle" transform="translate(-75,220)rotate(90)" style="font-size: 10px; font-family: Impact; fill: rgb(222, 158, 214);">javascript</text>

  words.forEach((w) => {
    cl(`<text text-anchor="middle" 
        transform="translate(${w.x}, ${w.y}) 
        rotate(${w.rotate})
        scale(1,1)"
        style="font-size: ${w.size}px; font-family: ${w.font}; weight: ${w.weight}; fill: ${colors[wordList.find(x => x.text === w.text).color]};">
        ${w.text}
        </text>
      `);
  });

  cl("</g>");
  cl("</svg>");
}
