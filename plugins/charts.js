// =====================================================================================================
// Elements ============================================================================================
// =====================================================================================================

const trafficCanvas = document.getElementById("traffic-chart");
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart')
const liCharts = document.getElementById('chartDataDisplay');
const liAll = document.querySelectorAll('#chartDataDisplay li');

// DATA FOR TRAFFIC CHART ==============================================================================
// DATA FOR TRAFFIC CHART ==============================================================================
// DATA FOR TRAFFIC CHART ==============================================================================

Chart.defaults.global.defaultFontSize = 12

let trafficDataHourly = {
    labels: ['0-6', '6-12', '12-18', '18-24'],
    datasets: [{
        data: [56, 46, 363, 44],
        backgroundColor: 'rgba(116, 119, 191, .2)',
        borderWidth: 1,
        borderColor: 'rgba(116, 119, 191, 1)',
        fill: 'start',
        lineTension: 0,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointBorderColor: 'rgba(116, 119, 191, 1)',
        pointRadius: 4,
    }, ]
}
let trafficDataDaily = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [{
        data: [22, 50, 100, 100, 150, 10, 12],
        backgroundColor: 'rgba(116, 119, 191, .2)',
        borderWidth: 1,
        borderColor: 'rgba(116, 119, 191, 1)',
        fill: 'start',
        lineTension: 0,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointBorderColor: 'rgba(116, 119, 191, 1)',
        pointRadius: 4,
    }]
}

let trafficDataWeekly = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .2)',
        borderWidth: 1,
        borderColor: 'rgba(116, 119, 191, 1)',
        fill: 'start',
        lineTension: 0,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointBorderColor: 'rgba(116, 119, 191, 1)',
        pointRadius: 4,
    }]
}

let trafficDataMonthly = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [{
        data: [33, 12350, 10010, 20200, 15040, 13750, 12520, 18250, 22050, 15000, 25000, 200],
        backgroundColor: 'rgba(116, 119, 191, .2)',
        borderWidth: 1,
        borderColor: 'rgba(116, 119, 191, 1)',
        fill: 'start',
        lineTension: 0,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointBorderColor: 'rgba(116, 119, 191, 1)',
        pointRadius: 4,
    }]
}

let trafficOptions = {
    aspectRatio: 3,
    animation: {
        duration: 0
    },
    legend: {
        display: false
    },
    scales: {

        yAxes: [{
            ticks: {
                beginAtZero: true,
                // stepSize: 500,
                fontSize: 10,
                padding: 10,
            },
            gridLines: {
                tickMarkLength: 0
            }
        }],
        xAxes: [{
            ticks: {
                padding: 15,
                autoSkip: true,
                beginAtZero: true,
            },
            gridLines: {
                tickMarkLength: 0
            }
        }],

    }
};

// =====================================================================================================
// TRAFFIC CHART =======================================================================================
// =====================================================================================================
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficDataHourly,
    options: trafficOptions,
});


const renderChart = (data, e) => {
    trafficChart.destroy();
    trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: data,
        options: trafficOptions,
    });
    e.target.classList.add('active')
}

liCharts.addEventListener('click', (e) => {
    liAll.forEach(li => {
        li.classList.remove('active')
    })
    if (e.target.textContent == 'Hourly') {
        renderChart(trafficDataHourly, e)
    } else if (e.target.textContent == 'Daily') {
        renderChart(trafficDataDaily, e)
    } else if (e.target.textContent == 'Weekly') {
        renderChart(trafficDataWeekly, e)
    } else if (e.target.textContent == 'Monthly') {
        renderChart(trafficDataMonthly, e)
    }
})
//  DAILY CANVAS

const dailyData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
}



const dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// DOUGHNUT CANVAS

const mobileData = {
    labels: ['Desktop', 'Tablet', "Phones"],
    datasets: [{
        label: '# pf Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
}

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};

const mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});