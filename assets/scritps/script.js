function Clear() {
    document.getElementById('input-label').innerHTML = "";
    document.getElementById('result-label').innerHTML = "0";
}

function Insert(num) {
    var calculation = document.getElementById('input-label').innerHTML;
    if(calculation == 0){
        document.getElementById('input-label').addEventListener("change",myFunction())
        document.getElementById('input-label').innerHTML = num;
    }
    else{
        if(calculation.length == 22 || calculation.length + num.length > 22){
            return;
        }
        document.getElementById('input-label').innerHTML = calculation + num;
        document.getElementById('input-label').addEventListener("change",result())
    }
    
}

function myFunction(){
    document.getElementById('result-label').innerHTML = '';
}

function Backspace(){
    var num = document.getElementById('input-label').innerHTML;
    if(!(num == '0' || num == '')){
        if(num.length == 1){
            document.getElementById('input-label').innerHTML = 0;
        }
        else{
            document.getElementById('input-label').innerHTML = num.substring(0, num.length - 1);
        }
    }
    else{
        document.getElementById('input-label').innerHTML = 0;
    }
}

function result() {
    var result = document.getElementById('input-label').innerHTML;
    document.getElementById('result-label').innerHTML = eval(result);
}

