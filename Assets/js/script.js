var dayContainer = document.getElementById('day');
var saveButtons = $('#button');

var currentHour = moment().hour()
var workingHours = [9,10,11,12,13,14,15,16,17]

for (var i = 9; i < workingHours[8] + 1; i++) {
    var hourRow = document.createElement("div");
    var rowItemHour = document.createElement("div");
    var rowItemEvent = document.createElement("input");
    var rowItemButton = document.createElement("button");
    var rowItemButtonIcon = document.createElement("i");

    if (i < 13) {
        rowItemHour.textContent = i + "AM";
    } else {
        rowItemHour.textContent = i - 12 + "PM";
    }

    dayContainer.appendChild(hourRow);
    hourRow.appendChild(rowItemHour);
    hourRow.appendChild(rowItemEvent);
    hourRow.appendChild(rowItemButton);
    rowItemButton.appendChild(rowItemButtonIcon);


    hourRow.setAttribute("class", "row time-block");
    hourRow.setAttribute("id", "hour" + i);

    rowItemHour.setAttribute("class", "col-sm-2 hour ");
    rowItemEvent.setAttribute("id", "event" + i);
    rowItemButton.setAttribute("class", "col-sm-2 saveBtn");
    rowItemButton.setAttribute('id', 'button' + i)

    rowItemButtonIcon.setAttribute("class", "fas fa-save fa-2x");

    if (i === currentHour) {
        rowItemEvent.setAttribute("class", "col-sm-8 textarea present form");
    } else if (i > currentHour) {
        rowItemEvent.setAttribute("class", "col-sm-8 textarea future form");
    } else {
        rowItemEvent.setAttribute("class", "col-sm-8 textarea past form");
    }

    var eventNumber = 'event9' + i;
    // var eventLocal = localStorage.eventNumber;
    rowItemEvent.setAttribute('value', localStorage.eventNumber);
}

// for (let i = 0; i < workingHours[8] + 1; i++) {
//     var eventNumber = 'event' + i;
//     var eventLocal = localStorage.eventNumber;
//     rowItemEvent.setAttribute('value', eventLocal);
// }

// 
    
// }
// var userInput = document.getElementById('event9').value

// function setLocalStorage(){

// }


// button17.addEventListener('click', function(event) {
//     console.log(event)
//     localStorage.setItem('event17', event17.value)

// 