const display = document.querySelector('#display')

function appendToDisplay(input){
    display.value += input
}

function clearDisplay(){
    display.value = ""
}


function calculate(){
    try{
        display.value = math.evaluate(display.value);
    }catch{
        display.value = "error"
    }
    
}


