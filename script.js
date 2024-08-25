const apiKey=""; //enter your api key here
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        
        const searchBox=document.querySelector(".search-bar input");
        const searchBtn=document.querySelector(".search-bar button");
        const weatherIcon=document.querySelector(".icon");
        // const bg=document.getElementsByTagName('body')
        async function checkWeather(city){
            const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
            var data=await response.json();
            console.log(data);
            // to select the data and then change it accoriding to the city name entered
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".real-temp").innerHTML=Math.round(data.main.temp)+" °C";
            document.querySelector(".feel").innerHTML=Math.round(data.main.feels_like)+" °C";
            document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
            document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
            let description = data.weather[0].description;
            let capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);
            document.querySelector(".desc").innerHTML = capitalizedDescription;


            if(data.weather[0].main==="Clouds" && data.main.temp>=12){
                weatherIcon.src="Images/clouds.png";
    
                let element = document.getElementById("bg");
                element.innerHTML=""
                document.body.style.backgroundImage="url('https://media.istockphoto.com/id/184103864/photo/clouds-on-sky.webp?b=1&s=612x612&w=0&k=20&c=wStnMzOz1QQUzDNwDHF9fMaCvGOaBJz8_U__NT0YGzg=')"
                document.body.style.backgroundRepeat="no-repeat"
                document.body.style.backgroundPosition="center"
                document.body.style.backgroundSize="cover"
                document.body.style.backdropFilter="blur(3px)"
                document.body.style.zIndex="1"
            }
            else if(data.weather[0].main==="Clear"){
                weatherIcon.src="Images/clear.png";
                
                document.body.style.backgroundImage="url('https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_640.jpg')"
                document.body.style.backgroundRepeat="no-repeat"
                document.body.style.backgroundPosition="center"
                document.body.style.backgroundSize="cover"
                document.body.style.backdropFilter="blur(3px)"
            }
            else if(data.weather[0].main==="Rain"||data.weather[0].main==="Thunderstorm"){
                weatherIcon.src="Images/rain.png";

                let element = document.getElementById("bg");
                element.innerHTML=""
                document.body.style.backgroundImage="url('https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712880000&semt=sph')"
                document.body.style.backgroundRepeat="no-repeat"
                document.body.style.backgroundPosition="center"
                document.body.style.backgroundSize="cover"
                document.body.style.backdropFilter="blur(3px)"
                
            }
            // else if(data.weather[0].main==="Drizzle"){
            //     weatherIcon.src="Images/drizzle.png";
            // }
            else if(data.main.temp<=12){
                weatherIcon.src="Images/snow.png";

                let element = document.getElementById("bg");
                element.innerHTML=""
                document.body.style.backgroundImage="url('https://media.istockphoto.com/id/1438178298/photo/beautiful-view-of-the-sunrise-in-the-morning-on-the-country-snowy-road.jpg?s=612x612&w=0&k=20&c=G2o0GvkWgt4cs-Vd2FbXWgfawFhhhcWczvw0VERA7WQ=')"
                document.body.style.backgroundRepeat="no-repeat"
                document.body.style.backgroundPosition="center"
                document.body.style.backgroundSize="cover"
                document.body.style.backdropFilter="blur(3px)"
            }
        }
        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);
        })
        //for enter key
        searchBox.addEventListener('keypress', function(event) {
            if (event.key === "Enter") {
                console.log("hi")
                checkWeather(searchBox.value);
            }
          });
