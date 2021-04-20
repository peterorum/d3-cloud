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

var wordList = [
  { text: "afghan", size: 30 + Math.random() * 70, color: ~~(Math.random() * 6) },
  { text: "husky", size: 30 + Math.random() * 70, color: ~~(Math.random() * 6) },
  {
    text: "bulldog",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "cocker spaniel",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "corgi",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "pit bull",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "staffordshire",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  { text: "kelpie", size: 30 + Math.random() * 70, color: ~~(Math.random() * 6) },
  {
    text: "pinscher",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "basenji",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "basset hound",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  { text: "beagle", size: 30 + Math.random() * 70, color: ~~(Math.random() * 6) },
  { text: "collie", size: 30 + Math.random() * 70, color: ~~(Math.random() * 6) },
  {
    text: "bichon frisé",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "bloodhound",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "terrier",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  { text: "boxer", size: 30 + Math.random() * 70, color: ~~(Math.random() * 6) },
  {
    text: "bull terrier",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "bullmastiff",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "sheepdog",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "alsation",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "cavalier king charles spaniel",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "chihuahua",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "dachshund",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "dalmatian",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  { text: "dingo", size: 30 + Math.random() * 70, color: ~~(Math.random() * 6) },
  {
    text: "dobermann",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "foxhound",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "mastiff",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  { text: "setter", size: 30 + Math.random() * 70, color: ~~(Math.random() * 6) },
  {
    text: "french bulldog",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "german shepherd",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "schnauzer",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "golden retriever",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "great dane",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "greyhound",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "irish setter",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "jack russell",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "labrador",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "maltese",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "pekingese",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "pointer",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "pomeranian",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  { text: "poodle", size: 30 + Math.random() * 70, color: ~~(Math.random() * 6) },
  { text: "pug", size: 30 + Math.random() * 70, color: ~~(Math.random() * 6) },
  {
    text: "rhodesian ridgeback",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "rottweiler",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "saint bernard",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "shar pei",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "shih tzu",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  { text: "silky", size: 30 + Math.random() * 70, color: ~~(Math.random() * 6) },
  {
    text: "staffordshire bull terrier",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "weimaraner",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },
  {
    text: "yorkshire terrier",
    size: 30 + Math.random() * 70,
    color: ~~(Math.random() * 6),
  },

].map(function (d) {
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
    return  -45 + Math.floor(Math.random() * 4) * 45;
    // return  -90 + Math.floor(Math.random() * 3) * 90;
  })
  .font("Quast")
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
