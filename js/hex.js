const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const button = document.getElementById('btn');
const hexCode = document.querySelector('h1');

button.addEventListener('click', function(){

    let hexColor = '#';
    for(let k = 0; k < 6; k++){
        hexColor += hex[getRandomColor()];
    }

    document.body.style.backgroundColor = hexColor;
    hexCode.textContent = hexColor;
})

function getRandomColor(){
    return Math.floor(Math.random()* hex.length);
}