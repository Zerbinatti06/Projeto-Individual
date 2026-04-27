import {wrongInput, rightInput, opacity0, opacity100} from "./utils.js"

let inAnimation = false;
let email = document.getElementById('InEmail');
let pass = document.getElementById('InPassword');
let name = document.getElementById('InUsername')
let btn = document.getElementById('btn-login');

function check(){
    let regEmail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-0.-]+\\.[a-zA-Z]{2,}$");
    let regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$");
    
    
    if(!regEmail.test(email.value)){
        wrongInput('InEmail');
        console.log(regEmail.test(email))

    }else{
        rightInput('InEmail');
    }
    
    if(!regPass.test(pass.value)){
        wrongInput('InPassword');
    }else{
        rightInput('InPassword');
    }
}

window.addEventListener('input', () => {
    check();
})

function changeLoginRegister(type) {
    if (window.inAnimation) return;

    const loginSec = document.getElementById('login');
    const registerSec = document.getElementById('register');
    
    window.inAnimation = true;

    if (type === 'login') {
        loginSec.style.zIndex = '1';
        registerSec.style.transform = 'translateX(100%)';

        setTimeout(() => opacity100('login'), 1200);
        setTimeout(() => opacity0('register'), 2200);

        setTimeout(() => registerSec.style.transform = 'translateX(0)', 3000)
    } 
    else if (type === 'register') {
        loginSec.style.transform = 'translateX(-100%)';

        setTimeout(() => opacity100('register'), 1200);
        setTimeout(() => opacity0('login'), 2200);

        setTimeout(() => loginSec.style.transform = 'translateX(0)', 3000)
    }

    setTimeout(() => {
        window.inAnimation = false;
    }, 2200); 
}

let toRegister = document.getElementById('toRegister');
toRegister.addEventListener('click', () => {
    changeLoginRegister('register')
})
let toLogin = document.getElementById('toLogin');
toLogin.addEventListener('click', () => {
    changeLoginRegister('login')
})


