var op1 = "";
var op2 = "";
var operation="";
function input(num) {
    if(operation== ""){
        op1 += num;
        document.getElementById("input").value += num;

    }
    else {
        op2 += num;
        document.getElementById("input").value += num;

    }
}
function operator(sign) {
    operation = sign;
    document.getElementById("input").value += sign;

}

function calculate() {

    if (operation == '+') {
        document.getElementById("input").value = (Number(op1) + Number(op2));
    }
    else if (operation == '-') {
        document.getElementById("input").value = (Number(op1) - Number(op2));

    }
    else if (operation == '*') {
        document.getElementById("input").value = (Number(op1) * Number(op2));
    }
    else if (operation == '/') {
        document.getElementById("input").value = (Number(op1) / Number(op2));
    }
}

function clearField(){
    document.getElementById("input").value = "";
    op1="";
    op2="";
    operation="";

}