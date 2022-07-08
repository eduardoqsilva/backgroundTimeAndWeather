function relogio() {
    //dia
    let date = new Date();
    let time = document.getElementById("clock")
    let hours = date.getHours()
    //adicionando 0 antes do numero se for menor que 10
    if (hours < 10){
        hours = `0${hours}`
    }
    let min = date.getMinutes()
    //adicionando 0 antes do numero se for menor que 10
    if (min < 10){
        min = `0${min}`
    }
    //escrevendo valor na tela
    time.innerHTML = `${hours}:${min}`;

    //escrevendo o dia/mês na tela 
    let weekDc = document.getElementById("day")
    let dayWeek = date.getDay()
    let day = date.getDate()
    let moth = date.getMonth() 
    let textWeek = ""
    switch(dayWeek){
        case 0:
            textWeek = "domingo, "
            break
        case 1:
            textWeek = "segunda-feira, "
            break
        case 2:
            textWeek = "terça-feira, "
            break
        case 3:
            textWeek = "quarta-feira, "
            break
        case 4:
            textWeek = "quinta-feira, "
            break
        case 5:
            textWeek = "sexta-feira, "
            break
        case 6:
            textWeek = "sábado, "
            break
    }

    let textMonth = ""
    switch(moth){
        case 0:
            textMonth = "janeiro"
            break
        case 1:
            textMonth = "fevereiro"
            break
        case 2:
            textMonth = "março"
            break
        case 3:
            textMonth = "abril"
            break
        case 4:
            textMonth = "maio"
            break
        case 5:
            textMonth = "junho"
            break
        case 6:
            textMonth = "julho"
            break
        case 7:
            textMonth = "agosto"
            break
        case 8:
            textMonth = "setembro"
            break
        case 9:
            textMonth = "outubro"
            break
        case 10:
            textMonth = "novembro"
            break
        case 11:
            textMonth = "dezembro"
            break
    }
    
    weekDc.innerHTML = textWeek + day + " de " + textMonth 

} setInterval(relogio, 1000)//chamando a função a cada 1s



