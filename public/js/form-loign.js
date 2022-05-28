const togglePassword = document.querySelector("#togglePassword");
const inputPassword = document.querySelector("#password");
const regexEmail = /^\w+@[a-zA-Z]{3,}\.com$/i;
const login = document.querySelector("#submit");

const viewPassword = () => {
    togglePassword.classList.toggle('fa-eye-slash')

    if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
    } else {
        inputPassword.type = 'password';
    }
}
togglePassword.addEventListener('click', viewPassword);


login.addEventListener('click', () =>{
   setTimeout(() =>{
     location.assign('/index.html')
   },1000)
})


