const popUp = document.getElementById('pop-up');
const closeBtn = document.getElementById('close-btn1');

closeBtn.addEventListener('click', () => {
    popUp.classList.remove('b-show');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>  {
       console.log(entry)
       if (entry.isIntersecting) {
        entry.target.classList.add('show2');
       }  else {
        entry.target.classList.remove('show2');
       }
    });
});
const hiddenElements = document.querySelectorAll('.hidden2');
hiddenElements.forEach((el) => observer.observe(el));