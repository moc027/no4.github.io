if (time <= 0) {
        clearInterval(countdown);
        window.location.href = 'https://example.com'; // Chuyển trang khi hết thời gian
    }if (time <= 0) {
        clearInterval(countdown);
        window.location.href = 'https://example.com'; // Chuyển trang khi hết thời gian
    }if (time <= 0) {
        clearInterval(countdown);
        window.location.href = 'https://example.com'; // Chuyển trang khi hết thời gian
    }if (time <= 0) {
        clearInterval(countdown);
        window.location.href = 'https://example.com'; // Chuyển trang khi hết thời gian
    }// JavaScript Documen


var thoigianbandau = 5;  
var time = thoigianbandau;
var itemCountDown = document.querySelector('.countdown-item');
console.log(itemCountDown);

var countdown = setInterval(function() {
    let giay = time % 60;
    let phut = Math.floor(time / 60);
    itemCountDown.innerHTML = `${phut} : ${giay < 10 ? '0' : ''}${giay}`;
    time--;
    
   if (time < 0) {
        clearInterval(countdown);
        window.location.href = './phao hoa.html';
    }
}, 1000);
const pawEffect = document.createElement('div');
pawEffect.classList.add('paw');
document.body.appendChild(pawEffect);

document.addEventListener('mousemove', (event) => {
    // Cập nhật vị trí của hình ảnh chân mèo theo con trỏ chuột
    pawEffect.style.left = `${event.clientX - 25}px`; // Điều chỉnh để căn giữa hình ảnh
    pawEffect.style.top = `${event.clientY - 25}px`;
});

document.addEventListener('mousedown', () => {
    // Hiển thị hình ảnh chân mèo khi nhấn chuột
    pawEffect.style.display = 'block';
    // Thay đổi con trỏ chuột
    document.body.style.cursor = 'none'; // Ẩn con trỏ chuột mặc định
});

document.addEventListener('mouseup', () => {
    // Ẩn hình ảnh chân mèo khi nhả chuột
    pawEffect.style.display = 'none';
    // Hiển thị lại con trỏ chuột mới
    document.body.style.cursor = 'url("./chan meo 1.png"), auto'; // Thay đổi con trỏ chuột trở lại
});

// Xóa hiệu ứng nếu chuột bị kéo ra khỏi cửa sổ
document.addEventListener('mouseleave', () => {
    pawEffect.style.display = 'none';
    document.body.style.cursor = 'url("./chan meo 1.png"), auto'; // Thay đổi con trỏ chuột trở lại
});