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
refreshNumberArray(15);
let colorArray = randomColor({ count: arrayToSort.length });

// const color =

let barChartData = {
  labels: arrayToSort,
  datasets: [
    {
      label: "Dataset 1",
      backgroundColor: colorArray,
      data: arrayToSort,
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

// sort array
const bubbleSort = new BubbleSort(arrayToSort);

const displayBubbleAlgorithm = () => {
  bubbleSort.sort();
  console.log(bubbleSort.swapPairs);

  let arrayCaptures = bubbleSort.arrayCaptures;
  console.log("bubbleSort.arrayCaptures:", bubbleSort.arrayCaptures);

  const interval = () => {
    setInterval(() => {
      // update data
      barChartData.datasets[0].data = arrayCaptures[0];
      barChartData.labels = arrayCaptures[0];
      swapColors(bubbleSort.swapPairs[0]);
      updateChart(400);
      arrayCaptures.shift();
      bubbleSort.swapPairs.shift();
    }, 500);
  };
  interval();
};

const updateChart = (time) => {
  console.log("updating chart");
  return myChart.update({
    duration: time,
    easing: "linear",
    lazy: true,
  });
};

const swapPairOnChart = (index1, index2) => {
  // highlightBarColor(index1, index2);
  let temp = barChartData.datasets[0].data[index1];
  barChartData.datasets[0].data[index1] = barChartData.datasets[0].data[index2];
  barChartData.datasets[0].data[index2] = temp;

  updateChart();
  // revertBarColor(index1, index2);
};

const swapColors = (array) => {
  [colorArray[array[0]], colorArray[array[1]]] = [
    colorArray[array[1]],
    colorArray[array[0]],
  ];
};

displayBubbleAlgorithm();

const changeBarColor = (index1, index2, color) => {
  const swapBarColor = "rgba(24, 23, 108, 0.2)";
  barChartData.datasets[0].backgroundColor[index1] = color;
  barChartData.datasets[0].backgroundColor[index2] = color;
};

const revertBarColor = (index1, index2) => {
  const regularBarColor = "rgba(255, 99, 132, 0.2)";
  colorArray[index1] = regularBarColor;
  colorArray[index2] = regularBarColor;
  myChart.data.datasets[0].backgroundColor = colorArray;
};

// const updateChart = () => {
//   console.log("updating chart");
//   return myChart.update({
//     duration: 800,
//     easing: "easeOutBounce",
//     lazy: false,
//   });
// };

// function sleep(milliseconds) {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }

// const swapPairOnChart = (index1, index2) => {
//   console.log("index1:", index1);
//   console.log("index2:", index2);
//   highlightBarColor(index1, index2);
//   let temp = myChart.data.datasets[0].data[index1];
//   console.log('myChart.data.datasets[0].data:', myChart.data.datasets[0].data)
//   myChart.data.datasets[0].data[index1] = myChart.data.datasets[0].data[index2];
//   myChart.data.datasets[0].data[index2] = temp;

//   updateChart();

//   revertBarColor(index1, index2);

//   // [array[index1], array[index2]] = [array[index2], array[index1]];
//   // myChart.data.datasets[0].data[index2] = exampleArray[index1];
//   // updateChart();
// };

// // button code
// const sortButton = document.getElementById("sort-button");
// sortButton.addEventListener("click", () => {
//   displayBubbleAlgorithm();
// })
