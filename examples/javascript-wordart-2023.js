var Canvas = require("canvas");

var cloud = require("../build/d3.layout.cloud");
const fs = require("fs");

const canvasWidth = 1000;
const canvasHeight = (1000 * 5400) / 4500;

const fonts = [
  "Monaco",
  "Barrio",
  "Big Shoulders Stencil Text",
  "Slackey",
  "Kirang Haerang",
  "Rammetto One",
];

const palettes = [
  ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  ["#a4d9c9", "#ffffff", "#ffffff", "#ffffff", "#a4d9c9"],
  ["#ed2224", "#ffffff", "#ffffff", "#ffffff", "#ed2224"],
  ["#C5E1A5", "#F1F8E9", "#DCEDC8", "#AED581", "#C5E1A5"],
  ["#F2F2F2", "#368DD9", "#57B7F2", "#77C3F2", "#F2F2F2"],
  ["#FFFFFF", "#E84046", "#FFFE68", "#dce0e6", "#FFFFFF"],
  ["#F2F2F2", "#8eb9c1", "#86A0A6", "#A8BBBF", "#F2F2F2"],
  ["#FFE473", "#BF6B04", "#F2A81D", "#F2DC6B", "#FFE473"],
  ["#89B29D", "#FFFFFF", "#FFF8F7", "#F7FFFB", "#89B29D"],
  ["#F2B035", "#F2C288", "#D98841", "#A65F37", "#F2B035"],
  ["#9ED2C0", "#C2DEE5", "#F2F9AD", "#DCC0EC", "#9ED2C0"],
  ["#E3E3E3", "#B0ADA7", "#a3a3a3", "#E3DFD7", "#E3E3E3"],
  ["#C962A4", "#DCA3B2", "#DC90AA", "#AB4A97", "#C962A4"],
  ["#FFFFFF", "#CFCFD4", "#E9E9EC", "#F0F0F2", "#FFFFFF"],
  ["#FFFFFF", "#ffe0c0", "#C0C8CA", "#CAC5C0", "#FFFFFF"],
  ["#F2EBD5", "#EFA39A", "#D9B596", "#B8977B", "#F2EBD5"],
  ["#FFF9EA", "#61B2AA", "#FFFB77", "#CCB8A3", "#FFF9EA"],
  ["#F2E5A0", "#DFE7F2", "#C7CFD9", "#5888A6", "#F2E5A0"],
  ["#FFF64A", "#E8D466", "#FFD452", "#E8AE44", "#FFF64A"],
  ["#9BC3AB", "#D3C7C8", "#F0F0EC", "#B2A48D", "#9BC3AB"],
  ["#5BFFB2", "#C3F9FF", "#B2E8DE", "#6FFF68", "#5BFFB2"],
  ["#F2BC79", "#6883A6", "#BF9B6F", "#D95F18", "#F2BC79"],
  ["#93AB9F", "#E8D6C8", "#F0BDB0", "#D6716F", "#93AB9F"],
  ["#A6CCC7", "#F0BDB0", "#D6716F", "#93AB9F", "#A6CCC7"],
  ["#EEE7CD", "#E1DAC0", "#FEE3B8", "#E4D0AB", "#EEE7CD"],
  ["#99FFC0", "#82E0E8", "#B1FFF3", "#95E8C8", "#99FFC0"],
  ["#8E8AFF", "#B3A24F", "#FFF0A3", "#FFEB8A", "#8E8AFF"],
  ["#F2ECCE", "#BF8450", "#D99A4E", "#F2D399", "#F2ECCE"],
  ["#FF5600", "#00A8A9", "#F68920", "#EFEFEF", "#FF5600"],
  ["#F2E2CE", "#838C7D", "#D9AD77", "#F2D7B6", "#F2E2CE"],
  ["#D9D9D9", "#7E8C74", "#A65D56", "#D97971", "#D9D9D9"],
  ["#F2A444", "#8A8EA6", "#F29849", "#D99962", "#F2A444"],
  ["#D9D9D9", "#7E8C74", "#ff8f84", "#D97971", "#D9D9D9"],
  ["#F2EC99", "#44A653", "#F2E963", "#BF9D8A", "#F2EC99"],
  ["#F23827", "#F2C84B", "#F2921D", "#F27052", "#F23827"],
  ["#F0F0F2", "#D1D0D9", "#8F92A6", "#9c9cb2", "#F0F0F2"],
  ["#C5D0D9", "#79928D", "#A0A7A7", "#9E9F98", "#C5D0D9"],
];

let color = null;
let wordList = null;

// output as svg

function end(words) {

  const tmpSvg = `/tmp/js-${words[0].font}-${new Date().getTime()}.svg`

  fs.writeFileSync(tmpSvg,
    `<svg width="${canvasWidth}" height="${canvasHeight}" version="1.1" xmlns="http://www.w3.org/2000/svg">`
  );

  fs.appendFileSync(tmpSvg,
    `<g transform="translate(${canvasWidth / 2}, ${
      canvasHeight / 2
    }) scale(1,1)">`
  );

  // <text text-anchor="middle" transform="translate(-75,220)rotate(90)" style="font-size: 10px; font-family: Impact; fill: rgb(222, 158, 214);">javascript</text>

  words.forEach((w) => {
    fs.appendFileSync(tmpSvg, `<text text-anchor="middle"
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

  fs.appendFileSync(tmpSvg, "</g>");
  fs.appendFileSync(tmpSvg, "</svg>");
}

function output() {
  colors = palettes[Math.floor(Math.random() * palettes.length)];

  const size = () => Math.floor(25 + Math.random() * 40);
  const color = () => Math.floor(Math.random() * colors.length);

  wordList = [
    { text: "javascript", size: 100, color: 0 },
    { text: "astro", size: size(), color: color() },
    { text: "copilot", size: size(), color: color() },
    { text: "css", size: size(), color: color() },
    { text: "esbuild", size: size(), color: color() },
    { text: "expo", size: size(), color: color() },
    { text: "express", size: size(), color: color() },
    { text: "git", size: size(), color: color() },
    { text: "gulp", size: size(), color: color() },
    { text: "html", size: size(), color: color() },
    { text: "jest", size: size(), color: color() },
    { text: "jquery", size: size(), color: color() },
    { text: "json", size: size(), color: color() },
    { text: "lodash", size: size(), color: color() },
    { text: "mocha", size: size(), color: color() },
    { text: "next", size: size(), color: color() },
    { text: "node", size: size(), color: color() },
    { text: "nosql", size: size(), color: color() },
    { text: "parcel", size: size(), color: color() },
    { text: "preact", size: size(), color: color() },
    { text: "prettier", size: size(), color: color() },
    { text: "puppeteer", size: size(), color: color() },
    { text: "react", size: size(), color: color() },
    { text: "regex", size: size(), color: color() },
    { text: "remix", size: size(), color: color() },
    { text: "rollup", size: size(), color: color() },
    { text: "rxjs", size: size(), color: color() },
    { text: "solid", size: size(), color: color() },
    { text: "stencil", size: size(), color: color() },
    { text: "storybook", size: size(), color: color() },
    { text: "svelte", size: size(), color: color() },
    { text: "vite", size: size(), color: color() },
    { text: "vue", size: size(), color: color() },
    { text: "webpack", size: size(), color: color() },
    { text: "yarn", size: size(), color: color() },
  ].map(function (d) {
    return { text: d.text, size: d.size, color: d.color };
  });

  const font = fonts[Math.floor(Math.random() * fonts.length)];

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
    .font(font)
    .fontWeight("bold")
    .fontSize(function (d) {
      return d.size;
    })
    .spiral("archimedean") // rectangular
    .on("end", end)
    .start();
}

function main() {

  for (i = 0; i < 10; i++) {
    output();
  }
}

main();
