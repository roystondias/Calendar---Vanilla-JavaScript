//to add live clock to the website
let clockElement = document.getElementById("clock");

function updateClock(clock) {
    clock.innerHTML = new Date().toLocaleTimeString();
    console.log(clock);
}

//adding the date section
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let date = new Date();
let month = date.getMonth();
let displaymonth = months[month];
let year = date.getFullYear();
const date_1 = date.getDate();
let dateSection = document.getElementById('date');
dateSection.innerText = `${date_1} ${displaymonth} ${year}, ${days[date.getDay()]}`;

//configuring buttons
const upButton = document.getElementById('up-button');
const downButton = document.getElementById('down-button');
upButton.addEventListener('click', moveup);
downButton.addEventListener('click', movedown);

//these if blocks are used to handle the weeks and months when they reach the end
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

//this is called from on change (used to jump to any given month and year)
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

function jump() {
    year = parseInt(selectYear.value);
    month = parseInt(selectMonth.value);
    showCalendar(month, year);
    let displaymonth = months[month];
    let dateSection_2 = document.getElementById('date-button-section');
    dateSection_2.innerHTML = `${displaymonth}, ${year}`;
}

//Display the Dates of the calendar
showCalendar(month, year);
function showCalendar(month) {
    const tableBody = document.getElementById('calendar-body');
    tableBody.innerHTML = "";

    //variables required to create dates
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
                tableBlankElement();
            }
            else if (row == 1 && col >= day) {
                tableDataElement();
            }
            else if (row == 2) {
                tableDataElement();
            }
            else if (row == 3) {
                tableDataElement();
            }
            else if (row == 4) {
                tableDataElement();
            }
            else if (row == 5) {
                tableDataElement();
            }
            else if (row == 6) {
                tableDataElement();
            }
        }
        function tableDataElement() {
            const tablecol = document.createElement('td');
            tablecol.innerText = `${dates()}`;
            tableBody.appendChild(tablerow).appendChild(tablecol);
        }
        
        function tableBlankElement() {
            const tablecol = document.createElement('td');
            tablecol.innerText = ` `;
            tableBody.appendChild(tablerow).appendChild(tablecol);
        }
    }
}