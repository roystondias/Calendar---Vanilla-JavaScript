
# Calendar
This Calendar Is Built Using HTML, CSS, And Vanilla JavaScript.



# Authors

- [@roystondias](https://github.com/roystondias)


# Demo

You can visit the link to check the live Demo:
https://snazzy-sopapillas-848b65.netlify.app/


# Documentation

## HTML

[index.html](https://github.com/roystondias/Projects/blob/master/index.html)
contains the mark up in which the head tag contains the links for 
styling, scripting, and bootstrap CSS files.

The body of the HTML is divided into 3 sections:
- Header.
- Body.
- Footer.

Header and Footer are written using simple mark up and are styled using 
CSS.

The body section of the HTML which will contain the Date, time, months and year of the Calendar are manipulated using JavaScript. 
List of Month and Years have been added as selection in the HTML.


## CSS

[CSS](https://github.com/roystondias/Projects/blob/master/styling.css) has been used to spefically center the 3 sections(header, footer, body).
Special fonts have been imported from google fonts and are linked to the index.html.

Rest of the styling is added to make the webpage aesthetically appealing.

[phone.css](https://github.com/roystondias/Projects/blob/master/phone.css) file has been made to make the website repsonsive and mobile friendly.

## JavaScript
[JavaScript](https://github.com/roystondias/Projects/blob/master/script.js) file is sub-divided into 4 parts:


- Live Clock

This function is implemented using the Async nature of JavaScript. We use SetInterval function so that the the date is called every 1 second and is displayed on the webpage using DOM manipulation.

- Date and Month

we use date object to get the date, day, year, month, year, and store it in the variables. The date is displayed on the website using template literals and DOM manipulation.

Top and down buttons are configured using the Event Listeners and the Calendar moves one month back on click of top button and one month ahead on click of down button.

when either of the button is clicked, the year and month variables are incremented or decremented accordingly and passed to the showCalendar() function.


- Calendar dates

The functionality is implemented using showCalendar(month, year) function in which we pass month and year.
This function is invocked to show present date, when someone tries to jump to a certain date, and when up and down buttons are used.

The show Calendar function has two for loops which will create a space for 6 rows and 7 columns 

The first step is to check how many dates are there in a month (example April is 30 whereas May 31).


We use a dates() function to incrementally prints the dates of the calendar depending on the number of dates.

Next we check when 1st of the month starts and for that we use the if blocks.
If the condition matches then date is printed using <td> or else a blank element is printed usng <td>.


Note: Special conditon is handled using if blocks on (line:84) this is done to handle 1st of the month appearing on Sunday.

- Jump Date

Depending on what options are selected by the user the jump() is called and the the values are extracted using parseInt and by selecting the DOM element select.

the Values are then extracted and passed to showCalendar() which will display the Dates of the Calendar.


# Lessons Learned

- Break down the bigger problem into smaller subtask.
- Implement functionality first and then design layouts.
- writing code with comments help in better understanding for future refrences
- Use JavaScript functions to write cleaner and understandable code.
