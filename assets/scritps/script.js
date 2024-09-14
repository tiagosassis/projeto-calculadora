function Insert(num) {
    var calculation = document.getElementById('input').innerHTML;
    if(calculation == 0){
        document.getElementById('input').innerHTML = num;
    }
    else{
        document.getElementById('input').innerHTML = calculation + num;
    }
    
}

function Clear() {
    document.getElementById('input').innerHTML = "";
}

function ClearAll() {
    document.getElementById('input').innerHTML = "";
    document.getElementById('result').innerHTML = "";
}

function Backspace(){

}

function result() {
    var result = 0;
    document.getElementById('result').innerHTML = result;
}