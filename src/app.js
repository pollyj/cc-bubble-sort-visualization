// How can we use require here if it's frontend? We can thank webpack.
const BubbleSort = require("./Sort");
const Chart = require("chart.js");
const randomColor = require("randomcolor");

// A link to our styles!
require("./index.css");

const refreshNumberArray = (total = 15) => {
  arrayToSort = [];

  const randomNumberGenerator = () => {
    return Math.ceil(Math.random() * 100);
  };
  for (let i = 0; i < total; i++) {
    arrayToSort.push(randomNumberGenerator());
  }
};

let arrayToSort = [];
refreshNumberArray();
let colorArray = randomColor({
  count: arrayToSort.length,
  luminosity: "light",
  hue: "pink",
});

// const color =

let barChartData = {
  labels: arrayToSort,
  datasets: [
    {
      label: "Dataset 1",
      backgroundColor: colorArray,
      data: arrayToSort,
      fontColor: "rgb(80, 245, 162)",
    },
  ],
};

const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: "bar",
  data: barChartData,
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});

// sort array
const bubbleSort = new BubbleSort(arrayToSort);

const displayBubbleAlgorithm = () => {
  bubbleSort.sort();

  const timer = setInterval(updateData, 500);

  function updateData() {
    let arrayCaptures = bubbleSort.arrayCaptures;
    if (!arrayCaptures[0]) {
      return clearInterval(timer);
    }
    // update data
    barChartData.datasets[0].data = arrayCaptures[0];
    barChartData.labels = arrayCaptures[0];
    swapColors(bubbleSort.swapPairs[0]);
    updateChart(400);
    arrayCaptures.shift();
    bubbleSort.swapPairs.shift();
  }
};

const updateChart = (time) => {
  console.log("updating chart");
  return myChart.update({
    duration: time,
    easing: "linear",
    lazy: true,
  });
};

const swapColors = (array) => {
  [colorArray[array[0]], colorArray[array[1]]] = [
    colorArray[array[1]],
    colorArray[array[0]],
  ];
};

displayBubbleAlgorithm();
