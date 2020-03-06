function setOutput(c) {
    document.getElementById("result").value += c;
}

function calculator() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = eval(result);
}

function clearOutput() {
    document.getElementById("result").value = null;
}

function delString() {
    let valueDel = document.getElementById("result").value;
    let valueDel1Digit = valueDel.substring(0, valueDel.length - 1);
    document.getElementById("result").value = valueDel1Digit;
}

window.addEventListener("keydown", checkKey);

function checkKey(evt) {
    let inputKB = evt.key;
    if (!isNaN(inputKB)) {
        setOutput(evt.key);
    }
}

function checkRegex() {
    let check = /^[0-9-+()]*$/;
    let check2 = /^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/;
    let check3 = /^[-+]?[0-9]+([-+*/]+[-+]?[0-9]+)*$/;
    let txt = "/";
    console.log(check.test(txt));
}
checkRegex();