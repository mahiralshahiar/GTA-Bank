document.getElementById('btn-submit').addEventListener('click', function () {
    // .value add korte hobe input field er somoy
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // ekhane password paua jabe
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // user id pass check 
    if (email === 'test@gmail.com' && password === 'test') {
        window.location.href = './bank.html'
    }
    else {
        alert('FBI: invalid User')
    }


})

