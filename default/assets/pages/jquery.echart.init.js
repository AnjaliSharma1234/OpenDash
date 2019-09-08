/* World map */
var geoCoordMap = {
  Amsterdam: [4.895168, 52.370216],
  Athens: [-83.357567, 33.951935],
  Auckland: [174.763332, -36.84846],
  Bangkok: [100.501765, 13.756331],
  Barcelona: [2.173403, 41.385064],
  Beijing: [116.407395, 39.904211],
  Berlin: [13.404954, 52.520007],
  Bogotá: [-74.072092, 4.710989],
  Bratislava: [17.107748, 48.148596],
  Brussels: [4.35171, 50.85034],
  Budapest: [19.040235, 47.497912],
  "Buenos Aires": [-58.381559, -34.603684],
  Bucharest: [26.102538, 44.426767],
  Caracas: [-66.903606, 10.480594],
  Chicago: [-87.629798, 41.878114],
  Delhi: [77.209021, 28.613939],
  Doha: [51.53104, 25.285447],
  Dubai: [55.270783, 25.204849]
};

var rawData = [
  [
    "Amsterdam",
    101.6,
    90.1,
    77.1,
    69.1,
    78.3,
    69.4,
    1755,
    24,
    15,
    7,
    9,
    44,
    720,
    1.651,
    1.59,
    2.205,
    0.974,
    0.93,
    2.477,
    67.4,
    364,
    690,
    1113,
    4960,
    3.19,
    30.05,
    16.34,
    24000,
    689,
    1.8,
    50,
    200,
    390,
    690,
    1040,
    2331,
    1580,
    17.5,
    25.5,
    30,
    48400,
    39200,
    26300,
    30200,
    55400,
    39800,
    104400,
    58700,
    64600,
    49200,
    40300,
    31100,
    40300,
    27700,
    66700,
    66700
  ],
  [
    "Athens",
    62.6,
    60.5,
    66.2,
    58.2,
    41.4,
    40,
    1822,
    22,
    29,
    13,
    25,
    86,
    590,
    3.314,
    2.991,
    4.236,
    1.349,
    4.701,
    3.1,
    56.8,
    390,
    580,
    880,
    4620,
    1.81,
    13.81,
    5.5,
    24900,
    389,
    2.02,
    54,
    100,
    210,
    630,
    1110,
    1489,
    647,
    10.1,
    13.5,
    24,
    26200,
    23300,
    18500,
    17100,
    24500,
    24200,
    57200,
    44000,
    34100,
    30700,
    21000,
    17700,
    15400,
    16300,
    34400,
    34400
  ],
  [
    "Auckland",
    77.9,
    82.9,
    76.7,
    67.8,
    59.8,
    63.5,
    1852,
    20,
    15,
    16,
    7,
    51,
    580,
    3.362,
    2.377,
    3.959,
    2.116,
    2.303,
    4.027,
    66.1,
    496,
    630,
    1023,
    4450,
    2.57,
    40.86,
    13.62,
    23900,
    226,
    1.33,
    45,
    190,
    280,
    560,
    670,
    1644,
    1333,
    16,
    19.5,
    17,
    35700,
    31500,
    36500,
    28500,
    41800,
    31100,
    61300,
    55000,
    56300,
    37300,
    33400,
    26900,
    27200,
    27500,
    64900,
    64900
  ],
  [
    "Bangkok",
    26.4,
    31.4,
    55.4,
    48.2,
    14.6,
    17.4,
    2312,
    7,
    36,
    25,
    20,
    165,
    550,
    4.637,
    2.242,
    5.468,
    -0.845,
    3.272,
    3.807,
    47,
    422,
    440,
    414,
    4370,
    0.75,
    3.47,
    2.47,
    29600,
    103,
    1,
    56,
    90,
    320,
    400,
    600,
    1463,
    932,
    4.4,
    4.8,
    5,
    8300,
    8400,
    11100,
    3000,
    10900,
    10900,
    32200,
    22400,
    24600,
    14500,
    7800,
    6000,
    5800,
    6500,
    19400,
    19400
  ],
  [
    "Barcelona",
    79.7,
    78.6,
    74.7,
    65.6,
    59.6,
    58.7,
    1760,
    29,
    18,
    11,
    6,
    52,
    740,
    3.563,
    2.844,
    4.13,
    -0.238,
    2.043,
    3.052,
    64,
    393,
    750,
    984,
    5000,
    2.59,
    41.96,
    10.36,
    26900,
    177,
    1.77,
    51,
    170,
    330,
    580,
    1110,
    1269,
    1087,
    14.8,
    19.4,
    23,
    41300,
    34100,
    29100,
    29800,
    31500,
    32100,
    40800,
    67000,
    43100,
    38900,
    28900,
    25500,
    25000,
    28000,
    58300,
    58300
  ],
  [
    "Beijing",
    28.2,
    29.9,
    60.3,
    51.8,
    17,
    18,
    1979,
    9,
    34,
    27,
    16,
    184,
    730,
    1.467,
    4.767,
    5.852,
    -0.683,
    3.325,
    5.417,
    50.6,
    463,
    420,
    310,
    4370,
    0.26,
    14.25,
    3.64,
    23800,
    67,
    1.24,
    41,
    160,
    400,
    660,
    700,
    1554,
    660,
    4.5,
    5.6,
    17,
    11400,
    7000,
    8500,
    7600,
    6200,
    11900,
    13300,
    11700,
    10700,
    18300,
    17100,
    8900,
    5400,
    7600,
    19800,
    19800
  ],
  [
    "Berlin",
    109.7,
    97.1,
    72.2,
    64.1,
    79.2,
    70.1,
    1742,
    28,
    16,
    11,
    9,
    56,
    720,
    1.784,
    2.276,
    2.754,
    0.234,
    1.15,
    2.483,
    62.5,
    389,
    530,
    841,
    4670,
    2.98,
    80.3,
    10.79,
    35600,
    246,
    2.1,
    34,
    120,
    230,
    570,
    710,
    2395,
    1178,
    17.7,
    25.8,
    30,
    56900,
    38600,
    35500,
    28500,
    47400,
    57600,
    84200,
    74500,
    72100,
    51700,
    38100,
    28200,
    32000,
    28100,
    81700,
    81700
  ],
  [
    "Bogotá",
    41.4,
    40.7,
    53.1,
    47,
    22.3,
    22,
    1981,
    15,
    52,
    34,
    17,
    142,
    540,
    4.296,
    5.544,
    6.998,
    4.202,
    2.27,
    3.416,
    45.8,
    363,
    410,
    634,
    4170,
    0.84,
    null,
    2.81,
    20200,
    303,
    1.24,
    25,
    140,
    300,
    310,
    440,
    1554,
    841,
    5.5,
    7.3,
    12,
    11100,
    7600,
    8400,
    7000,
    7300,
    11900,
    27600,
    65800,
    19700,
    14600,
    12300,
    7400,
    4100,
    5300,
    31900,
    31900
  ],
  [
    "Bratislava",
    51.3,
    50.7,
    53.9,
    47.1,
    27.7,
    27.3,
    1884,
    23,
    31,
    20,
    19,
    126,
    490,
    4.264,
    1.89,
    3.935,
    0.925,
    0.697,
    4.079,
    45.9,
    344,
    330,
    414,
    4740,
    1.08,
    22.97,
    5.61,
    26700,
    65,
    1.93,
    28,
    120,
    230,
    250,
    340,
    1683,
    841,
    6.9,
    9,
    22,
    11300,
    14100,
    11300,
    10000,
    16300,
    18900,
    20300,
    43300,
    22800,
    15800,
    16100,
    9600,
    12600,
    16400,
    48300,
    48300
  ],
  [
    "Brussels",
    107.5,
    78.5,
    75.8,
    68.8,
    81.5,
    59.5,
    1729,
    20,
    19,
    10,
    11,
    54,
    730,
    2.337,
    1.814,
    4.493,
    -0.009,
    2.332,
    3.469,
    67.1,
    433,
    690,
    1243,
    4580,
    2.42,
    26.03,
    15.71,
    23200,
    500,
    1.91,
    63,
    130,
    280,
    630,
    800,
    2538,
    1839,
    15,
    26.5,
    42,
    44000,
    36500,
    38200,
    34200,
    52100,
    43600,
    97000,
    73700,
    67100,
    56900,
    42300,
    35200,
    33500,
    36000,
    78200,
    78200
  ],
  [
    "Budapest",
    35.5,
    32,
    56.7,
    50.4,
    20.1,
    18.1,
    1912,
    22,
    49,
    13,
    26,
    206,
    740,
    3.878,
    7.934,
    6.067,
    4.209,
    4.85,
    3.9,
    49.1,
    340,
    390,
    556,
    5270,
    1.43,
    15.96,
    7.64,
    22600,
    76,
    1.95,
    28,
    130,
    410,
    580,
    920,
    2123,
    1165,
    4.6,
    6.6,
    28,
    8900,
    11500,
    9300,
    7000,
    10900,
    16800,
    25600,
    21100,
    23300,
    21400,
    11100,
    8200,
    6500,
    8900,
    29300,
    29300
  ],
  [
    "Buenos Aires",
    42.9,
    46.2,
    55,
    47.7,
    23.6,
    25.4,
    1830,
    13,
    45,
    12,
    16,
    187,
    620,
    10.898,
    8.83,
    8.585,
    6.27,
    10.461,
    9.775,
    46.5,
    310,
    380,
    401,
    5170,
    0.28,
    null,
    7.97,
    20200,
    307,
    1.27,
    25,
    160,
    280,
    400,
    660,
    1359,
    738,
    6.4,
    7.7,
    16,
    8700,
    16300,
    11900,
    10200,
    11400,
    15800,
    34300,
    17600,
    19200,
    17100,
    15800,
    14600,
    7500,
    10400,
    15400,
    15400
  ],
  [
    "Bucharest",
    37.1,
    34,
    39.8,
    34.8,
    14.8,
    13.5,
    1836,
    26,
    57,
    21,
    26,
    230,
    370,
    6.552,
    4.84,
    7.848,
    5.581,
    6.101,
    5.812,
    33.9,
    244,
    270,
    388,
    3830,
    0.75,
    9.43,
    3.17,
    11700,
    36,
    1.9,
    25,
    100,
    190,
    180,
    300,
    984,
    530,
    3.4,
    4.8,
    29,
    5600,
    7500,
    9500,
    7900,
    7400,
    14900,
    13900,
    22000,
    11400,
    8800,
    6000,
    8200,
    5800,
    5300,
    13200,
    13200
  ],
  [
    "Caracas",
    21.9,
    25.7,
    91.1,
    85.4,
    20,
    23.4,
    1878,
    17,
    80,
    59,
    13,
    272,
    830,
    13.654,
    18.703,
    30.37,
    27.081,
    28.187,
    26.09,
    83.3,
    689,
    690,
    2098,
    8460,
    0.35,
    null,
    11.65,
    49000,
    18,
    0.01,
    68,
    190,
    400,
    520,
    950,
    3820,
    2784,
    5.9,
    6.5,
    7,
    10500,
    5400,
    10900,
    6100,
    9700,
    25400,
    16800,
    30600,
    22800,
    15800,
    8400,
    9500,
    5400,
    6700,
    12400,
    12400
  ],
  [
    "Chicago",
    105.3,
    101.9,
    79.1,
    72.9,
    83.3,
    80.6,
    1853,
    12,
    11,
    15,
    9,
    32,
    540,
    3.222,
    2.86,
    3.798,
    -0.321,
    1.641,
    3.142,
    71.1,
    460,
    780,
    1398,
    4270,
    2.25,
    34.99,
    12.5,
    22100,
    95,
    1.11,
    38,
    200,
    270,
    740,
    1200,
    3535,
    2214,
    20.3,
    27.1,
    25,
    49300,
    52100,
    44000,
    49000,
    58500,
    48300,
    79300,
    88500,
    88200,
    40300,
    42600,
    23200,
    33800,
    38700,
    103500,
    103500
  ],
  [
    "Delhi",
    23,
    25,
    33.2,
    29.5,
    7.6,
    8.3,
    2264,
    13,
    65,
    15,
    40,
    370,
    370,
    6.177,
    6.372,
    8.349,
    10.882,
    11.99,
    8.628,
    28.8,
    208,
    210,
    466,
    4590,
    0.25,
    10.58,
    1.95,
    15300,
    93,
    0.77,
    18,
    100,
    250,
    260,
    410,
    867,
    556,
    2.1,
    2.5,
    11,
    4500,
    2500,
    1900,
    1300,
    4800,
    10200,
    13500,
    11100,
    9600,
    6700,
    5400,
    3000,
    1800,
    4000,
    14100,
    14100
  ],
  [
    "Doha",
    38.8,
    50.2,
    68.6,
    66.9,
    26.6,
    34.4,
    2165,
    25,
    20,
    12,
    15,
    82,
    690,
    11.828,
    13.764,
    15.049,
    -4.865,
    -2.433,
    2,
    65.3,
    355,
    870,
    1735,
    3790,
    1.14,
    null,
    4.12,
    17000,
    27,
    0.24,
    63,
    200,
    360,
    340,
    470,
    4869,
    3004,
    8.7,
    8.7,
    0,
    22300,
    10400,
    9800,
    4100,
    20600,
    13700,
    49500,
    47000,
    32900,
    27100,
    19800,
    10900,
    3200,
    11500,
    23100,
    23100
  ],
  [
    "Dubai",
    63.5,
    82,
    78.2,
    77.2,
    49.6,
    64.2,
    2095,
    24,
    11,
    10,
    14,
    46,
    1120,
    9.272,
    11.115,
    11.454,
    1.56,
    0.878,
    0.882,
    75.3,
    484,
    790,
    2447,
    4550,
    0.54,
    null,
    8.17,
    23100,
    94,
    1.01,
    95,
    200,
    680,
    1270,
    1450,
    4882,
    3483,
    16.2,
    16.2,
    0,
    35900,
    16300,
    14200,
    3600,
    38300,
    58100,
    116800,
    91400,
    64800,
    26200,
    22900,
    13600,
    9800,
    19600,
    80000,
    80000
  ]
];

function makeMapData(rawData) {
  var mapData = [];
  for (var i = 0; i < rawData.length; i++) {
    var geoCoord = geoCoordMap[rawData[i][0]];
    if (geoCoord) {
      mapData.push({
        name: rawData[i][0],
        value: geoCoord.concat(rawData[i].slice(1))
      });
    }
  }
  return mapData;
}
// based ready dom, initialize echarts instance
var chart = echarts.init(document.getElementById("world-map"));
option = {
  backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.4, [
    {
      offset: 0,
      color: "#4b5769"
    },
    {
      offset: 1,
      color: "#404a59"
    }
  ]),
  title: {
    text: "Prices and Earnings 2012",
    subtext: "data from macrofocus",
    sublink: "#",
    left: "center",
    top: 5,
    itemGap: 0,
    textStyle: {
      color: "#eee"
    },
    z: 200
  },
  tooltip: {
    trigger: "item",
    formatter: function(params) {
      var value = (params.value + "").split(".");
      value =
        value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") +
        "." +
        value[1];
      return params.seriesName + "<br/>" + params.name + " : " + value;
    }
  },
  toolbox: {
    show: true,
    left: "right",
    iconStyle: {
      normal: {
        borderColor: "#ddd"
      }
    },
    feature: {},
    z: 202
  },
  brush: {
    geoIndex: 0,
    brushLink: "all",
    inBrush: {
      opacity: 1,
      symbolSize: 14
    },
    outOfBrush: {
      color: "#000",
      opacity: 0.2
    },
    z: 10
  },
  geo: {
    map: "world",
    silent: true,
    label: {
      emphasis: {
        show: false,
        areaColor: "#eee"
      }
    },
    itemStyle: {
      normal: {
        borderWidth: 0.2,
        borderColor: "#404a59"
      }
    },
    top: "20%",
    left: "6%",
    right: "14%",
    bottom: "10%",
    roam: true
    // itemStyle: {
    //     normal: {
    //         areaColor: '#323c48',
    //         borderColor: '#111'
    //     },
    //     emphasis: {
    //         areaColor: '#2a333d'
    //     }
    // }
  },

  series: [
    {
      name: "Prices and Earnings 2012",
      type: "scatter",
      coordinateSystem: "geo",
      symbolSize: 8,
      data: makeMapData(rawData),
      activeOpacity: 1,
      label: {
        normal: {
          formatter: "{b}",
          position: "right",
          show: false
        },
        emphasis: {
          show: true
        }
      },
      symbolSize: 10,
      // symbolSize: function (data) {
      //     return Math.max(5, data[2] / 5);
      // },
      itemStyle: {
        normal: {
          borderColor: "#fff",
          color: "#577ceb"
        }
      }
    },
    {
      name: "parallel",
      type: "parallel",
      smooth: true,
      lineStyle: {
        normal: {
          color: "#577ceb",
          width: 0.5,
          opacity: 0.6
        }
      },
      z: 100,
      blendMode: "lighter",
      data: rawData
    }
  ]
};

chart.setOption(option);

/* area charts */
var stacked_area_chart = echarts.init(
  document.getElementById("stacked-area-charts")
);
area_option = {
  title: {
    text: "Area Chart"
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985"
      }
    }
  },
  legend: {
    data: ["Line-1", "Line-2", "Line-3", "Line-4", "Line-5"]
  },
  toolbox: {
    feature: {
      saveAsImage: {
        title: "download",
        right: "20%"
      }
    }
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["X-1", "X-2", "X-3", "X-4", "X-5", "X-6", "X-7"]
    }
  ],
  yAxis: [
    {
      type: "value"
    }
  ],
  series: [
    {
      name: "Line-1",
      type: "line",
      stack: "总量",
      areaStyle: {},
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: "Line-2",
      type: "line",
      stack: "总量",
      areaStyle: {},
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: "Line-3",
      type: "line",
      stack: "总量",
      areaStyle: {},
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: "Line-4",
      type: "line",
      stack: "总量",
      areaStyle: { normal: {} },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: "Line-5",
      type: "line",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "top"
        }
      },
      areaStyle: { normal: {} },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};

stacked_area_chart.setOption(area_option);
