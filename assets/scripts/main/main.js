const content = document.querySelector(".add__name")
const week = document.querySelector(".add__weekdays")
const hour = document.querySelector(".add__hour")
const add = document.querySelector(".add__btn")
const remove = document.querySelector(".add__remove")
const calendar = document.querySelector(".calendar")
const deleteDiv = document.querySelector(".calendar__remove")

add.addEventListener("click", () => {
    addCalendar()
    cleanInput()
})

function cleanInput() {
    content.value = ""
    week.value = "Segunda-Feira"
    hour.value = ""
}
function addCalendar(){
    var name = content.value
    var weekdays = week.value
    var time = hour.value   

    var div = document.createElement("div");
    div.classList.add("calendar__item")
    calendar.appendChild(div)

    var divHour = document.createElement("div")
    divHour.classList.add("calendar__hour")
    divHour.classList.add("calendar__hour--good")    
    div.appendChild(divHour)

    var h4Time = document.createElement("h4")
    h4Time.classList.add("calendar__time")
    divHour.appendChild(h4Time)
    h4Time.textContent = time

    var divContent = document.createElement("div")
    divContent.classList.add("calendar__content")
    div.appendChild(divContent)

    var status = document.createElement("div")
    status.classList.add("calendar__status")
    status.classList.add("calendar__status--good")
    divContent.appendChild(status)

    var h3Text = document.createElement("h3")
    h3Text.classList.add("calendar__text")
    divContent.appendChild(h3Text)
    h3Text.textContent = name    
}

// deleteDiv.addEventListener("click", () =>{
//     divContent.classList.add("remove")
// })