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
const deleteAll = document.querySelector(".add__remove")
const errorContent = document.querySelector(".add__error--content")
const errorHour = document.querySelector(".add__error--hour")
const errorHourContent = document.querySelector(".add__error--hourContent")
const maxContent = document.querySelector(".add__error--maxContent")

const items = JSON.parse(localStorage.getItem('calendar_itens')) || []
calendar.scrollTo(0, 300);



add.addEventListener("click", (e) => {
    e.preventDefault()
    if (content.value.length > 2 && hour.value.length > 2 && content.value.length < 150){
        addCalendar()
        content.classList.remove("add__name--error")
        hour.classList.remove("add__hour--error")
        errorContent.setAttribute("style", "display: none")
        errorHour.setAttribute("style", "display: none")
        maxContent.setAttribute("style", "display: none")
    } else if(content.value.length < 2 && hour.value.length < 2){
        content.classList.add("add__name--error")
        hour.classList.add("add__hour--error")
        errorContent.setAttribute("style", "display: flex")
        errorHour.setAttribute("style", "display: flex")
    } else if(content.value.length < 2){
        content.classList.add("add__name--error")
        errorContent.setAttribute("style", "display: flex")
    }else if(hour.value.length < 2){
        hour.classList.add("add__hour--error")
        errorHour.setAttribute("style", "display: flex")
    } else if(content.value.length > 150){
        content.classList.add("add__name--error")
        maxContent.setAttribute("style", "display: flex")
    }
    cleanInput()
})

function showItems() {
    calendarMonday.innerHTML = ''
    calendarTuesday.innerHTML = ''
    calendarThursday.innerHTML = ''
    calendarWednesday.innerHTML = ''
    calendarFriday.innerHTML = ''
    calendarSaturday.innerHTML = ''
    calendarSunday.innerHTML = ''
    items.sort(order)

    items.forEach((item) => {

        var div = ""
        var divHour = ""
        var h4Time = ""
        var divContent = ""
        var status = ""
        
        if(item.weekdays === "Segunda-Feira"){
            createDivCalendar(calendarMonday)
            createHour("calendar__hour--monday")
            createContent("calendar__status--monday")            
        } else if(item.weekdays === "Terça-Feira"){
            createDivCalendar(calendarTuesday)
            createHour("calendar__hour--Tuesday")
            createContent("calendar__status--tuesday")
        }else if(item.weekdays === "Quarta-Feira"){
            createDivCalendar(calendarThursday)
            createHour("calendar__hour--Thursday")
            createContent("calendar__status--thursday")
        }else if(item.weekdays === "Quinta-Feira"){
            createDivCalendar(calendarWednesday)
            createHour("calendar__hour--Wednesday")
            createContent("calendar__status--Wednesday")
        }else if(item.weekdays === "Sexta-Feria"){
            createDivCalendar(calendarFriday)
            createHour("calendar__hour--Friday")
            createContent("calendar__status--Friday")
        }else if(item.weekdays === "Sabado"){
            createDivCalendar(calendarSaturday)
            createHour("calendar__hour--Saturday")
            createContent("calendar__status--Saturday")
        }else if(item.weekdays === "Domingo"){
            createDivCalendar(calendarSunday)
            createHour("calendar__hour--Sunday")
            createContent("calendar__status--Sunday")
        }
        function createHour(nameClass){
            createDivHour(nameClass)
            createH4Time()
        }
        function createDivCalendar(mes){
            div = document.createElement("div");
            div.classList.add("calendar__item")
            mes.appendChild(div)
        }
        
        function createDivHour(hour) {
            divHour = document.createElement("div")
            divHour.classList.add("calendar__hour")
            divHour.classList.add(hour)   
            div.appendChild(divHour)
        }
        function createH4Time(){
            h4Time = document.createElement("h4")
            h4Time.classList.add("calendar__time")
            divHour.appendChild(h4Time)
            h4Time.textContent = item.time.replace(":", "h").concat("m")
        }
        function createDivContent(){
            divContent = document.createElement("div")
            divContent.classList.add("calendar__content")
            div.appendChild(divContent)
        }
        function createDivStatus(statusName){
            status = document.createElement("div")
            status.classList.add("calendar__status")
            status.classList.add(statusName)
            divContent.appendChild(status)
        }
        function createContentH3(){
            var h3Text = document.createElement("h3")
            h3Text.classList.add("calendar__text")
            divContent.appendChild(h3Text)
            h3Text.textContent = item.name
        }
        
        function createBtn(){
            var btn = document.createElement("button")
            btn.classList.add("calendar__remove")
            divContent.appendChild(btn)
            btn.innerHTML = "Apagar"
            btn.setAttribute("onclick", `deleteOne(${items.indexOf(item)})`)
        }

        function createContent(nameStatus){
            createDivContent()
            createDivStatus(nameStatus)
            createContentH3()
            createBtn()
        }        
    })
}

function addCalendar(){
    const item = {
        name: content.value,
        weekdays: week.value,
        time: hour.value, 
    }
    items.push(item)
    showItems()
}

function order(a,b) {
    return a.time.replace(':', '.') - b.time.replace(':', '.')    
}
showItems()