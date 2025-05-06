document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const error = document.getElementById('error-msg');

    if (!email.includes('@') || !email.includes('.')) {
        error.textContent = '請輸入有效的電子郵件地址。';
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
        alert('模擬登入成功！實際不會送出資料'); // 可替換為其他處理
    }
});
