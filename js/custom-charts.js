/* Activity Chart */

var chartactivity = document.getElementById('SimpleChart').getContext("2d");

var gradientStroke = chartactivity.createLinearGradient(200, 0, 100, 0);
gradientStroke.addColorStop(0, "#D946EF66");
gradientStroke.addColorStop(1, "#9333EA66");  

var gradientFill = chartactivity.createLinearGradient(0, 0, 0, 180);
gradientFill.addColorStop(0, "#D946EF66");
gradientFill.addColorStop(1, "#9333EA66");



/* Reports Chart */

var chartreports = document.getElementById('SimpleChart').getContext("2d");

var SimpleChart = new Chart(chartreports, {
    type: 'line',
    data: {
        labels: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
        datasets: [{
            label: "Reports",
            borderColor: " #22D3EE",
            pointBorderColor: " #22D3EE",
            pointBackgroundColor: "rgba(255, 255, 255, 1)",
            pointHoverBackgroundColor: "rgba(128, 182, 244, 1)",
            pointHoverBorderColor: gradientStroke,
            pointBorderWidth: 2,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            fill: true,
			backgroundColor: gradientFill,
            borderWidth: 2,
            data: [1, 10, 2, 5, 1, 7, 0]
        }
		]
    },
    options: {          
        legend: {
            position: "top",
            labels: {
                boxWidth: 15,
				padding: 5
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false
                },
                gridLines: {
                    drawTicks: false,
                    display: false,
					drawBorder: false
                }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent",
					display: false,
					drawBorder: false
                },
                ticks: {
                    padding: 0,
                    fontColor: "rgba(255,255,255,0.8)",
                    fontStyle: "bold"
                }
            }]
        }
    }
});

