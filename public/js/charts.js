data = 'api/'


function month(obj){
    data = {}
    for (i=0;i<data.length;i++){
        var mon = obj[i]['date'].split('/')[1]
        if (mon in data) {//
            data[mon] = obj[i]['date'] + data[mon]
        }
        else{
            obj[i]['date'] = obj[i]['money']
        }
    }
}

function month_progress(data){
    // [{}]
    progress = month(data)
    
    months = data.Object.keys()
    money = data.Object.values()

    const ctx = document.getElementById('progress').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: 'Donations wrt Months',
                data: money,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    
    
}




function month_expenditure(data){
    // [{}]
    progress = month(data)
    
    months = data.Object.keys()
    money = data.Object.values()

    const ctx = document.getElementById('expend').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: 'Expenditures wrt Months',
                data: money,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    
    
}


function get_org_data(data) {
    org = {};
    for (i=0;i<data.length;i++){

        var org_name = data[i]['org_name']
        if (org_name in org){
            org[org_name] = org[org_name] + data[i]['money']
        }
        else{
            org[org_name] = data[i]['money']
        }
        
        
    }
    return org
}

function org_compare(data){
    
    progress = get_org_data(data)
    org = progress.Object.keys();
    money = progress.Object.values();

    const ctx = document.getElementById('org').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: org,
            datasets: [{
                label: 'Org',
                data: money,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
}