
let countDown = -1;
let imgUrl = '';
document.getElementById('image').hidden = true;
document.getElementById('countdown').hidden = true;
document.getElementById('message').hidden = true;
document.getElementById('button').hidden = false;

const clock = () => {
    if(countDown > 0) {
        document.getElementById('countdown').innerHTML = countDown;
        countDown--;
    }
    else {
        document.getElementById('countdown').hidden = true;
        document.getElementById('button').hidden = false;
        document.getElementById('image').hidden = true;
        document.getElementById('message').hidden = true;
    }

    document.getElementById('countdown').innerHTML = countDown;
}

setInterval(clock, 1000);

const handleClick = async () => {
    const randInt = Math.random() * 100;
    if(randInt < 50) {
        await fetch(`https://api.thecatapi.com/v1/images/search`)
            .then(response => response.json())
            .then(response => document.getElementById('image').setAttribute('src', response[0].url));
    }
    else {
        await fetch(`https://dog.ceo/api/breeds/image/random`)
            .then(response => response.json())
            .then(response => document.getElementById('image').setAttribute('src', response.message));
    }
    countDown = 30;
    document.getElementById('countdown').innerHTML = 30;
    document.getElementById('button').hidden = true;
    document.getElementById('image').hidden = false;
    document.getElementById('countdown').hidden = false;
    document.getElementById('message').hidden = false;
}

document.getElementById('button').onclick = handleClick;