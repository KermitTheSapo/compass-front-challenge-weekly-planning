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

const items = JSON.parse(localStorage.getItem('calendar_itens')) || []

calendar.scrollTo(0, 300);

add.addEventListener("click", () => {
    if (content.value.length > 2 && hour.value.length > 2 && content.value.length < 80){
        addCalendar()
        content.classList.remove("add__name--error")
        hour.classList.remove("add__hour--error")
        errorContent.setAttribute("style", "display: none")
        errorHour.setAttribute("style", "display: none")
    } else if(content.value.length < 2){
        content.classList.add("add__name--error")
        errorContent.setAttribute("style", "display: flex")
    }else if(hour.value.length < 2){
        hour.classList.add("add__hour--error")
        errorHour.setAttribute("style", "display: flex")
    }
    cleanInput()
})

function cleanInput() {
    content.value = ""
    week.value = "Segunda-Feira"
    hour.value = "12:00"
}

function showItems() {
    calendarMonday.innerHTML = ''
    calendarTuesday.innerHTML = ''
    calendarThursday.innerHTML = ''
    calendarWednesday.innerHTML = ''
    calendarFriday.innerHTML = ''
    calendarSaturday.innerHTML = ''
    calendarSunday.innerHTML = ''
    items.sort(order)
    var array = []
    // var veri = true
    // var i = 0
    // while (i < items.length){
    //     array.push(items[i].time)
    //     i++
    // }
    // veri = array.some( e => e === e)
    // if (veri) {

    // }

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
            // if(veri === true){
            //     createContent("calendar__status--monday")    
            //     createContent("calendar__status--monday")
            //     array.splice(0, array.length)
            // } else{
            //     createContent("calendar__status--monday")
            // }            
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

function deleteOne(index) {
    items.splice(index, 1)
    showItems()
}

function saveFromLocalStorage() {
    localStorage.setItem('calendar_itens', JSON.stringify(items))
}

function deleteFromLocalStorage() {
    localStorage.removeItem('calendar_itens')
    items.splice(0, items.length);
    showItems()
}

deleteAll.addEventListener("click", () => {
    if(calendarMonday.className === "calendar__monday"){
        while (calendarMonday.firstChild) {
            calendarMonday.removeChild(calendarMonday.firstChild);
            items.splice(calendarMonday.firstChild, 1)
        }
    }else if(calendarTuesday.className === "calendar__tuesday"){
        while (calendarTuesday.firstChild) {
            calendarTuesday.removeChild(calendarTuesday.firstChild);
            items.splice(calendarTuesday.firstChild, 1)
        }
    }else if(calendarThursday.className === "calendar__thursday"){
        while (calendarThursday.firstChild) {
            calendarThursday.removeChild(calendarThursday.firstChild);
            items.splice(calendarThursday.firstChild, 1)
        }
    }else if(calendarWednesday.className === "calendar__wednesday"){
        while (calendarWednesday.firstChild) {
            calendarWednesday.removeChild(calendarWednesday.firstChild);
            items.splice(calendarWednesday.firstChild, 1)
        }
    }else if(calendarFriday.className === "calendar__friday"){
        while (calendarFriday.firstChild) {
            calendarFriday.removeChild(calendarFriday.firstChild);
            items.splice(calendarFriday.firstChild, 1)
        }
    }else if(calendarSaturday.className === "calendar__saturday"){
        while (calendarSaturday.firstChild) {
            calendarSaturday.removeChild(calendarSaturday.firstChild);
            items.splice(calendarSaturday.firstChild, 1)
        }
    }else if(calendarSunday.className === "calendar__sunday"){
        while (calendarSunday.firstChild) {
            calendarSunday.removeChild(calendarSunday.firstChild);
            items.splice(calendarSunday.firstChild, 1)
        }
    }
})

function order(a,b) {
    return a.time.replace(':', '.') - b.time.replace(':', '.')    
}

showItems()