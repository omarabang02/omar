function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '123' && password === '123') {
        alert('Login successful!');
        window.location.href = "home.html";
        return false;
    } else {
        alert('Invalid username or password. Please try again.');
        return false;
    }
}
function add() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    document.getElementById('result').innerHTML = 'Result: ' + result;
}

function subtract() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 - num2;
    document.getElementById('result').innerHTML = 'Result: ' + result;
}

function multiply() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 * num2;
    document.getElementById('result').innerHTML = 'Result: ' + result;
}

function divide() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 / num2;
    document.getElementById('result').innerHTML = 'Result: ' + result;
}

function logout() {
    window.location.href = "index.html";
}
