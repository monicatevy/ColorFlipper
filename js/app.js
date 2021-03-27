const colors = ["antiquewhite", "azure", "lavender", "lavenderblush", "lemonchiffon", "mistyrose", "navajowhite", "peachpuff", "seashell"];
const button = document.getElementById('btn');
const textColor = document.querySelector('h1');

button.addEventListener('click', function(){
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = colors[randomColor];
    textColor.textContent = colors[randomColor];
})

function getRandomColor(){
    return Math.floor(Math.random()* colors.length);
}
