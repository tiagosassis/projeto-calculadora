function Clear() {
    var input = document.getElementById('input-label');
    var result = document.getElementById('result-label');

    result.style.fontSize = "1.5em";
    result.style.lineHeight = "3.2em";

    input.style.fontSize = "2.8em";
    input.style.lineHeight = "1.75em";
    
    document.getElementById('input-label').innerHTML = "";
    document.getElementById('result-label').innerHTML = "0";
}

function Insert(num) {
    var calculation = document.getElementById('input-label').innerHTML;
    if(calculation == 0){
        document.getElementById('input-label').innerHTML = num;
    }
    else{
        if(calculation.length == 10 || calculation.length + num.length > 10){
            return; // limitação de caracteres para evitar overflow no label
        }
        document.getElementById('input-label').innerHTML = calculation + num;
    }
    
}

function BackSpace(){
    var calculation = document.getElementById('input-label').innerHTML;
    if(!(calculation == '0' || calculation == '')){
        if(calculation.length == 1){
            document.getElementById('input-label').innerHTML = 0;
        }
        else{
            document.getElementById('input-label').innerHTML = calculation.substring(0, calculation.length - 1);
        }
    }
    else{
        document.getElementById('input-label').innerHTML = 0;
    }
}

function Result() {
    var result = document.getElementById('input-label').innerHTML;

    if(result.length > 0 ){
        result = '= ' + eval(result);
        if(result.length > 11){
            result = result.substring(0, 11); // limitação de caracteres para evitar overflow no label
        }
        document.getElementById('result-label').innerHTML = '' + result;
    }
}

function ResizeFontAndLine() {
    // Ao solicitar o resultado, o tamanho e posicionamento das fontes serão alterados
    var input = document.getElementById('input-label');
    var result = document.getElementById('result-label');

    result.style.fontSize = "2.8em";
    result.style.lineHeight = "1em";

    input.style.fontSize = "1.5em";
    input.style.lineHeight = "3em";
}

const resultado = document.getElementById('calculadora');

resultado.addEventListener('click', (evt)=>{
    const alvo = evt.target;
    alvo.style.animation = "";
    setTimeout(() => alvo.style.animation = "ResizeButtonAnimation .1s linear");
})

const $html = document.querySelector('html');
const $button = document.getElementById('mode');

$button.addEventListener('click', ()=>{
    $html.classList.toggle('dark-mode');
})