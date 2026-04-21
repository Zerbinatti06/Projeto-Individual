import {displayflex, fillPage, displaynone, nextPage, opacity0, opacity100} from './utils.js';

let page = 1;

window.addEventListener('keydown', (e) => {
    fillPage();
    opacity0('intro-title');
    opacity0('intro-instruction');
    setTimeout(() => {
        if(page == 1){
            page = nextPage(page);
        }
    }, 1000);
    setTimeout(() => {
        opacity0('introduction-title');
    }, 2000);
    setTimeout(() => {
        if(page == 2){
            opacity100('introduction');
        }
    }, 3000);
});

function curtainsAnimation(direction){
    let curtainLeft = document.querySelector('.curtain-left');
    let curtainRight = document.querySelector('.curtain-right'); 

    if(direction == 'in'){
        curtainLeft.style.transform = 'translateX(0)';
        curtainRight.style.transform = 'translateX(0)';
        return;
    }if(direction == 'out'){ 
        curtainLeft.style.transform = 'translateX(-100%)';
        curtainRight.style.transform = 'translateX(100%)';
        return;
    }
}

let curtainsContainer = document.querySelector('.curtains-container');
let click = 0;
curtainsContainer.addEventListener('click', () => {
    if(click == 0){
        curtainsAnimation('out');
        setTimeout(() => {
            displaynone('curtains-container');
        }, 800);
        setTimeout(() => {
            opacity100('btn-next');
        }, 2000);
    }
    click++;
});

let btn = document.getElementById('btn-next');
btn.addEventListener('click', () => {
    if(click == 1){
        displayflex('curtains-container');
        setTimeout(() => {
            curtainsAnimation('in');
        }, 100);
        setTimeout(() => {
            page = nextPage(page);
        }, 1000);
    }
});

