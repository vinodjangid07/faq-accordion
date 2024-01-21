const faqsQestions = document.querySelectorAll('.question');


faqsQestions.forEach((question) =>{
    question.addEventListener("click",() =>{
        question.nextElementSibling.classList.toggle('active-faq');
        const minus = question.querySelector('.minus');
        minus.classList.toggle('Minus-active');

    });
})