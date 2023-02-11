document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    if(email=='tanvir' && pass==='tanvir'){
        window.location.href='bank.html';
    }
    else{
        alert('Invslid user');
    }
})
