const main = document.getElementById('main');

function nextPage(page){
    main.style.transform = `translateX(-${page * 100}vw)`;
    page++;

    return page;
}

function fillPage(){
    let animation = document.getElementById('animation');
    animation.style.transform = 'scale(50)';
}

function opacity0(id){
    let element = document.getElementById(id);
    element.style.opacity = '0';
}

function opacity100(id){
    let element = document.getElementById(id);
    element.style.opacity = '100';
}

function displaynone(id){
    let element = document.getElementById(id);
    element.style.display = 'none';
}

function displayflex(id){
    let element = document.getElementById(id);
    element.style.display = 'flex';
}

function wrongInput(id){
    let element = document.getElementById(id);

    element.style.border = '2px solid red';
    element.style.color = 'red';
}

function rightInput(id){
    let element = document.getElementById(id);

    element.style.border = 'none';
    element.style.color = 'black';
}

export { nextPage, fillPage, opacity0, opacity100, displaynone, displayflex, wrongInput, rightInput};