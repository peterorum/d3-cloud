
var Canvas = require("canvas");

var cloud = require("../build/d3.layout.cloud");

const canvasWidth = 1000;
const canvasHeight = (1000 * 5400) / 4500;

const colors = [
  "rgb(0, 0, 0)",
  "rgb(128, 128, 128)",
  "rgb(0, 0, 128)",
  "rgb(0, 128, 128)",
  "rgb(128, 0, 128)",
  "rgb(128, 128, 0)",
];

const size = () => Math.floor(25 + Math.random() * 30);
const color = () => Math.floor(Math.random() * 2);

var wordList = [
  { text: "chess",  size: 100, color: 0 },
  { text: "knight",  size: 70, color: color() },
  { text: "queen",  size: 70, color: color() },
  { text: "pawn",  size: 70, color: color() },
  { text: "bishop",  size: 70, color: color() },
  { text: "king",  size: 70, color: color() },
  { text: "rook",  size: 70, color: color() },
  { text: "check",  size: 50, color: color() },
  { text: "chessboard",  size: 30, color: color() },
  { text: "checkmate",  size: 40, color: color() },
  { text: "castle",  size: size(), color: color() },
  { text: "1. e4",  size: size(), color: color() },
  { text: "grandmaster",  size: size(), color: color() },
  { text: "sicilian defence",  size: 30, color: color() },
  { text: "exchange",  size: 30, color: color() },
  { text: "develop",  size: 30, color: color() },
  { text: "draw",  size: 40, color: color() },
  { text: "stalemate",  size: 40, color: color() },
  { text: "pin",  size: 35, color: color() },
  { text: "fork",  size: 35, color: color() },
  { text: "en passant",  size: 30, color: color() },
  { text: "zugzwang",  size: 30, color: color() },
  { text: "queen's gambit",  size: 30, color: color() },
  { text: "resign",  size: 40, color: color() },
  { text: "opening",  size: 50, color: color() },
  { text: "promotion",  size: 30, color: color() },
  { text: "mate",  size: size(), color: color() },
  { text: "counterattack",  size: 40, color: color() },
  { text: "diagonal",  size: size(), color: color() },
  { text: "sacrifice",  size: 30, color: color() },
  { text: "decoy",  size: 30, color: color() },
].map(function (d) {
  return { text: d.text, size: d.size, color: d.color };
});

cloud()
  .size([canvasWidth, canvasHeight])
  .canvas(function () {
    return new Canvas.createCanvas(1, 1);
  })
  .words(wordList)
  .padding(7)
  .rotate(function (d) {
    // first word horizontal
    return d.text === wordList[0].text ? 0 : Math.floor(Math.random() * 2) * 90;
  })
  .font("Monaco")
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
    `<g transform="translate(${canvasWidth / 2}, ${
      canvasHeight / 2
    }) scale(1,1)">`
  );

  // <text text-anchor="middle" transform="translate(-75,220)rotate(90)" style="font-size: 10px; font-family: Impact; fill: rgb(222, 158, 214);">javascript</text>

  words.forEach((w) => {
    cl(`<text text-anchor="middle"
        transform="translate(${w.x}, ${w.y})
        rotate(${w.rotate})
        scale(1,1)"
        style="font-size: ${w.size}px; font-family: ${w.font}; weight: ${
      w.weight
    }; fill: ${colors[wordList.find((x) => x.text === w.text).color]};">
        ${w.text}
        </text>
      `);
  });

  cl("</g>");
  cl("</svg>");
}
