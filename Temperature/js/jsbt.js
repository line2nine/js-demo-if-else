function changeCtoF() {
    let resultConfirm = confirm("Đây là trang tính đổi độ C sang F, có muốn tiếp tục?");
    if (resultConfirm === false) {
        window.close();
    } else {
        let x = prompt('Hãy nhập độ C');
        x = Number.parseFloat(x);
        document.write('Độ F là ' + ((x * 1.8) + 3));
    }
}