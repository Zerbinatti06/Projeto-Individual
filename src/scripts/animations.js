import {displayflex, fillPage, displaynone, nextPage, opacity0, opacity100} from './utils.js';

let page = 1;

window.addEventListener('keydown', (e) => {
    fillPage();
    opacity0('intro-title');
    opacity0('intro-instruction');
    setInterval(() => {
        if(page == 1){
            page = nextPage(page);
        }
    }, 800);
    setInterval(() => {
        opacity0('introduction-title');
    }, 1600);
    setInterval(() => {
        if(page == 2){
            opacity100('introduction');
            displayflex('introduction')
        }
    }, 2800);
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

let curtainsContainer = document.querySelector('.curtains-containter');
curtainsContainer.addEventListener('mouseover', () => curtainsAnimation('out'));
curtainsContainer.addEventListener('mouseout', () => curtainsAnimation('in'));


