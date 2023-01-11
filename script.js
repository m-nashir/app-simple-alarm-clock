const display = document.querySelector('.wrapper h1'),
selectMenu = document.querySelectorAll('select'),
setAlarm = document.querySelector('button');

for(let i = 12; i > 0; i--) {
    i = i < 10 ? '0' + i : i;
    let option = `<option value='${i}'>${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option)
}

for(let i = 59; i >= 0; i--) {
    i = i < 10 ? '0' + i : i;
    let option = `<option value='${i}'>${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option)
}

for(let i = 12; i > 0; i--) {
    let ampm = i == 1 ? 'AM' : 'PM';
    let option = `<option value='${ampm}'>${ampm}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option)
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = 'AM';

    if (h >= 12){
        h = h - 12;
        ampm = 'PM'
    }

    h = h == 0 ? h = 12 : h;

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    display.innerHTML = `${h} : ${m} : ${s} ${ampm}`
    
}, 1000)