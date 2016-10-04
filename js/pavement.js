const RATING2 = document.getElementById('pieChart');

let myPieChart = new Chart(RATING2,{
    type: 'pie',
    data: {
    labels: [
        "3 or less inches of asphalt, no base",
        "Full depth asphalt (7+ inches) no base",
        "3+ inches asphalt over concrete"
    ],
    datasets: [
        {
            data: [1202, 96, 1777],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
}
});
