const inputcity = document.getElementById("city")
const cityname = document.getElementById("cityname")
const temp = document.getElementById("temp")
const desc_temp = document.getElementById("desc_temp")
const feel_temp = document.getElementById("feelTemp")
const curDate = document.getElementById("curDate");

let weather_info = () => {
    console.log(inputcity.value)
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputcity.value+'&appid=40b0676f040aec84d02abdaac37e34c8')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const city = data.name
        const country = data.sys.country
        const temperature = data.main.temp
        const tem = temperature -273.15;
        const feeltemp = data.main.feels_like -273.15
        const desc = data.weather[0].description
        cityname.innerHTML =`${city}, ${country}`
        const tempp = Math.ceil(tem.toFixed(2))
        temp.innerHTML = `${tempp} &deg;C`
        desc_temp.innerHTML = desc;
    })
    .catch(response => null)

    inputcity.value = "";

}


const getCurrentDate = () => {
    const weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thur";
    weekday[5] = "Fri";
    weekday[6] = "Sat"
    let curTime = new Date();
    let day = weekday[curTime.getDay()];
    return day;
};

const getCurrentTime = () => {
    const month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    var now = new Date();
    var months = month[now.getMonth()];
    var day = now.getDate();
    let hour = now.getHours();
    let min = now.getMinutes();
    let period = "AM";
    if (hour > 11) {
        period = "PM";
        if (hour > 12) hour -= 12;
    };
    if (min < 10) {
        min = "0" + min;
    };
    return`${months} ${day} | ${hour}:${min}${period}`;
};

document.getElementById("curDate").innerHTML = getCurrentDate() + " | " + getCurrentTime();

console.log(getCurrentDate() + " | " + getCurrentTime());
