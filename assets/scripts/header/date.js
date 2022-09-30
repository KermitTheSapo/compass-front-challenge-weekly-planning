function createDate(){
    const date = document.querySelector(".timer__date")
    monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
    now = new Date
    date.innerHTML = (now.getDate() + " de " + monName[now.getMonth()] + " de " + now.getFullYear())
}
createDate()
