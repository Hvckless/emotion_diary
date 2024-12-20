const Utils = {
  months: function({
      count
  }) {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return months.slice(0, count);
  },
  weeks: function({
      count
  }) {
      const weeks = ['월', '화', '수', '목', '금', '토', '일'];
      return weeks.slice(0, count);
  },
  daily: function({
      count
  }) {
      const hours = ['00:00'];
  },
  numbers: function({
      count,
      min,
      max
  }) {
      const result = [];
      for (let i = 0; i < count; i++) {
          result.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }
      return result;
  },
  rand: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  randNoFloor: function(min, max) {
      return (Math.random() * (max - min + 1)) + min;
  },
  CHART_COLORS: {
      red: 'rgb(255, 99, 132)',
      blue: 'rgb(54, 162, 235)',
      green: 'rgb(75, 192, 192)',
      yellow: 'rgb(255, 159, 64)',
      orange: 'rgb(255, 99, 132)',
      emerald: 'rgb(75, 192, 192)',
  },
  namedColor: function(index) {
      const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
      return this.CHART_COLORS[colors[index % colors.length]];
  },
  transparentize: function(color, opacity) {
      const rgba = color.match(/^rgb\((\d+), (\d+), (\d+)\)$/);
      return `rgba(${rgba[1]}, ${rgba[2]}, ${rgba[3]}, ${opacity})`;
  },
  calcValue: function() {
      let heros = myChart.data.datasets[0].data;
      let total = 0;
      for (let i = 0; i < heros.length; i++) {
          total = total + parseInt(heros[i]);
      }

      console.log(`총합량 : ${total} / 평균값 : ${total/heros.length}`);
  },
  /**
   * 
   * @param {int} mode 0~1
   * @see ChartMode
   */
  switchChartMode: function(mode){
    ChartMode.MODE = mode;

  }
};

const ChartMode = {
  MODE : 1,
  DAILY: 0,
  WEEKLY: 1,
}

const DATA_COUNT = 7;
const NUMBER_CFG = {
  count: DATA_COUNT,
  min: 0,
  max: 6
};


const ctx = document.getElementById('myChart').getContext('2d');
const labels = Utils.weeks({
  count: 7
});

const YLabels = ['나쁨', '우울함', '피곤함', '특별할 것 없음', '다소 좋음', '기대됨', '매우 좋음', '　'];
const Color = [
  ["rgb(178, 34, 34)", "rgb(0, 0, 0)"],
  ["rgb(30, 144, 255)", "rgb(0, 0, 0)"],
  ["rgb(128, 128, 128)", "rgb(64, 64, 64)"],
  ["rgb(211, 211, 211)", "rgb(105, 105, 105)"],
  ["rgb(144, 238, 144)", "rgb(0, 100, 0)"],
  ["rgb(255, 165, 0)", "rgb(255, 69, 0)"],
  ["rgb(255, 215, 0)", "rgb(218, 165, 32)"]
];


//let hello = 0 == ChartMode.DAILY ? "GOO" : "KO";


let datasets = [{
  label: ChartMode.MODE == ChartMode.WEEKLY ? 'Dataset 1' : 'Time-based Dataset',
  data: null, //Utils.numbers(NUMBER_CFG)
  borderColor: ChartMode.MODE == ChartMode.WEEKLY ? Utils.CHART_COLORS.red : Utils.CHART_COLORS.emerald,
  backgroundColor: Utils.transparentize((ChartMode.MODE == ChartMode.WEEKLY ? Utils.CHART_COLORS.red : Utils.CHART_COLORS.emerald), 0.5),
}, ];
const data = {
  labels: ChartMode.MODE == ChartMode.WEEKLY ? labels : null,
  datasets: datasets
};
const config = {
  type: 'line',
  data: data,
  options: {
      responsive: true,
      plugins: {
          legend: {
              display: false
              //position: 'top',
          },
          title: {
              display: false,
              text: 'Chart.js Line ChartA'
          },
          tooltip: {
              callbacks: {
                  title: function(context) {
                      return context[0].label + (ChartMode.MODE == ChartMode.WEEKLY ? "요일" : "");
                  },
                  label: function(context) {
                      return YLabels[parseInt(context.parsed.y)];
                  },
                  labelColor: function(context) {
                      const color_define = Color[Math.floor(context.parsed.y)];
                      return {
                          borderColor: color_define[1],
                          backgroundColor: color_define[0],
                          borderWidth: 5,
                          borderRadius: 5,
                      };
                  },
              }
          }
      },
      interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false,
      },
      scales: {
          y: {
              min: NUMBER_CFG.min,
              max: NUMBER_CFG.max + 1,
              ticks: {
                  stepSize: 1,
                  maxTicksLimit: NUMBER_CFG.max + 2,
                  callback: function(value, index, ticks) {
                      const labels = YLabels;
                      return labels[value] || value;
                  },
				  display: flase,
              }
          },
          x: ChartMode.MODE == ChartMode.WEEKLY ? {} : {
            type: 'time',
            time: {
              unit: 'hour',
              tooltipFormat: 'yyyy-MM-dd HH:mm:ss',
            },
            ticks: {
              stepSize: 3
            },
            min: new Date(Date.now() - 24 * 60 * 60 * 1000),
            max: new Date(Date.now() + 1 * 60 * 60 * 1000),
          },
      }
  },
};


const myChart = new Chart(ctx, config);

const actions = [{
      name: 'Randomize',
      handler(chart) {
          chart.data.datasets.forEach(dataset => {
              dataset.data = Utils.numbers({
                  count: chart.data.labels.length,
                  min: -100,
                  max: 100
              });
          });
          chart.update();
      }
  },
  {
      name: 'Add Dataset',
      handler(chart) {
          const data = chart.data;
          const dsColor = Utils.namedColor(chart.data.datasets.length);
          const newDataset = {
              label: 'Dataset ' + (data.datasets.length + 1),
              backgroundColor: Utils.transparentize(dsColor, 0.5),
              borderColor: dsColor,
              data: Utils.numbers({
                  count: data.labels.length,
                  min: -100,
                  max: 100
              }),
          };
          chart.data.datasets.push(newDataset);
          chart.update();
      }
  },
  {
      name: 'Add Data',
      handler(chart) {
          const data = chart.data;
          if (data.datasets.length > 0) {
              data.labels = Utils.weeks({
                  count: data.labels.length + 1
              });

              for (let index = 0; index < data.datasets.length; ++index) {
                  //data.datasets[index].data.push(Utils.rand(NUMBER_CFG.min, NUMBER_CFG.max));
                  data.datasets[index].data.push(Utils.randNoFloor(NUMBER_CFG.min, NUMBER_CFG.max));
              }

              chart.update();
          }
      }
  },
  {
      name: 'Remove Dataset',
      handler(chart) {
          chart.data.datasets.pop();
          chart.update();
      }
  },
  {
      name: 'Remove Data',
      handler(chart) {
          console.log(chart.data);
          chart.data.labels.splice(-1, 1); // remove the label first

          chart.data.datasets.forEach(dataset => {
              dataset.data.pop();
          });

          chart.update();
      }
  },
  {
      name: 'Remove Data without Label',
      handler(chart) {
          chart.data.datasets.forEach(dataset => {
            dataset.data.pop();
          });

        chart.update();
      }
  },
  {
    name: 'Add Time Data',
    handler(time, value, chart) {
      chart.data.datasets[0].data.push({ x: time, y: value });
      chart.update();
    }
  },
  {
    name: 'Add Weekly Data',
    handler(value, chart){
        const data = chart.data;
        if (data.datasets.length > 0) {
            data.labels = Utils.weeks({
                count: data.labels.length + 1
            });

            for (let index = 0; index < data.datasets.length; ++index) {
                //data.datasets[index].data.push(Utils.rand(NUMBER_CFG.min, NUMBER_CFG.max));
                data.datasets[index].data.push(value);
            }

            chart.update();
        }
    }
  }
];

// 버튼 이벤트 처리
// document.getElementById('randomize').addEventListener('click', () => actions[0].handler(myChart));
// document.getElementById('addDataset').addEventListener('click', () => actions[1].handler(myChart));
// document.getElementById('addData').addEventListener('click', () => actions[2].handler(myChart));
// document.getElementById('removeDataset').addEventListener('click', () => actions[3].handler(myChart));
// document.getElementById('removeData').addEventListener('click', () => actions[4].handler(myChart));