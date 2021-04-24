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
  "African Daisy",
  "Azalea",
  "Bellflower",
  "Bergamot",
  "Bottlebrush",
  "Buttercup",
  "Camellia",
  "Carnation",
  "Chicory",
  "Chrysanthemum",
  "Clover",
  "Cornflower",
  "Cyclamen",
  "Daffodil",
  "Dahlia",
  "Daisy",
  "Dandelion",
  "Delphinium",
  "Desert Rose",
  "Dill",
  "Elder",
  "Evening Primrose",
  "Forget Me Not",
  "Frangipani",
  "Freesia",
  "Marigold",
  "Fuchsia",
  "Geranium",
  "Gladiolas",
  "Heather",
  "Hibiscus",
  "Holly",
  "Honeysuckle",
  "Hyacinth",
  "Hydrangea",
  "Iris",
  "Jasmine",
  "Kangaroo Paw",
  "Lantana",
  "Lavender",
  "Lilac",
  "Lily",
  "Lotus",
  "Lupin",
  "Magnolia",
  "Marigold",
  "Mayflower",
  "Nasturtium",
  "Orchid",
  "Pansy",
  "Peony",
  "Petunia",
  "Poppy",
  "Quince",
  "Roses",
  "Sage",
  "Snapdragon",
  "Strelizia",
  "Sunflower",
  "Sweet Pea",
  "Tulip",
  "Wallflower",
  "Water lilies",
];

var wordList = [
  {
    text: "Abutilon",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Acacia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Aconite",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "African Daisy",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Agapanthus",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Ageratum",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Alchemilla",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Allium",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Alstroemeria",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Alyssum",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Amaranthus",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Amaryllis",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Anemone",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Anise Hyssop",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Armeria Maritima",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Aster",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Azalea",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Baby’s Breath",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Bachelor’s Button",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Balloon Flower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Ballota",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Bee Balm",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Begonia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Bellflower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Bergamot",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Bergenia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Billbergia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Black-eyed Susan",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Blanket Flower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Blazing Star",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Bleeding Heart",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Bletilla",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Bluestar Flower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Bluebonnets",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Blue-eyed Grass",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Borage",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Bottlebrush",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Bouvardia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Brachyscome",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Brassica",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Broom",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Buttercup",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Butterfly Bush",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Calceolaria",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Calendula",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "California Poppy",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Calla Lily",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Camellia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Candytuft",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Canna Lily",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Cape Leadwort",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Cape Primrose",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Cardinal Flower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Carnation",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Catharanthus",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Catmint",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Celosia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Cerastium Tomentosum",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Chicory",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Chionodoxa",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Chrysanthemum",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Clarkia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Clematis",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Clover",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Columbine",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Coneflower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Coral Bells",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Coral Vine",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Coreopsis",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Cornflower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Corydalis",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Cosmos",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Cotoneaster",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Crocosmia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Crocus",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Crown Imperial",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Cuckoo Flower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Cyclamen",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Daffodil",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Dahlia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Daisy",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Dandelion",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Daphne",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Daylily",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Decumaria",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Delphinium",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Desert Rose",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Deutzia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Dianella",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Dianthus barbatus",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Diascia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  { text: "Dill", size: flowerSize(), color: ~~(Math.random() * 6) },
  { text: "Disa", size: flowerSize(), color: ~~(Math.random() * 6) },
  {
    text: "Echinops",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Echium",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Elder",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "English Bluebell",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Epimedium",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Eremurus",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Erica",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Erigeron",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Euphorbia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Eustoma",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Evening Primrose",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Fall Crocus",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Firethorn",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Flaming Katy",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Flannel Flower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Flax Flower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Flowering Dogwood",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Forget Me Not",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Forsythia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Four O’clock",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Foxglove",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Frangipani",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Freesia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Fuchsia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Gaillardia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Gardenia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Gazania",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Geranium",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Gerbera Flower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Gladiolas",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Goldenrod",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Grape Hyacinth",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Guzmania",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Hawthorn",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Heather",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  { text: "Hebe", size: flowerSize(), color: ~~(Math.random() * 6) },
  {
    text: "Helenium",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Helichrysum",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Heliotrope",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Hellebore",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Hibiscus",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Holly",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Hollyhock",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Honeysuckle",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Hosta",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Hyacinth",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Hydrangea",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Hyssop",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Ice Plant",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Iceland Poppy",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Impatiens",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Ipomoea Lobata",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  { text: "Iris", size: flowerSize(), color: ~~(Math.random() * 6) },
  { text: "Ixia", size: flowerSize(), color: ~~(Math.random() * 6) },
  {
    text: "Ixora",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Jacob’s Ladder",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Jasmine",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Johnny Jump Up",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Kaffir Lily",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Kalmia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Kangaroo Paw",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Knautia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Kniphofia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Lady’s Slipper",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Laelia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Lantana",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Larkspur",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Lavatera",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Lavender",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Lemon Verbena",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Lewesia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Lilac",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Lily of the Valley",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  { text: "Lily", size: flowerSize(), color: ~~(Math.random() * 6) },
  {
    text: "Linaria",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Lotus",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Love in the Mist",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Lunaria",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Lupin",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Magnolia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Maltese Cross",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Mandevilla",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Marguerite Daisy",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Marigold",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Matthiola",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Mayflower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Meconopsis",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Mimosa",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Moonflower Vine",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Monk’s Hood",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Moraea",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Moss Rose",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Narcissus",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Nasturtium",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Nemesia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Nemophila",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Neoregelia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Nerine",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "New Zealand Tea Tree",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Nierembergia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Nolana",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Oleander",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Olearia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Orchid",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Ornamental Cherry",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Ornithogalum",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Osteospermum",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Oxalis",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Oxeye Daisy",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Oyster Plant",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Painted Daisy",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Pansy",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Parodia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Passion Flower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Peace Lily",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Pelargonium",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Penstemon",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Peony",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Periwinkle",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Persian Buttercup",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Petunia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Phlox",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Photinia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Physostegia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Pincushion Flower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Pinks",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Poinsettia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Potentilla",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Polyanthus",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Poppy",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Powder Puff",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Quaker Ladies",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Queen Anne’s Lace",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Queen of the Meadow",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Queen’s Cup",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Quince",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Rain Lily",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Rock Rose",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Rondeletia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Roses",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Rose of Sharon",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  { text: "Sage", size: flowerSize(), color: ~~(Math.random() * 6) },
  {
    text: "Saint John’s Wort",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Scaevola",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Scented Geranium",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Scilla",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Sedum",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Shasta Daisy",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Silene",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Snapdragon",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Snowdrop",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Snowflake",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Soapwort",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Speedwell",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Starflower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Statice",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Strelizia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Sunflower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Sweet Pea",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Tea Rose",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Tiger Flower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Tithonia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Tobacco Plant",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Trachelium",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Trillium",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Triteleia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Tritonia crocata",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Trollius",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Trumpet Vine",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Tuberose",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Tulip",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Urn Plant",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Ursinia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Valerian",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Verbena",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Viburnum",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Viola",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Virginia Creeper",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Wallflower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Wandflower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Water lilies",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Watsonia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Wax Plant",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Wedelia",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Weigela",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Whirling Butterflies",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Winter Jasmine",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Winterberry",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Wishbone Flower",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Woolly Violet",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Xanthoceras sorbifolium",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Xerophyllum",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Xylobium",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Xylosma",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Yarrow",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Yellow Archangel",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Yellow Bell",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Yellow-eyed Grass",
    size: flowerSize(),
    color: ~~(Math.random() * 6),
  },
  {
    text: "Zinnia",
    size: flowerSize(),
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
    return -45 + Math.floor(Math.random() * 4) * 45;
    // return  -90 + Math.floor(Math.random() * 3) * 90;
  })
  .font((d) =>
    popularFlowers.includes(d.text) ? "Spring" : "Boecklins Universe"
  )
  .fontWeight("regular")
  .fontSize(function (d) {
    return popularFlowers.includes(d.text) ? d.size * 2 : d.size;
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
