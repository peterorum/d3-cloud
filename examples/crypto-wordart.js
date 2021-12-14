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
  "PMNCaeciliaSansHead-Bd",
  "Tenon-Bold",
  "Neuzon-Regular",
  "AktivGrotesk-Bold",
  "TitilliumWeb-Bold",
  "Roboto-Medium",
  "HelveticaNeue-Bold",
  "Montserrat-Medium",
  "GaramondATFText-Bold",
  "AcuminProWide-Medium",
  "AinslieSans-NorDem",
  ];


const size = () => Math.floor(25 + Math.random() * 80);
const color = () => Math.floor(Math.random() * 6);
const font = () => Math.floor(Math.random() * fonts.length);

var wordList = [
  { text: "Crypto", size: 150, color: 0 },
  { text: "Bitcoin", size: size(), color: 0 },
  { text: "Blockchain", size: size(), color: 0 },
  { text: "Genesis Block", size: size(), color: 0 },
  { text: "Peer-to-Peer", size: size(), color: 0 },
  { text: "Algorithm", size: size(), color: 0 },
  { text: "Encryption", size: size(), color: 0 },
  { text: "Hash Rate", size: size(), color: 0 },
  { text: "Public Key", size: size(), color: 0 },
  { text: "Private Key", size: size(), color: 0 },
  { text: "Seed Phrase", size: size(), color: 0 },
  { text: "Cold Wallet", size: size(), color: 0 },
  { text: "Hot Wallet", size: size(), color: 0 },
  { text: "Mining", size: size(), color: 0 },
  { text: "Mempool", size: size(), color: 0 },
  { text: "PoW", size: size(), color: 0 },
  { text: "PoA", size: size(), color: 0 },
  { text: "PoS", size: size(), color: 0 },
  { text: "PoA", size: size(), color: 0 },
  { text: "PoB", size: size(), color: 0 },
  { text: "Non-Fungible Token", size: size(), color: 0 },
  { text: "NFT", size: size(), color: 0 },
  { text: "Node", size: size(), color: 0 },
  { text: "Chain Linking", size: size(), color: 0 },
  { text: "Altcoins", size: size(), color: 0 },
  { text: "DeFi", size: size(), color: 0 },
  { text: "Fork", size: size(), color: 0 },
  { text: "Memecoin", size: size(), color: 0 },
  { text: "ICO", size: size(), color: 0 },
  { text: "Escrow", size: size(), color: 0 },
  { text: "HODL", size: size(), color: 0 },
  { text: "Mooning", size: size(), color: 0 },
].map(function (d) {
  // return { text: d.text, size: d.size, color: d.color };
  return { text: d.text, size: d.size, font: fonts[font()], color: color() };
});

cloud()
  .size([canvasWidth, canvasHeight])
  .canvas(function () {
    return new Canvas.createCanvas(1, 1);
  })
  .words(wordList)
  .padding(10)
  .rotate(function (d) {
    return d.text === "Crypto" ? 0 : Math.floor(Math.random() * 2) * 90;
  })
  .font((d) => d.font)
  .fontWeight("normal")
  .fontSize(d => d.size)
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
