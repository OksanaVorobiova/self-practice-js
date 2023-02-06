const refs = {
    form: document.querySelector('.form'),
    submitBtn: document.querySelector('button'),
    message: document.querySelector('.message'),
    radioBtns: document.querySelectorAll('input[type="radio"]'),
}

const { form, submitBtn, message, radioBtns } = refs;

form.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault();
    radioBtnsCycle();
}

function radioBtnsCycle() {
    for (const btn of radioBtns) {
        if (btn.checked) {
            message.innerHTML = btn.value;
       }
   } 
}