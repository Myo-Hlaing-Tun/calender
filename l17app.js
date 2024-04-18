const getcurmonth = document.getElementById('currmonth');
const getcuryear = document.getElementById('curryear');
const getuimonth = document.getElementById('months');
const getuiyears = document.getElementById('years');
const getcaldays = document.getElementById('caldays');
const getyearbtn = document.querySelector(".year-btn");
const getmonthbtn = document.querySelector(".month-btn");

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
let startyear = 2020;
let endyear = 2030;

window.addEventListener('click', function (e) {
    if (e.target == getmonthbtn || e.target == getcurmonth || e.target == getyearbtn || e.target == getcuryear) {

    } else {
        getuimonth.style.display = "";
        getuiyears.style.display = "";
    }
})

getmonthbtn.addEventListener('click', monthOptions);

function monthOptions() {
    getuimonth.innerHTML = '';
    getuiyears.style.display = "";
    for (let i = 0; i < months.length; i++) {
        const div = document.createElement('div');
        div.className = "dropdown-item";
        div.textContent = months[i];
        getuimonth.appendChild(div);
    }
    if (getuimonth.style.display == "") {
        getuimonth.style.display = "block";
    } else {
        getuimonth.style.display = "";
    }
    const selectMonths = getuimonth.querySelectorAll('.dropdown-item');
    selectMonths.forEach(element => {
        element.addEventListener('click', selectMonth);
    })
    function selectMonth(e) {
        getcurmonth.textContent = e.target.textContent;
        loadCalender();
    }
}

getyearbtn.addEventListener('click', yearOptions);

function yearOptions() {
    getuiyears.innerHTML = '';
    getuimonth.style.display = "";
    for (let y = startyear; y <= endyear; y++) {
        const div = document.createElement('div');
        div.className = "dropdown-item";
        div.textContent = y;
        getuiyears.appendChild(div);
    }
    if (getuiyears.style.display == '') {
        getuiyears.style.display = "block";
    } else {
        getuiyears.style.display = "";
    }
    const selectYears = getuiyears.querySelectorAll('.dropdown-item');
    selectYears.forEach(element => {
        element.addEventListener('click', selectYear);
    });
    function selectYear(e) {
        getcuryear.textContent = e.target.textContent;
        loadCalender();
    }
}

function loadCalender() {
    if (getcurmonth.textContent != "Month" && getcuryear.textContent != "Year") {
        const selectedMonth = months.indexOf(getcurmonth.textContent);
        const selectedYear = getcuryear.textContent;
        let firstDay = new Date(`${selectedYear}`, `${selectedMonth}`, 1);
        let LastDay = new Date(`${selectedYear}`, `${selectedMonth + 1}`, 0);

        const blankDiv = firstDay.getDay();
        const totalDays = LastDay.getDate();

        getcaldays.innerHTML = '';
        for (let i = 0; i < blankDiv; i++) {
            const label = document.createElement('label');
            label.className = "day none";
            getcaldays.appendChild(label);
        }
        for (let i = 0; i < totalDays; i++) {
            const label = document.createElement('label');
            label.className = "day";
            label.textContent = i + 1;
            getcaldays.appendChild(label);
        }
    }
}