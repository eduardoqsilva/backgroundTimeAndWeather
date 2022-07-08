//elementos da pagina
let clockText = document.getElementById("clock")
let dayText = document.getElementById("day")
let tempText = document.getElementById("weatherText")
//themas do background
let theme = ['nature', 'city', 'clouds', 'landscape', 'background', 'dark']

// tempo para troca de background
const timeToChange = 2000 * 60 * 60

//gerar numeros rand...
function rdm(number){
    return Math.floor(Math.random() * number)
}

//retorna dia ou noite
function dayOrNigth(){
    let date = new Date();
    let hours = date.getHours()
    if(hours > 18 || hours < 6){
        return 'night'
    }else{
       return 'day'
    }
    
}

//retornar themas aleatorios
function themes(){

    return theme[rdm(theme.length)]
}

//trocar a cor de fundo de um elemento qualquer
export function changeColor(element, color){
    element.style.color = color
}

//buscar cor que mais combina com a imagem (ou quase)
function colorContrast(color, mode){
    fetch(` https://www.thecolorapi.com/scheme?hex=${color.replace("#", "")}&format=json&mode=${mode}&count=8`, {

    }).then((res) => {
        return res.json()
    }).then((data)=>{

  
        var cl = data.colors[6].hex.value
        console.log("Cor escolhida:"+cl)

        changeColor(clockText,cl)
        changeColor(dayText, cl)
        changeColor(tempText, cl)

    })
}

//trocar a url do background
function bgUrl(background){
    

    let back = document.getElementById('background')
    
    back.style.backgroundImage = `url(${background})`
    //cpr.innerHTML = `©${data.copyright}, Nasa` 
       
 
}

//buscar um background na api e depois trocalo
function backgroundOfTheDay() {

    
    //let cpr = document.getElementById('footer')


    const url = `https://api.pexels.com/v1/search?query=${themes()}+${dayOrNigth()}` 

    console.log(url)
    fetch(url, {
        headers: {
            Authorization: "563492ad6f91700001000001e9c75013e39448ea8fddca51ef8a1972"
        }
    }).then((res) => {
        return res.json()
    }).then((data) => {
        //background image
        let randnum = rdm(14)
        let dataUrl = data.photos[randnum].src.original
  
        let color = data.photos[randnum].avg_color
        console.log("Cor base:" + color)
        colorContrast(color, "monochrome-dark")
        
        bgUrl(dataUrl)

    })

}setInterval(backgroundOfTheDay, timeToChange)

backgroundOfTheDay()

