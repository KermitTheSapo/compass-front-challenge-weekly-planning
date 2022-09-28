const content = document.querySelector(".add__name")
const week = document.querySelector(".add__weekdays")
const hour = document.querySelector(".add__hour")
const add = document.querySelector(".add__btn")
const remove = document.querySelector(".add__remove")

add.addEventListener("click", () => {
    keepValue()
    cleanInput()
})


function cleanInput() {
    content.value = ""
    week.value = "Segunda-Feira"
    hour.value = ""
}

function keepValue() {
    var name = content.value
    var weekdays = week.value
    var time = hour.value
}


function addCalendar(){
    
}


