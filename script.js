const input = document.getElementById('email');
const form = document.getElementById('form');
const errorText = document.getElementById('error-text');
const submit = document.getElementById('submit');
const dismiss = document.getElementById('dismiss');
const mainPage = document.querySelector('.main');
const successPage = document.querySelector('.success-page');
const emailInput = document.getElementById('email-input');

submit.addEventListener("click", () => {
    let validEmail = /^[a-z].+\d*@[a-z]+.[a-z]+$/gm;
    if(!validEmail.test(input.value)){
        input.classList.add("error-state");
        errorText.style.display = "block";
    }
    else{
        input.classList.remove("error-state");
        errorText.style.display = "none";
        mainPage.style.display = "none";
        successPage.style.display = "block";
        emailInput.innerHTML = input.value;
        input.value = "";
    }
})

dismiss.addEventListener("click", () => {
    successPage.style.display = "none";
    mainPage.style.display = "block";
    
})



