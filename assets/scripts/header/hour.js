updateTime = () =>{
    var now = new Date()
    var hour = fixNumber(now.getHours()) + ':' + fixNumber(now.getMinutes())
    const time = document.querySelector(".timer__hour")
    time.innerHTML = hour
}

function fixNumber(number){
    if (number < 10){
        number = "0" + number
    }
    return number;
}
updateTime()
setInterval(updateTime, 10000)