const modal= document.querySelector('.modal');
const overlay=document.querySelector('.overlay');

function openModal(){
    console.log('Modal is open');
    modal.classList.add("active");
    overlay.classList.add("overlayActive");
}

function closeModal(){
    modal.classList.remove("active");
    overlay.classList.remove("overlayActive");
}