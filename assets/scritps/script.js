function Insert(num) {
    var calculation = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = calculation + num;
}

function ClearAll() {
    document.getElementById('display').innerHTML = "";
}