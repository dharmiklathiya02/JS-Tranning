function allnumber() {
    var num1 = document.getElementById("Number1").value;
    var num2 = document.getElementById("Number2").value;
    var op = document.getElementById("opreter").value; 
    switch(op){
        case "+":
            var add =  parseInt(num1) + parseInt(num2);
            document.getElementById("ans").value = add;
            break;
        case "-":
            var sub = parseInt(num1) - parseInt(num2);
            document.getElementById("ans").value = sub;
            break;
        case "*":
            var mul = parseInt(num1) * parseInt(num2);
            document.getElementById("ans").value = mul;
            break;
        case "/":
            var div = parseInt(num1) / parseInt(num2);
            document.getElementById("ans").value = div;
            break;
    }
}