const trafficCanvas = document.getElementById("traffic-chart");
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart')

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');


Chart.defaults.global.defaultFontSize = 12
// FORM


send.addEventListener('click', () => {
    if (!user.value && !message.value) {
        alert('Please fill out user and message fields before sending')
    } else if (!user.value) {
        alert('Please fill out user field before sending')
    } else if (!message.value) {
        alert('Please fill out message field before sending')
    } else {
        alert(`Message successfully send to: ${user.value}`)
    }
});

// DATA FOR TRAFFIC CHART


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
                stepSize: 500,
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


//  TRAFFIC CHART
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficDataWeekly,
    options: trafficOptions,
});

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