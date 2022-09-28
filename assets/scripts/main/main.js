const content = document.querySelector(".add__name")
const week = document.querySelector(".add__weekdays")
const hour = document.querySelector(".add__hour")
const add = document.querySelector(".add__btn")
const remove = document.querySelector(".add__remove")
const calendar = document.querySelector(".calendar")
const calendarMonday = document.querySelector(".calendar__monday")
const calendarTuesday = document.querySelector(".calendar__tuesday")
const calendarThursday = document.querySelector(".calendar__thursday")
const calendarWednesday = document.querySelector(".calendar__wednesday")
const calendarFriday = document.querySelector(".calendar__friday")
const calendarSaturday = document.querySelector(".calendar__saturday")
const calendarSunday = document.querySelector(".calendar__sunday")
const deleteDiv = document.querySelector(".calendar__remove")
const deleteAll = document.querySelector(".add__remove")
const item = document.querySelector(".calendar__item")

add.addEventListener("click", () => {
    if (content.value.length > 5 && hour.value.length > 2){
        addCalendar()
    }
    cleanInput()
})

function cleanInput() {
    content.value = ""
    week.value = "Segunda-Feira"
    hour.value = ""
}
function addCalendar(){
    calendar.classList.add("calendar")
    calendar.classList.remove("disable")
    var name = content.value
    var weekdays = week.value
    var time = hour.value   

    if(weekdays === "Segunda-Feira"){
        var div = document.createElement("div");
        div.classList.add("calendar__item")
        calendarMonday.appendChild(div)

        var divHour = document.createElement("div")
        divHour.classList.add("calendar__hour")
        divHour.classList.add("calendar__hour--monday")   
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
        status.classList.add("calendar__status--monday")
        divContent.appendChild(status)
         
    } else if(weekdays === "Terça-Feira"){
        var div = document.createElement("div");
        div.classList.add("calendar__item")
        calendarTuesday.appendChild(div)

        var divHour = document.createElement("div")
        divHour.classList.add("calendar__hour")
        divHour.classList.add("calendar__hour--Tuesday")   
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
        status.classList.add("calendar__status--tuesday")
        divContent.appendChild(status)
    }else if(weekdays === "Quarta-Feira"){
        var div = document.createElement("div");
        div.classList.add("calendar__item")
        calendarThursday.appendChild(div)

        var divHour = document.createElement("div")
        divHour.classList.add("calendar__hour")
        divHour.classList.add("calendar__hour--Thursday")   
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
        status.classList.add("calendar__status--thursday")
        divContent.appendChild(status)
    }else if(weekdays === "Quinta-Feira"){
        var div = document.createElement("div");
        div.classList.add("calendar__item")
        calendarWednesday.appendChild(div)

        var divHour = document.createElement("div")
        divHour.classList.add("calendar__hour")
        divHour.classList.add("calendar__hour--Wednesday")   
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
        status.classList.add("calendar__status--wednesday")
        divContent.appendChild(status)
    }else if(weekdays === "Sexta-Feria"){
        var div = document.createElement("div");
        div.classList.add("calendar__item")
        calendarFriday.appendChild(div)

        var divHour = document.createElement("div")
        divHour.classList.add("calendar__hour")
        divHour.classList.add("calendar__hour--Friday")   
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
        status.classList.add("calendar__status--friday")
        divContent.appendChild(status)
    }else if(weekdays === "Sabado"){
        var div = document.createElement("div");
        div.classList.add("calendar__item")
        calendarSaturday.appendChild(div)

        var divHour = document.createElement("div")
        divHour.classList.add("calendar__hour")
        divHour.classList.add("calendar__hour--Saturday")   
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
        status.classList.add("calendar__status--saturday")
        divContent.appendChild(status)
    }else if(weekdays === "Domingo"){
        var div = document.createElement("div");
        div.classList.add("calendar__item")
        calendarSunday.appendChild(div)

        var divHour = document.createElement("div")
        divHour.classList.add("calendar__hour")
        divHour.classList.add("calendar__hour--Sunday")   
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
        status.classList.add("calendar__status--sunday")
        divContent.appendChild(status)
    }
    var h3Text = document.createElement("h3")
    h3Text.classList.add("calendar__text")
    divContent.appendChild(h3Text)
    h3Text.textContent = name   
    
    var btn = document.createElement("button")
    btn.classList.add("calendar__remove")
    divContent.appendChild(btn)
    btn.innerHTML = "Apagar"
    btn.setAttribute("onclick", "deleteOne(this)")
}

deleteAll.addEventListener("click", () => {
    if(calendarMonday.className === 'calendar__monday'){
        while (calendarMonday.firstChild) {
            calendarMonday.removeChild(calendarMonday.firstChild);
        }
    } else if (calendarTuesday.className === 'calendar__tuesday'){
        while (calendarTuesday.firstChild) {
            calendarTuesday.removeChild(calendarTuesday.firstChild);
        }
    }else if (calendarThursday.className === 'calendar__thursday'){
        while (calendarThursday.firstChild) {
            calendarThursday.removeChild(calendarThursday.firstChild);
        }
    }else if (calendarWednesday.className === 'calendar__wednesday'){
        while (calendarWednesday.firstChild) {
            calendarWednesday.removeChild(calendarWednesday.firstChild);
        }
    }else if (calendarFriday.className === 'calendar__friday'){
        while (calendarFriday.firstChild) {
            calendarFriday.removeChild(calendarFriday.firstChild);
        }
    }else if (calendarSaturday.className === 'calendar__saturday'){
        while (calendarSaturday.firstChild) {
            calendarSaturday.removeChild(calendarSaturday.firstChild);
        }
    }else if (calendarSunday.className === 'calendar__sunday'){
        while (calendarSunday.firstChild) {
            calendarSunday.removeChild(calendarSunday.firstChild);
        }
    }      
})

function deleteOne(button){
    var calendarDiv = button.parentNode.parentNode
    calendarDiv.parentNode.removeChild(calendarDiv)
}