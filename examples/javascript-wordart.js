var Canvas = require("canvas");

var cloud = require("../build/d3.layout.cloud");

const canvasWidth = 1000
const canvasHeight = 1000 * 5400 / 4500

const colors = [
  "rgb(128, 0, 0)",
  "rgb(0, 128, 0)",
  "rgb(0, 0, 128)",
]

var words = [
  "javascript",
  "html",
  "css",
  "dom",
  "json",
  "ajax",
  "node",
  "nosql",
  "react",
  "vue",
  "svelte",
  "jquery",
  "angular",
  "gatsby",
  "jamstack",
  "git",
  "pwa",
  "regex",
  "graphql",
  "npm",
  "typescript",
  "bootstrap",
  "tailwind",
  "restful",
  "express",
  "nextjs",
  "accessibility",
  "seo",
  "aws",
  "docker",
  "d3",
  "sass",
  "jest",
  "eslint",
  "prettier",
  "webpack",
].map(function (d) {
  return { text: d, size: 10 + Math.random() * 90 };
});

cloud()
  .size([canvasWidth, canvasHeight])
  .canvas(function () {
    return new Canvas.createCanvas(1, 1);
  })
  .words(words)
  .padding(5)
  .rotate(function () {
    return ~~(Math.random() * 2) * 90;
  })
  .font("Impact")
  .fontSize(function (d) {
    return d.size;
  })
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
        style="font-size: ${w.size}px; font-family: ${w.font}; weight: normal; fill: ${colors[Math.floor(Math.random() * colors.length)]};">
        ${w.text}
        </text>
      `);
  });

  cl("</g>");
  cl("</svg>");
}
