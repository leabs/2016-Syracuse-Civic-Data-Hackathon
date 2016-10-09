const OVERLAY = document.getElementById('overlay');

let ratingChart4 = new Chart(OVERLAY, {
  type: 'bar',
  data: {
    labels: [
"2001",
"2002",
"2003",
"2004",
"2005",
"2006",
"2007",
"2008",
"2009",
"2010",
"2011",
"2012",
"2013",
"2014",
"2015"],
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


                'rgba(75,192,0,0.4)',
                'rgba(75,192,20,0.4)',
                'rgba(75,192,40,0.4)',
                'rgba(75,192,60,0.4)',
                'rgba(75,192,80,0.4)',
                'rgba(75,192,100,0.4)',
                'rgba(75,192,120,0.4)',
                'rgba(75,192,140,0.4)',
                'rgba(75,192,160,0.4)',
                'rgba(75,192,180,0.4)',
                'rgba(75,192,200,0.4)',
                'rgba(75,192,220,0.4)',
                'rgba(75,192,240,0.4)',
                'rgba(75,192,255,0.4)',
                'rgba(75,212,255,0.4)',
                'rgba(75,232,255,0.4)',




            ],
            borderColor: [


                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',
                'rgba(155, 106, 86, 1)',



            ],
            borderWidth: 1,
            data: [
              265,
              347,
              186,
              439,
              253,
              77,
              37,
              61,
              51,
              24,
              88,
              35,
              78,
              35,
              25],
        }
    ]
}
});
