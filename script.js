let apikey ="162149e0d0f2a71d1b318b087602e396"
let apiurl ="https://api.openweathermap.org/data/2.5/weather?q="
let searchbox = document.querySelector('.search input')
let searchbtn= document.querySelector('.search button')
let weathericon = document.querySelector(".weather-icon")

async function weather(city){
    let responce = await fetch(apiurl + city + `&appid=${apikey}`)
    let data = await responce.json()
    console.log(data)
    document.getElementById('name').innerHTML = data.name
    document.getElementById('temp').innerHTML = data.main.temp
    if(data.weather[0].main == "Clouds"){
        weathericon.src = "images/weather.png"
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Haze"){
        weathericon.src = "images/Haze.png"
    }
    
}

console.log(weathericon)


searchbtn.addEventListener('click',()=>{
    weather(searchbox.value)
})

