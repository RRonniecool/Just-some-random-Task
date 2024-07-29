const loadtext = document.querySelector('.loading-text')
const bground = document.querySelector('.bg')

let load = 0

let int = setInterval(bluring, 30)
function bluring(){
    load ++

    if(load > 99){
        clearInterval(int)
    }
    console.log(load)
    loadtext.textContent = `Loading... ${load}%`

    loadtext.style.opacity = scale(load, 0, 100, 1, 0)
    bground.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` 
}

function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}