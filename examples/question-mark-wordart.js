var Canvas = require("canvas");

var cloud = require("../build/d3.layout.cloud");

const canvasWidth = 1000;
const canvasHeight = (1000 * 5400) / 4500;

const colors = [
  "rgb(128, 0, 0)",
  "rgb(0, 128, 0)",
  "rgb(0, 0, 128)",
  "rgb(0, 128, 128)",
  "rgb(128, 0, 128)",
  "rgb(128, 128, 0)",
];

const fonts = [
  "Bauhaus93",
  "PulpoRust-25",
  "PulpoRust-50",
  "PulpoRust-75",
  "PulpoRust-100",
  "IM_FELL_DW_Pica_Romanz",
  "Chinchilla",
  "WTRGothicOpenShaded",
  "Abolition",
  "AcierBATText-Gris",
  "AdornCopperplate",
  "Alfarn",
  "Blackcurrant-Black",
  "Blenny-Black",
  "BlowUp",
  "blzee",
  "Calder-LCGrit",
  "Chalkduster",
  "Chuck",
  "ColtSoft-Medium",
  "Decorative",
  "FlowerPower",
  "JohnDoe",
  "NasalizationRg-Regular",
  "P22Stanyan",
  "PaintingWithChocolate",
  "PeacockDeep-Bold",
  "Phosphate",
  "Quast",
  "RigSolid",
  "Shlop",
  "StencilStd",
  "Victorious",
  "ZubiloLined",

  ];

const size = () => Math.floor(25 + Math.random() * 100);
const color = () => Math.floor(Math.random() * 6);
const font = () => Math.floor(Math.random() * fonts.length);

var wordList = Array(100)
  .fill({ text: "?", size: size(), color: color() })
  .map(function (d) {
    // return { text: d.text, size: d.size, color: d.color };
    return { text: d.text, size: size(), font: fonts[font()], color: 0 }; // recalc size as fill repeats constant. color set in final output
  });

cloud()
  .size([canvasWidth, canvasHeight])
  .canvas(function () {
    return new Canvas.createCanvas(1, 1);
  })
  .words(wordList)
  .padding(10)
  .rotate(function (d) {
    return Math.floor(Math.random() * 8) * 45;
  })
  .font((d) => d.font)
  .fontWeight("normal")
  .fontSize(function (d) {
    return d.size;
  })
  // .spiral("archimedean") 
  .spiral("rectangular") 
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
    }; fill: ${colors[color()]};">
  ${w.text}
  </text>
`);
  });

  cl("</g>");
  cl("</svg>");
}
