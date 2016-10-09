const POTHOLE = document.getElementById('potholeChart');

let ratingChart5 = new Chart(POTHOLE, {
  type: 'bar',
  data: {
    labels: [
"Apr",
"May",
"June",
"July",
"Aug",
"Sept",
],
    datasets: [
        {
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
            label: "Monthly Pothole Fills 2016",
            backgroundColor: [


                'rgba(145,232,00,0.4)',
                'rgba(165,232,40,0.4)',
                'rgba(185,232,80,0.4)',
                'rgba(205,232,120,0.4)',
                'rgba(225,232,160,0.4)',
                'rgba(245,232,200,0.4)',





            ],
            borderColor: [


                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',




            ],
            borderWidth: 1,
            data: [
              2205,
2682,
1164,
265,
833,
242
              ],
        }
    ]
}
});
