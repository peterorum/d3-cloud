var Canvas = require("canvas");

var cloud = require("../build/d3.layout.cloud");

const canvasWidth = 1000
const canvasHeight = 1000 * 5400 / 4500

const colors = [
  "rgb(128, 0, 0)",
  "rgb(0, 128, 0)",
  "rgb(0, 0, 128)",
  "rgb(0, 128, 128)",
  "rgb(128, 0, 128)",
  "rgb(128, 128, 0)",
]

const size = () => Math.floor(25 + Math.random() * 50);
const color = () => Math.floor( + Math.random() * 4);


var wordList = [
  {text: "git", size: 100, color: color() },
  {text: "clone", size: size(), color: color() },
  {text: "init", size: size(), color: color() },
  {text: "add", size: size(), color: color() },
  {text: "mv", size: size(), color: color() },
  {text: "restore", size: size(), color: color() },
  {text: "rm", size: size(), color: color() },
  {text: "bisect", size: size(), color: color() },
  {text: "cherry-pick", size: size(), color: color() },
  {text: "diff", size: size(), color: color() },
  {text: "grep", size: size(), color: color() },
  {text: "log", size: size(), color: color() },
  {text: "show", size: size(), color: color() },
  {text: "status", size: size(), color: color() },
  {text: "branch", size: size(), color: color() },
  {text: "checkout", size: size(), color: color() },
  {text: "commit", size: size(), color: color() },
  {text: "merge", size: size(), color: color() },
  {text: "rebase", size: size(), color: color() },
  {text: "reset", size: size(), color: color() },
  {text: "switch", size: size(), color: color() },
  {text: "tag", size: size(), color: color() },
  {text: "fetch", size: size(), color: color() },
  {text: "push", size: size(), color: color() },
  {text: "pull", size: size(), color: color() },
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
    return d.text === "git" ? 0 : Math.floor(Math.random() * 2) * 90;
  })
  .font("Roboto")
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
