function studentscores() {
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
            studentscores();
        } else {
            document.write('Điểm trung bình 3 môn là ' + ((x + y + z) / 3));
            document.write('Tổng điểm 3 môn là ' + (x + y + z));
        }
    }
}