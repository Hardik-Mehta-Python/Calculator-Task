let display = document.getElementById('display');
// console.log(display);
let output = document.getElementById('output')
let ac = document.getElementById('ac')
let c = document.getElementById('c')
document.addEventListener('keyup',(event)=>{
    let key  = event.key
    if (!isNaN(key)|| ['+','-','/','*','%','.'].includes(key)){
    appendValue(key)
}

if (key == 'Enter' || key == '='){
    finalOutput()
}

if (key == 'Backspace') {
    clear();
}

if (key == 'Escape') {
    allClear();
}
})

function appendValue(userInput) {
    display.value=display.value+userInput
}

function finalOutput(){
    display.value=eval(display.value)
}

output.addEventListener('click',()=>{
    finalOutput();
})

function allClear() {
    display.value=""
}
ac.addEventListener('click',()=>{
    allClear();
})

function clear() {
    display.value = display.value.slice(0,-1)
}
c.addEventListener('click',()=>{
    clear()
})



