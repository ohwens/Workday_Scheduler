var dayContainer = document.getElementById('day')
// var hourRow = document.createElement('div')
// var rowItemHour = document.createElement('div')
// var rowItemEvent = document.createElement('div')
// var rowItemButton = document.createElement('div')

var currentTime = moment()
var workingHours = [1,2,3,4,5,6,7,8,9]

for (var i = 0; i < workingHours.length; i++) {

var hourRow = document.createElement('div')
var rowItemHour = document.createElement('div')
var rowItemEvent = document.createElement('div')
var rowItemButton = document.createElement('div')
    
rowItemHour.textContent = 'test rowItemHour'
rowItemEvent.textContent = 'test rowItemEvent'
rowItemButton.textContent = 'test rowItemButton'

dayContainer.appendChild(hourRow)
hourRow.appendChild(rowItemHour)
hourRow.appendChild(rowItemEvent)
hourRow.appendChild(rowItemButton)

hourRow.setAttribute('class', 'row')
hourRow.setAttribute('id', ('hour'+(i+9)))

rowItemHour.setAttribute('class', 'col-sm-2 bg-white border-top border-bottom border-dark')
rowItemEvent.setAttribute('class', 'col-sm-8 bg-secondary border border-dark')
rowItemButton.setAttribute('class', 'col-sm-2 bg-info border-top border-bottom border-dark rounded rounded-3')
}