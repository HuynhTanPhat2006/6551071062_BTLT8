function muaVe() {
    // Lấy giá trị từ form
    const ngayChieu = document.getElementById('ngayChieu').value;
    const phim = document.getElementById('phim').value;
    const suatChieu = document.getElementById('suatChieu').value;
    const phongChieu = document.getElementById('phongChieu');
    const giaPhong = parseFloat(phongChieu.options[phongChieu.selectedIndex].dataset.gia);
    const choNgoi = Array.from(document.getElementById('choNgoi').selectedOptions)
                        .map(option => option.value);

    // Tính giá vé cơ bản
    const giaVeCoBan = 45000;

    // Tính tổng tiền
    const tongTien = choNgoi.length * giaVeCoBan * giaPhong;

    // Tạo thông tin vé
    const thongTinHTML = `
        <div class="info-box">
            <h3>Thông tin vé</h3>
            <table>
                <tr><td>Khách hàng:</td><td>Nguyễn Văn A</td></tr>
                <tr><td>Ngày chiếu:</td><td>${ngayChieu}</td></tr>
                <tr><td>Phim:</td><td>${phim}</td></tr>
                <tr><td>Suất chiếu:</td><td>${suatChieu}</td></tr>
                <tr><td>Phòng chiếu:</td><td>${phongChieu.value}</td></tr>
                <tr><td>Ghế:</td><td>${choNgoi.join(', ')}</td></tr>
                <tr><td>Tổng tiền:</td><td>${tongTien.toLocaleString()} đ</td></tr>
            </table>
        </div>
    `;

    // Hiển thị thông tin trong cửa sổ mới
    const newWindow = window.open('', '_blank');
    newWindow.document.write(thongTinHTML);
    newWindow.document.close();
}
