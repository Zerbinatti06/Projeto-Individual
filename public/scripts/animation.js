let curtain = document.querySelector(".curtain");
let sec1 = document.getElementById('sec1')
let sec2 = document.getElementById('sec2')

let page = 0

window.addEventListener('keypress', () => {
    if(page == 0){
        curtain.style.left = "0"; 
        setTimeout(() => curtain.style.left = "100%", 1000)
    
        setTimeout(() => {
            sec1.classList.add('none');
            sec2.classList.remove('none')
            sec2.style.display = 'flex';
        }, 500)

        page++
    }
})

const modals = document.querySelectorAll('.modal')

function openModal(id){
    let modalContainer = document.getElementById('modalContainer');
    modalContainer.classList.remove("none")
    
    Array.from(modals).forEach((modal, index) => {
        if (index == id) {
            modal.classList.remove('none')
        }
        else {
            modal.classList.add('none')
        }
    })
}

function closeModal(){
    let modalContainer = document.getElementById('modalContainer');

    modalContainer.classList.add('none')
}
