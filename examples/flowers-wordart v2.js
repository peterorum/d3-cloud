var Canvas = require("canvas");

var cloud = require("../build/d3.layout.cloud");

const canvasWidth = 1000;
const canvasHeight = (1000 * 5400) / 4500;

const colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0 , 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 0, 255)",
];

const flowerSize = () => 15 + Math.random() * 35;

const popularFlowers = [
  "Acacia",
  "Bellflower",
  "Bergamot",
  "Buttercup",
  "Camellia",
  "Carnation",
  "Chrysanthemum",
  "Clover",
  "Cornflower",
  "Cyclamen",
  "Daffodil",
  "Dahlia",
  "Daisy",
  "Dandelion",
  "Frangipani",
  "Marigold",
  "Hibiscus",
  "Hyacinth",
  "Hydrangea",
  "Iris",
  "Lily",
  "Lotus",
  "Magnolia",
  "Orchid",
  "Pansy",
  "Petunia",
  "Poppy",
  "Roses",
  "Strelizia",
  "Sunflower",
  "Tulip",
  "Water lilies",
];

var wordList = popularFlowers
  .map((x) => {
    return {
      text: x,
      size: flowerSize(),
      color: ~~(Math.random() * 6),
    };
  })
  .map(function (d) {
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
    // return -45 + Math.floor(Math.random() * 4) * 45;
    return  -90 + Math.floor(Math.random() * 3) * 90;
  })
  .font((d) =>
    "Boecklins Universe"
  )
  .fontWeight("regular")
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
