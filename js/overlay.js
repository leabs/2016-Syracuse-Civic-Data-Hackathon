const OVERLAY = document.getElementById('overlay');

let ratingChart4 = new Chart(OVERLAY, {
  type: 'line',
  data: {
    labels: [
"1990s",
"2000s",
"2010s"],
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
            label: "Year of Last Overlay",
            backgroundColor: [


                'rgba(75,192,192,0.4)',



            ],
            borderColor: [


                'rgba(255, 106, 86, 1)'



            ],
            borderWidth: 1,
            data: [
1110,
1869,
285],
        }
    ]
}
});
