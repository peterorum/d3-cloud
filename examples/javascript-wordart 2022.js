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

const size = () => Math.floor(25 + Math.random() * 80);
const color = () => Math.floor(Math.random() * 6);

var wordList = [
  { text: "javascript", size: 100, color: 0 },
  { text: "svelte", size: size(), color: color() },
  { text: "react", size: size(), color: color() },
  { text: "vue", size: size(), color: color() },
  { text: "preact", size: size(), color: color() },
  { text: "angular", size: size(), color: color() },
  { text: "vite", size: size(), color: color() },
  { text: "esbuild", size: size(), color: color() },
  { text: "rollup", size: size(), color: color() },
  { text: "parcel", size: size(), color: color() },
  { text: "webpack", size: size(), color: color() },
  { text: "gulp", size: size(), color: color() },
  { text: "browserify", size: size(), color: color() },
  { text: "tsc cli", size: size(), color: color() },
  { text: "npm", size: size(), color: color() },
  { text: "yarn", size: size(), color: color() },
  { text: "nextjs", size: size(), color: color() },
  { text: "express", size: size(), color: color() },
  { text: "gatsby", size: size(), color: color() },
  { text: "strapi", size: size(), color: color() },
  { text: "jest", size: size(), color: color() },
  { text: "cypress", size: size(), color: color() },
  { text: "storybook", size: size(), color: color() },
  { text: "mocha", size: size(), color: color() },
  { text: "jasmine", size: size(), color: color() },
  { text: "html", size: size(), color: color() },
  { text: "css", size: size(), color: color() },
  { text: "json", size: size(), color: color() },
  { text: "node", size: size(), color: color() },
  { text: "nosql", size: size(), color: color() },
  { text: "jquery", size: size(), color: color() },
  { text: "git", size: size(), color: color() },
  { text: "regex", size: size(), color: color() },
  { text: "graphql", size: size(), color: color() },
  { text: "typescript", size: size(), color: color() },
  { text: "d3", size: size(), color: color() },
  { text: "prettier", size: size(), color: color() },
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
    return d.text === "javascript" ? 0 : Math.floor(Math.random() * 2) * 90;
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
