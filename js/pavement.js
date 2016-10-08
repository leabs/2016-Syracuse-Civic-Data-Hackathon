const RATING2 = document.getElementById('pieChart');

let myPieChart = new Chart(RATING2,{
    type: 'pie',
    data: {
    labels: [
        '3 < " asphalt, no base',
        'Full depth asphalt no base',
        '3 + "asphalt over base'
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
