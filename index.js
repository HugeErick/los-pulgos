const popUp = document.getElementById('pop-up');
const closeBtn = document.getElementById('close-btn1');

closeBtn.addEventListener('click', () => {
    popUp.classList.remove('b-show');
});
