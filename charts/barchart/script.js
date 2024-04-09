var options = {
  series: [
    {
      name: "Overall Performance",
      data: [27, 29, 4, 3, 2],
    },
  ],
  chart: {
    height: 180,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "35%", // Adjust bar width here
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false, // Disable grid lines
  },
  xaxis: {
    categories: ["Fantastic +", "Fantastic", "Great", "Fair", "Poor"],
    axisBorder: {
      show: false, // Disable x-axis line
    },
    axisTicks: {
      show: false, // Disable x-axis ticks
    },
    labels: {
      show: false, // Show x-axis labels
    },
  },
  yaxis: {
    labels: {
      show: false, // Hide y-axis labels
    },
    axisBorder: {
      show: false, // Disable y-axis line
    },
    axisTicks: {
      show: false, // Disable y-axis ticks
    },
  },
  fill: {
    colors: ["#008FFB"],
    opacity: 1,
  },
  tooltip: {
    enabled: true, // Disable tooltips
  },
  legend: {
    show: false,
  },
};

// Initialize the chart
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
