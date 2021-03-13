var dayContainer = document.getElementById('day')
var hourRow = document.createElement('div')
var rowItemHour = document.createElement('div')
var rowItemEvent = document.createElement('div')
var rowItemButton = document.createElement('div')

var currentTime = 

rowItemHour.textContent = 'test rowItemHour'
rowItemEvent.textContent = 'test rowItemEvent'
rowItemButton.textContent = 'test rowItemButton'



dayContainer.appendChild(hourRow)
hourRow.appendChild(rowItemHour)
hourRow.appendChild(rowItemEvent)
hourRow.appendChild(rowItemButton)

hourRow.setAttribute('class', 'row')

rowItemHour.setAttribute('class', 'col-sm-2 bg-white border-top border-bottom border-dark')
rowItemEvent.setAttribute('class', 'col-sm-8 bg-secondary border border-dark')
rowItemButton.setAttribute('class', 'col-sm-2 bg-info border-top border-bottom border-dark rounded rounded-3')