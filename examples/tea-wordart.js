var Canvas = require("canvas");

var cloud = require("../build/d3.layout.cloud");

const canvasWidth = 1000
const canvasHeight = 1000 * 5400 / 4500

const colors = [
  "rgb(255, 209, 96)",
  "rgb(253, 238, 196)",
  "rgb(249, 166, 128)",
  "rgb(246, 135, 59)",
  "rgb(113, 140, 112)", // dull green
  "rgb(0, 255, 0)",
]

const size = () => Math.floor(25 + Math.random() * 75);
const color = () => Math.floor( + Math.random() * 4);

var wordList = [

  {text: "lapsang souchong", size: 35, color: color()},
  {text: "keemun", size: size(), color: color()},
  {text: "assam", size: 75, color: color()},
  {text: "darjeeling", size: 50, color: color()},
  {text: "earl grey", size: size(), color: color()},
  {text: "english breakfast", size: size(), color: color()},
  {text: "masala chai", size: 35, color: color()},
  {text: "ceylon", size: size(), color: color()},
  {text: "orange pekoe", size: size(), color: color()},
  {text: "russian caravan", size: 50, color: color()},
  {text: "pu'er", size: 50, color: color()},
  {text: "iced", size: 25, color: color()},
  {text: "green", size: 25, color: 4},
  {text: "matcha", size: 25, color: 4},
  {text: "sencha", size: 25, color: color()},
  {text: "prince of wales", size: 35, color: color()},
].map(function (d) {
  return { text: d.text, size: d.size, color: d.color };
});

cloud()
  .size([canvasWidth, canvasHeight])
  .canvas(function () {
    return new Canvas.createCanvas(1, 1);
  })
  .words(wordList)
  .padding(6)
  .rotate(function (d) {
    // return d.text === "ADD MAIN" ? 0 : -45 +  Math.floor(Math.random() * 4) * 45;
    return d.text === "XXX" ? 0 : -90 +  Math.floor(Math.random() * 3) * 90;
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
