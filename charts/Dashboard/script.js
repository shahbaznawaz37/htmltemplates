google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  scoreChart();
  customerFeedback();
  reliability();
  wstRoutes(); //
}

function scoreChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Week");
  data.addColumn("number", "Sales");
  data.addColumn({ type: "string", role: "annotation" });
  data.addColumn({ type: "string", role: "annotation" }); // Annotation role column

  data.addRows([
    ["W06", 3, "W06", "Great"],
    ["W07", 4, "W07", "Fantastic"],
    ["W08", 5, "W08", "Fantastic +"],
    ["W09", 4, "W09", "Fantastic"],
    ["W10", 4, "W10", "Fantastic"],
  ]);

  var options = {
    title: "Company Performance",
    titleTextStyle: {
      fontSize: 16,
    },
    curveType: "function",
    legend: { position: "none" },
    vAxis: {
      textPosition: "none",
      gridlines: { color: "transparent" },
      minorGridlines: { color: "transparent" },
      baselineColor: "transparent",
      viewWindow: {
        min: 0,
        max: 6,
      },
    },
    hAxis: {
      textPosition: "none",
      gridlines: { color: "transparent" },
      minorGridlines: { color: "transparent" },
      baselineColor: "transparent",
    },
    chartArea: {
      left: 0,
      top: 30,
      width: "100%",
      height: "100%",
    },
    series: {
      0: {
        // Configures the first series.
        pointsVisible: true, // Make data points visible.
        pointSize: 5, // Size of the data points.
      },
    },
    tooltip: { trigger: "none" }, // Disables tooltips
    annotations: {
      alwaysOutside: false,
      textStyle: {
        fontSize: 14,
        color: "#000",
      },
      stem: {
        length: 4, // Attempt to minimize the stem length. May not completely remove it.
      },
    },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("score_chart")
  );

  chart.draw(data, options);
}

function customerFeedback() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Week");
  data.addColumn("number", "Sales");
  data.addColumn({ type: "string", role: "annotation" });
  data.addColumn({ type: "string", role: "annotation" }); // Annotation role column

  data.addRows([
    ["W06", 0.961, "W06", "96.1%"],
    ["W07", 0.941, "W07", "94.1%"],
    ["W08", 0.931, "W08", "93.1%"],
    ["W09", 0.941, "W09", "94.1%"],
    ["W10", 0.921, "W10", "92.1%"],
  ]);

  var options = {
    title: "Customer Feedback",
    titleTextStyle: {
      fontSize: 16,
    },
    curveType: "function",
    legend: { position: "none" },
    vAxis: {
      textPosition: "none",
      gridlines: { color: "transparent" },
      minorGridlines: { color: "transparent" },
      baselineColor: "transparent",
    },
    hAxis: {
      textPosition: "none",
      gridlines: { color: "transparent" },
      minorGridlines: { color: "transparent" },
      baselineColor: "transparent",
    },
    chartArea: {
      left: 0,
      top: 30,
      bottom: 50,
      width: "100%",
      height: "100%",
    },
    series: {
      0: {
        // Configures the first series.
        pointsVisible: true, // Make data points visible.
        pointSize: 5, // Size of the data points.
      },
    },
    tooltip: { trigger: "none" }, // Disables tooltips
    annotations: {
      alwaysOutside: false,
      textStyle: {
        fontSize: 14,
        color: "#000",
      },
      stem: {
        length: 4, // Attempt to minimize the stem length. May not completely remove it.
      },
    },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("customer_chart")
  );

  chart.draw(data, options);
}

function reliability() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Week");
  data.addColumn("number", "Sales");
  data.addColumn({ type: "string", role: "annotation" });
  data.addColumn({ type: "string", role: "annotation" }); // Annotation role column

  data.addRows([
    ["W06", 0.961, "W06", "96.1%"],
    ["W07", 0.941, "W07", "94.1%"],
    ["W08", 0.931, "W08", "93.1%"],
    ["W09", 0.941, "W09", "94.1%"],
    ["W10", 0.921, "W10", "92.1%"],
  ]);

  var options = {
    title: "Reliability Score",
    titleTextStyle: {
      fontSize: 16,
    },
    curveType: "function",
    legend: { position: "none" },
    vAxis: {
      textPosition: "none",
      gridlines: { color: "transparent" },
      minorGridlines: { color: "transparent" },
      baselineColor: "transparent",
    },
    hAxis: {
      textPosition: "none",
      gridlines: { color: "transparent" },
      minorGridlines: { color: "transparent" },
      baselineColor: "transparent",
    },
    chartArea: {
      left: 0,
      top: 30,
      bottom: 50,
      width: "100%",
      height: "100%",
    },
    series: {
      0: {
        // Configures the first series.
        pointsVisible: true, // Make data points visible.
        pointSize: 5, // Size of the data points.
      },
    },
    tooltip: { trigger: "none" }, // Disables tooltips
    annotations: {
      alwaysOutside: false,
      textStyle: {
        fontSize: 14,
        color: "#000",
      },
      stem: {
        length: 4, // Attempt to minimize the stem length. May not completely remove it.
      },
    },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("reliability_chart")
  );

  chart.draw(data, options);
}

// WST Route Counts (apexchart.com)

var options = {
  series: [
    {
      name: "WST Routes",
      data: [106, 115, 120, 107, 109, 121],
    },
  ],
  chart: {
    height: 200,
    type: "area",
    toolbar: {
      show: false, // This will hide the toolbar buttons
    },
  },
  dataLabels: {
    enabled: true,
    textAnchor: "end",
    offsetX: -2,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    categories: ["W06", "W07", "W08", "W09", "W10", "W11"],
    labels: {
      show: false, // Hide X-axis labels
    },
    axisBorder: {
      show: false, // Hide X-axis border
    },
    axisTicks: {
      show: false, // Hide X-axis ticks
    },
  },
  yaxis: {
    show: false, // Hide the entire Y-axis including labels, ticks, and line
    min: 70,
  },
  grid: {
    show: false, // This will remove both x-axis and y-axis grid lines
  },
  tooltip: {
    x: {
      show: true,
    },
  },
  title: {
    // Adding chart title configuration
    text: "Weekly WST Routes",
    offsetX: 20,
    style: {
      fontSize: "14px",
      fontWeight: "bold",
      fontFamily: undefined,
      color: "#263238",
    },
  },
};

var chart = new ApexCharts(
  document.querySelector("#wst_routes_chart"),
  options
);
chart.render();
