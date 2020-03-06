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

window.addEventListener("keydown", checkKey);

function checkKey(evt) {
    let inputKB = evt.key;
    if (!isNaN(inputKB)) {
        setOutput(evt.key);
    }
}