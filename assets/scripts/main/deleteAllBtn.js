deleteAll.addEventListener("click", () => {
    if(calendarMonday.className === "calendar__monday"){
        deleteAllMonth(calendarMonday)
    }else if(calendarTuesday.className === "calendar__tuesday"){
        deleteAllMonth(calendarTuesday)
    }else if(calendarThursday.className === "calendar__thursday"){
        deleteAllMonth(calendarThursday)
    }else if(calendarWednesday.className === "calendar__wednesday"){
        deleteAllMonth(calendarWednesday)
    }else if(calendarFriday.className === "calendar__friday"){
        deleteAllMonth(calendarFriday)
    }else if(calendarSaturday.className === "calendar__saturday"){
        deleteAllMonth(calendarSaturday)
    }else if(calendarSunday.className === "calendar__sunday"){
        deleteAllMonth(calendarSunday)
    }
})

function deleteOne(index) {
    items.splice(index, 1)
    showItems()
}

function deleteAllMonth(month){
    while (month.firstChild) {
        month.removeChild(month.firstChild);
        items.splice(month.firstChild, 1)
    }
}