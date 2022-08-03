var countDownDate = new Date(2022, 7, 10, 13, 12, 23);
var x = setInterval(function () {
    var datetimeNow = new Date().getTime();
    var distance = countDownDate - datetimeNow;

    if (distance > 0) {
        var dayTime = 1000 * 60 * 60 * 24;

        var days = Math.floor(distance / dayTime);

        document.getElementById("days").innerHTML = (days < 10) ? '0' + days : days;
    } else {
        clearInterval(x);
        document.getElementById("box-off").innerHTML = "مهلت تخفیف به پایان رسید";
    }
}, 1000);


//////////////////////////

function createChart(number, color, chart) {
    const chart1 = document.getElementById(chart),
    domString = `
    <p>${number}</p>
`;

    new Chart(chart1, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [number, 100 - number],
                    backgroundColor: [color],
                    borderWidth: 0,
                    borderRadius: 10
                }

            ]
            
        },
        options: {
            cutoutPercentage: 75,
            tooltips: {
                enabled: false
            }
        }
    });
}




function chart0(number) {

    createChart(number, '#0A65CD', 'chart1')
    
}

chart0(70);

///////////////////////////////

function createChart(number, color, chart) {
    const chartCanvas1 = document.getElementById(chart),
        domString = `
        <p>${number}</p>
    `;

    new Chart(chartCanvas1, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [number, 100 - number],
                    backgroundColor: [color],
                    borderWidth: 0,
                    borderRadius: 10
                }

            ]
        },
        options: {
            cutoutPercentage: 75,
            tooltips: {
                enabled: false
            }
        }
    });


}

function chart2(number) {
    if (number <= 30) createChart(number, '#F35242', 'chartCanvas1')
    else if (number <= 70) createChart(number, '#FFCE47', 'chartCanvas1')
    else if (number <= 100) createChart(number, '#10CCAE', 'chartCanvas1')
}
let valuetwo = 80;
chart2(valuetwo);

const elementtwo = document.querySelector('#valuetwo')
elementtwo.innerHTML=valuetwo;

////////////////////////////////

function createChart(number, color, chart) {
    const chartCanvas2 = document.getElementById(chart),
        domString = `
        <p>${number}</p>
    `;

    new Chart(chartCanvas2, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [number, 100 - number],
                    backgroundColor: [color],
                    borderWidth: 0,
                    borderRadius: 10
                }

            ]
        },
        options: {
            cutoutPercentage: 75,
            tooltips: {
                enabled: false
            }
        }
    });


}

function chart3(number) {
    if (number <= 30) createChart(number, '#F35242', 'chartCanvas2')
    else if (number <= 70) createChart(number, '#FFCE47', 'chartCanvas2')
    else if (number <= 100) createChart(number, '#10CCAE', 'chartCanvas2')
}
let valuethree = 80;
chart3(valuethree);

const elementthree = document.querySelector('#valuethree')
elementthree.innerHTML=valuethree;

///////////////////////////////

function createChart(number, color, chart) {
    const chartCanvas3 = document.getElementById(chart),
        domString = `
        <p>${number}</p>
    `;

    new Chart(chartCanvas3, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [number, 100 - number],
                    backgroundColor: [color],
                    borderWidth: 0,
                    borderRadius: 10
                }

            ]
        },
        options: {
            cutoutPercentage: 75,
            tooltips: {
                enabled: false
            }
        }
    });


}

function chart4(number) {
    if (number <= 30) createChart(number, '#F35242', 'chartCanvas3')
    else if (number <= 70) createChart(number, '#FFCE47', 'chartCanvas3')
    else if (number <= 100) createChart(number, '#10CCAE', 'chartCanvas3')
}
let valuefour = 20;
chart4(valuefour );

const elementfour = document.querySelector('#valuefour ')
elementfour.innerHTML=valuefour;

//////////////////////////////

function createChart(number, color, chart) {
    const chartCanvas4 = document.getElementById(chart),
        domString = `
        <p>${number}</p>
    `;

    new Chart(chartCanvas4, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [number, 100 - number],
                    backgroundColor: [color],
                    borderWidth: 0,
                    borderRadius: 10
                }

            ]
        },
        options: {
            cutoutPercentage: 75,
            tooltips: {
                enabled: false
            }
        }
    });


}

function chart5(number) {
    if (number <= 30) createChart(number, '#F35242', 'chartCanvas4')
    else if (number <= 70) createChart(number, '#FFCE47', 'chartCanvas4')
    else if (number <= 100) createChart(number, '#10CCAE', 'chartCanvas4')
}

let valuefive = 50;
chart5(valuefive);

const elementfive = document.querySelector('#valuefive')
elementfive.innerHTML=valuefive;

//////////////////////////

function createChart(number, color, chart) {
    const chartCanvas5 = document.getElementById(chart),
        domString = `
        <p>${number}</p>
    `;

    new Chart(chartCanvas5, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [number, 100 - number],
                    backgroundColor: [color],
                    borderWidth: 0,
                    borderRadius: 10
                }

            ]
        },
        options: {
            cutoutPercentage: 75,
            tooltips: {
                enabled: false
            }
        }
    });


}

function chart6(number) {
    if (number <= 30) createChart(number, '#F35242', 'chartCanvas5')
    else if (number <= 70) createChart(number, '#FFCE47', 'chartCanvas5')
    else if (number <= 100) createChart(number, '#10CCAE', 'chartCanvas5')
}
let valuesix = 80;
chart6(valuesix);

const elementsix = document.querySelector('#valuesix')
elementsix.innerHTML=valuesix;

//////////////////////////

function createChart(number, color, chart) {
    const chartCanvas6 = document.getElementById(chart),
   

    domString = `
    <p>${number}</p>
`;

    new Chart(chartCanvas6, {
       
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [number, 100 - number],
                    backgroundColor: [color],
                    borderWidth: 0,
                    borderRadius: 10
                }

            ]
        },
        options: {
            cutoutPercentage: 75,
            tooltips: {
                enabled: false
            },
              
        }
       
    });
   

}

function chart7(number) {
   
    if (number <= 30) createChart(number , '#F35242' , 'chartCanvas6')
    else if (number <= 70) createChart(number , '#FFCE47' , 'chartCanvas6')
    else if (number <= 100) createChart(number , '#10CCAE' , 'chartCanvas6')
}
let valueseven = 20;
chart7(valueseven);

const elementseven = document.querySelector('#valueseven')
elementseven.innerHTML=valueseven;
