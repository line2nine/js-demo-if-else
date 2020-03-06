function calculator(c) {
    let x = document.getElementById("input1").value;
    x = parseFloat(x);
    let y = document.getElementById("input2").value;
    y = parseFloat(y);
    let r;
    switch (c) {
        case '1':
            r=x+y;
            break;
        case '2':
            r=x-y;
            break;
        case '3':
            r=x*y;
            break;
        case '4':
            r=x/y;
            break;
    }
    document.getElementById("result").innerHTML = 'Kết quả là: ' + r;
}