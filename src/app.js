// How can we use require here if it's frontend? We can thank webpack.
const Sort = require("./Sort");
const Chart = require("chart.js");

// A link to our styles!
require("./index.css");

const regularBarColor = "rgba(255, 99, 132, 0.2)";
const swapBarColor = "rgba(255, 99, 255, 0.2)";

// Arrays for chart.js to use
const exampleArray = [
  1,
  7,
  3,
  20,
  15,
  57,
  94,
  5,
  72,
  26,
  4,
  75,
  46,
  35,
  76,
  13,
  95,
  20,
  46,
  34,
];

const emptyArray = [];
exampleArray.forEach((element) => {
  emptyArray.push("");
});

const colorArray = [];
exampleArray.forEach((element) => {
  colorArray.push("");
});
colorArray[0] = "rgba(255, 99, 132, 0.2)";

const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: emptyArray,
    datasets: [
      {
        data: exampleArray,
        backgroundColor: colorArray,
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});

const highlightBarColor = (index1, index2) => {
  colorArray[index1] = swapBarColor;
  colorArray[index2] = swapBarColor;
  sortingChart.data.datasets[0].backgroundColor = colorArray;
};

const revertBarColor = (index1, index2) => {
  colorArray[index1] = regularBarColor;
  colorArray[index2] = regularBarColor;
  sortingChart.data.datasets[0].backgroundColor = colorArray;
};

setTimeout(() => {
  myChart.data.datasets[0].data[2] = 50;
  myChart.update({
    duration: 2000,
    easing: "easeOutBounce",
  });
}, 2000);

const sort = new Sort();
