//localização
let localization = normalize("auto:ip")
//url + key api
const key = 'c044b0a7b5094428bde150954220707'
const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${localization}&aqi=no&lang=pt`
//tempo para atualizar 1h
let timeToUpdate = 1000 * 60 *60

//remover acentos
function normalize(text){
    var normalise = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return normalise.toLowerCase()
}

//alterar icone
function changeIcon(iconDoc, iconUrl){
    iconDoc.style.backgroundImage = `url(https:${iconUrl})`
}

//alterar texto de um title
function textAlt(textDoc, textValue){
    textDoc.title = textValue 
}

//alterar temperatura na tela
function alterTemp(tempDoc, tempValue){
    tempDoc.innerHTML = `${Math.round(tempValue)}<sup>°c</sup>`
}

//pegar o clima 
function GetWeather(){

    let icon = document.getElementById("icon")
    let text = document.getElementById("icon")
    let temp = document.getElementById("weatherText")

    fetch(url, {
    }).then((res) => {
        return res.json()
    }).then((data)=>{
        let iconValue = data.current.condition.icon
        let textValue = data.current.condition.text
        let tempValue = data.current.feelslike_c
        changeIcon(icon, iconValue)
        textAlt(text, textValue)
        alterTemp(temp, tempValue)
        console.log(tempValue)
    })
}setInterval(GetWeather, timeToUpdate)

GetWeather()




