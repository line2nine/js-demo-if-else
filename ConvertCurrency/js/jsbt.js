function converter() {
    let x = document.getElementById("inputdata").value;
    x = parseInt(x);
    let y = document.getElementById("slect1").value;
    let z = document.getElementById("slect2").value;
    let usdrate = 23000;
    let yenrate = 215;
    if (y === "usd") {
        x = x * usdrate;
    } else if (y === "yen") {
        x = x * yenrate;
    }
    if (z === "usd") {
        x = x / usdrate;
    } else if (z === "yen") {
        x = x / yenrate;
    }
    document.getElementById("result").innerHTML = 'Kết quả là: ' + x;
}