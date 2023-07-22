h = document.getElementById('hr');
min = document.getElementById('min');
sec = document.getElementById('sec');
sethour = document.getElementById('almhour')
setmin = document.getElementById('almmin')
setsec = document.getElementById('almsec')
content = document.querySelector('.selections')
gif=document.querySelector('.gif')
gif2=document.querySelector('.gif2')
button = document.getElementById('setalarm')

let alarmtime, isalarmset = false;
ringtone = new Audio("./alarmsound.mp3")

console.log(sethour.value)

setInterval(() => {
    let currentime = new Date();

    hour = currentime.getHours();
    minuts = currentime.getMinutes();
    second = currentime.getSeconds();
    let ampm = "PM"

    if (hour < 12) {
        ampm = 'AM'
    }

    minuts = minuts < 10 ? "0" + minuts : minuts
    hour = hour < 10 ? "0" + hour : hour
    second = second < 10 ? "0" + second : second

    h.innerHTML = hour;
    min.innerHTML = minuts;
    sec.innerHTML = second;
    ampmmode.innerHTML = ampm;

    if (`${hour}:${minuts}:${ampm}` == alarmtime) {
        ringtone.play()
        ringtone.loop = true;
        gif.classList.add('start')
        gif2.classList.add('disabled')
    }



})


let selectmenus = document.querySelectorAll("select");
console.log(selectmenus)

for (let i = 24; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let options = `<option value="${i}">${i}</option>`;
    selectmenus[0].firstElementChild.insertAdjacentHTML('afterend', options)
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let options = `<option value="${i}">${i}</option>`;
    selectmenus[1].firstElementChild.insertAdjacentHTML('afterend', options)
}

function setalarm(params) {
    if (isalarmset) {
        alarmtime = ``;
        ringtone.pause();
        content.classList.remove("disable");
        button.innerText = "Set Alarm";
        gif.classList.remove('start');
        gif2.classList.remove('disabled');
        return isalarmset = false;

    }

    alarmtime = `${selectmenus[0].value}:${selectmenus[1].value}:${selectmenus[2].value}`;
    if (alarmtime.includes("Hours") || alarmtime.includes("Minuts") || alarmtime.includes("AM/PM")) {
        alert("Pleace Select Valid Time for Alarm !")
    } else {
        button.innerHTML = "Clear Alarm"
        content.classList.add("disable");
        isalarmset = true;
        
    }

}

button.addEventListener('click', setalarm);
