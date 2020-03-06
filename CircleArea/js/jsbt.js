function showMessage(){
    alert('Xin chào bạn!');
}

function closewindow() {
    let resultConfirm = confirm("Bạn đang đến với trang tính điểm cho sinh viên, có muốn tiếp tục?");
    if (resultConfirm === false) {
        window.close();
    } else {
        let x = prompt('Hãy nhập điểm Vật Lý');
        x = Number.parseFloat(x);
        let y = prompt('Hãy nhập điểm Hóa');
        y = Number.parseFloat(y);
        let z = prompt('Hãy nhập điểm Sinh Học');
        z = Number.parseFloat(z);
        if (x < 0 || y < 0 || z < 0) {
            alert('Điểm số không có giá trị âm, hãy nhập lại');
            closewindow();
        } else {
            document.write('Điểm trung bình 3 môn là ' + ((x + y + z) / 3));
            document.write('Tổng điểm 3 môn là ' + (x + y + z));
        }
    }
}

function circlearea() {
    let x = document.getElementById("nhapso").value;
    x = parseInt(x);
    document.getElementById("hienthi").innerHTML = 'Với bán kính: ' + x;
    document.getElementById("area").innerHTML = 'Diện tích hình tròn là: ' + (Math.PI * (x * x));
}

function dientichcn() {
    let x = prompt('Nhập chiều dài');
    x = parseInt(x);
    let y = prompt('Nhập chiều rộng');
    y = parseInt(y);
    document.getElementById("rong").innerHTML = 'Chiều dài: '+ y;
    document.getElementById("dai").innerHTML = 'Chiều rộng: '+ x;
    document.getElementById("area").innerHTML = 'Diện tích hình chữ nhật là '+(x * y);
}

function avab() {
    let x = prompt('Nhập a');
    x = parseInt(x);
    let y = prompt('Nhập b');
    y = parseInt(y);
    if (x % y === 0) {
        alert('a là bội số của b');
    } else {
        alert('a không phải là bội số của b');
    }
}