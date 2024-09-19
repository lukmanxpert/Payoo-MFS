const loginBtn = document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const mobileNumber = document.getElementById('mobile-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(mobileNumber);
    console.log(pinNumber);
    if (mobileNumber === '12345' && pinNumber === '1234') {
        window.location.href = './home.html'
    }else{
        alert("Wrong Number or Password");
    }
})