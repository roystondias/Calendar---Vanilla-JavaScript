//to add live clock to the website
(function () {

    let clockElement = document.getElementById("clock");

    function updateClock(clock) {
        clock.innerHTML = new Date().toLocaleTimeString();
    }

    setInterval(function () {
        updateClock(clockElement);
    }, 1000);

}());

//adding the date section
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let date = new Date();
let month = date.getMonth();
let displaymonth = months[month];
let year = date.getFullYear();
console.log(month,year);
const date_1 = date.getDate();
let dateSection = document.getElementById('date');
dateSection.innerText = `${date_1} ${displaymonth} ${year}, ${days[date.getDay()]}`;

//selecting the date and year from the dom
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

//configuring buttons
const upButton = document.getElementById('up-button');
const downButton = document.getElementById('down-button');
upButton.addEventListener('click', moveup);
downButton.addEventListener('click', movedown);

function moveup() {
    if (month == 0) {
        month = 11;
        year--;
    }
    else {
        month--;
    }
    displaydate(month);
    showCalendar(month);
}
function movedown() {
    if (month == 11) {
        month = 0;
        year++;
    }
    else {
        month++;
    }
    displaydate(month);
    showCalendar(month);
}

//Month, year and button section
displaydate(month);
function displaydate(month) {
    let displaymonth = months[month];
    let dateSection_2 = document.getElementById('date-button-section');
    dateSection_2.innerHTML = `${displaymonth}, ${year}`;
    dateSection_2.style.display = 'inline-block';
}
//this is called from on change
function jump() {
    year = parseInt(selectYear.value);
    month = parseInt(selectMonth.value);
    showCalendar(month,year);
    let displaymonth = months[month];
    let dateSection_2 = document.getElementById('date-button-section');
    dateSection_2.innerHTML = `${displaymonth}, ${year}`;
}

//Display the Dates of the calendar
showCalendar(month, year);
function showCalendar(month) {
    const tableBody = document.getElementById('calendar-body');
    tableBody.innerHTML = "";

    //this to create the critical variables required to create dates
    let first = new Date(year, month, 1).getDate();
    let last = new Date(year, (month + 1), 0).getDate();
    let day = (new Date(year, month, 1).getDay());

    //special block to handle 1st of the month that come on a sunday
    if (day == 0) {
        day = 7;
    }

    //function to return date sequentially
    function dates() {
        for (first; first <= last; first++) {
            if (first) {
                return first++;
            }
        }
        return " ";
    }

    for (row = 1; row <= 6; row++) {
        //3 lines of code to create rows
        const tablerow = document.createElement('tr');
        tablerow.innerHTML = ``;
        tableBody.appendChild(tablerow);
        // for loop create the elements inside the <tr> block if it is ther.
        for (col = 1; col <= 7; col++) {
            if (row == 1 && col < day) {
                const tablecol = document.createElement('td');
                tablecol.innerText = ` `;
                tableBody.appendChild(tablerow).appendChild(tablecol);
            }
            else if (row == 1 && col >= day) {
                const tablecol = document.createElement('td');
                tablecol.innerText = `${dates()}`;
                tableBody.appendChild(tablerow).appendChild(tablecol);
            }
            else if (row == 2) {
                const tablecol = document.createElement('td');
                tablecol.innerText = `${dates()}`;
                tableBody.appendChild(tablerow).appendChild(tablecol);
            }
            else if (row == 3) {
                const tablecol = document.createElement('td');
                tablecol.innerText = `${dates()}`;
                tableBody.appendChild(tablerow).appendChild(tablecol);
            }
            else if (row == 4) {
                const tablecol = document.createElement('td');
                tablecol.innerText = `${dates()}`;
                tableBody.appendChild(tablerow).appendChild(tablecol);
            }
            else if (row == 5) {
                const tablecol = document.createElement('td');
                tablecol.innerText = `${dates()}`;
                tableBody.appendChild(tablerow).appendChild(tablecol);
            }
            else if (row == 6) {
                const tablecol = document.createElement('td');
                tablecol.innerText = `${dates()}`;
                tableBody.appendChild(tablerow).appendChild(tablecol);
            }
        }
    }
}