


var userName = document.querySelector('#userName');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var signup = document.querySelector('.signup');
var navBtn = document.querySelector('.nav-btn');
var logout = document.querySelector('.logout');
var del = document.querySelector('.delete');
var pUp = document.querySelector('.pUp');
var pIn = document.querySelector('.pIn');


navBtn.addEventListener('click', function () {
    document.querySelector('.nav ul').classList.toggle('d-none');
})

logout.addEventListener('click', function () {
    window.location.href = 'index.html';
})


var log = [];
var reg = [];

if (localStorage.data != null) {
    reg = JSON.parse(localStorage.getItem('data'));
    console.log(reg)
}


function err() {
    var arr = document.querySelectorAll('input');
    for (var i = 0; i < arr.length; i++) {
        arr[i].style.outline = '1px solid red'
    }
}


function logup() {
    var info = {
        userName: userName.value,
        email: email.value,
        password: password.value,
    }

    if (userName.value != '' && email.value != '' && password.value != '') {

        reg.push(info);
        console.log(reg);
        localStorage.setItem('data', JSON.stringify(reg));

    } else {
        err();
    }
    clearInput();
}

function login() {
    var info = {
        email: email.value,
        password: password.value,
    }

    if (email.value != '' && password.value != '') {

        log.push(info);
        console.log(log);

        for (var i = 0; i < reg.length; i++) {
            if (log[log.length - 1].email === reg[i].email) {
                window.location.href = 'hello.html'
            }
        }
    } else {
        err()
    }
    clearInput()
}



document.querySelector('.signup').addEventListener('click', function () {

    userName.toggleAttribute('required')
    userName.classList.toggle('d-none');
    btn1.classList.toggle('d-none');
    btn2.classList.toggle('d-none');
    pUp.classList.toggle('d-none');
    pIn.classList.toggle('d-none');

})

document.querySelector('.signIn').addEventListener('click', function () {
    userName.toggleAttribute('required')
    userName.classList.toggle('d-none');
    btn1.classList.toggle('d-none');
    btn2.classList.toggle('d-none');
    pUp.classList.toggle('d-none');
    pIn.classList.toggle('d-none');
})


function clearInput() {
    userName.value = null;
    email.value = null
    password.value = null
}



























