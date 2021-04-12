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

var wordList = [
  {text: "javascript", size: 100 , color: 0},
  {text: "html", size: 30 , color: 1},
  {text: "css", size: 50 , color: 1},
  {text: "dom", size: 25 , color: 1},
  {text: "json", size: 50 , color: 0},
  {text: "ajax", size: 50 , color: 0},
  {text: "node", size: 50 , color: 0},
  {text: "nosql", size: 25 , color: 2},
  {text: "react", size: 75 , color: 0},
  {text: "vue", size: 50 , color: 0},
  {text: "svelte", size: 50 , color: 0},
  {text: "jquery", size: 25 , color: 1},
  {text: "angular", size: 20 , color: 0},
  {text: "gatsby", size: 25 , color: 2},
  {text: "jamstack", size: 50 , color: 2},
  {text: "git", size: 50 , color: 2},
  {text: "pwa", size: 25 , color: 1},
  {text: "regex", size: 25 , color: 0},
  {text: "graphql", size: 40 , color: 0},
  {text: "npm", size: 50 , color: 2},
  {text: "typescript", size: 25 , color: 0},
  {text: "bootstrap", size: 20 , color: 1},
  {text: "tailwind", size: 20 , color: 1},
  {text: "restful", size: 25 , color: 0},
  {text: "express", size: 40 , color: 2},
  {text: "nextjs", size: 25 , color: 2},
  {text: "accessibility", size: 40 , color: 1},
  {text: "seo", size: 20 , color: 3},
  {text: "aws", size: 25 , color: 2},
  {text: "docker", size: 25 , color: 2},
  {text: "d3", size: 25 , color: 0},
  {text: "sass", size: 25 , color: 1},
  {text: "jest", size: 75 , color: 0},
  {text: "eslint", size: 35 , color: 0},
  {text: "prettier", size: 30 , color: 0},
  {text: "webpack", size: 60 , color: 0},
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
