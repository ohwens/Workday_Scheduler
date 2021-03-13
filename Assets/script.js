var dayContainer = document.getElementById('day')
// var hourRow = document.createElement('div')
// var rowItemHour = document.createElement('div')
// var rowItemEvent = document.createElement('div')
// var rowItemButton = document.createElement('div')

var currentHour = moment().hour()
var workingHours = [9,10,11,12,13,14,15,16,17]

for (var i = 9; i < workingHours[8] + 1; i++) {
    var hourRow = document.createElement("div");
    var rowItemHour = document.createElement("div");
    var rowItemEvent = document.createElement("div");
    var rowItemButton = document.createElement("button");
    var rowItemButtonIcon = document.createElement("i");

    // rowItemHour.textContent = 'test rowItemHour'
    rowItemEvent.textContent = "test rowItemEvent";

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
    hourRow.setAttribute("id", "hour" + (i + 9));

    rowItemHour.setAttribute("class", "col-sm-2 hour ");
    rowItemEvent.setAttribute("class", "col-sm-8 textarea past present future");
    rowItemButton.setAttribute("class", "col-sm-2 saveBtn");

    rowItemButtonIcon.setAttribute("class", "fas fa-save fa-2x");

    if (i === currentHour) {
        rowItemEvent.setAttribute("class", "col-sm-8 textarea present");
    } else if (i > currentHour) {
        rowItemEvent.setAttribute("class", "col-sm-8 textarea future");
    } else {
        rowItemEvent.setAttribute("class", "col-sm-8 textarea past");
    }
}

