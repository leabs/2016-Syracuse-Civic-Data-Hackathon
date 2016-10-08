const RATING3 = document.getElementById('pieChart2');



let myPieChart2 = new Chart(RATING3,{
    type: 'pie',
    data: {
    labels: [
        "3 < inches asphalt, no base",
        "7+ inchesasphalt, no base",
        "3 > inches asphalt, concrete base"
    ],
    datasets: [
        {
            data: [1463, 133, 2572],
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
