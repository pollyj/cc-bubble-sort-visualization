// How can we use require here if it's frontend? We can thank webpack.
const BubbleSort = require("./Sort");
const Chart = require("chart.js");

// A link to our styles!
require("./index.css");

const refreshNumberArray = (total = 20) => {
  arrayToSort.forEach((element) => arrayToSort.pop());

  const randomNumberGenerator = () => {
    return Math.ceil(Math.random() * 100);
  };
  for (let i = 0; i < total; i++) {
    arrayToSort.push(randomNumberGenerator());
  }
};

const arrayToSort = [];
refreshNumberArray(5);

// const color =

let barChartData = {
  labels: arrayToSort,
  datasets: [
    {
      label: "Dataset 1",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
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

  let timer = true;
  const flipTimer = () => (timer = !timer);
  const restartTimeout = () => {
    setTimeout(flipTimer, 500);
  };

  const interval = () => {
    setInterval(() => {
      if (!bubbleSort.swapPairs) {
        // need to stop interval timer here
        clearInterval(interval);
        return "hi";
      }
      if (timer) {
        console.log(bubbleSort.swapPairs[0]);
        timer = false;
        bubbleSort.swapPairs.shift(bubbleSort.swapPairs[0]);
        restartTimeout();
      }
    }, 200);
  };
  interval();
};

const swapPairOnChart = (index1, index2) => {
  console.log("index1:", index1);
  console.log("index2:", index2);
  highlightBarColor(index1, index2);
  let temp = myChart.data.datasets[0].data[index1];
  console.log("myChart.data.datasets[0].data:", myChart.data.datasets[0].data);
  myChart.data.datasets[0].data[index1] = myChart.data.datasets[0].data[index2];
  myChart.data.datasets[0].data[index2] = temp;

  updateChart();

  revertBarColor(index1, index2);

  // [array[index1], array[index2]] = [array[index2], array[index1]];
  // myChart.data.datasets[0].data[index2] = exampleArray[index1];
  // updateChart();
};

// bubbleSort.swapPairs.forEach((pair) => {
//   console.log(pair[0], pair[1]);
//   setTimeout(swapPairOnChart(pair[0], pair[1]), 2000);
//   // swapPairOnChart(pair[0], pair[1]);
// });
displayBubbleAlgorithm();

// const highlightBarColor = (index1, index2) => {
//   const swapBarColor = "rgba(24, 23, 108, 0.2)";
//   colorArray[index1] = swapBarColor;
//   colorArray[index2] = swapBarColor;
//   myChart.data.datasets[0].backgroundColor = colorArray;
// };

// const revertBarColor = (index1, index2) => {
//   const regularBarColor = "rgba(255, 99, 132, 0.2)";
//   colorArray[index1] = regularBarColor;
//   colorArray[index2] = regularBarColor;
//   myChart.data.datasets[0].backgroundColor = colorArray;
// };

// const sort = new Sort(exampleArray);

// const displayBubbleAlgorithm = () => {
//   sort.sort();
//   sort.swapPairs.forEach((pair) => {
//     console.log(pair[0], pair[1]);
//     setTimeout(swapPairOnChart(pair[0], pair[1]), 2000);
//     // swapPairOnChart(pair[0], pair[1]);
//   });
// };

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
