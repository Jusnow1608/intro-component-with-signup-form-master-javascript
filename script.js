const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    
    const firstnameValue = firstname.value.trim(); 
    const lastnameValue = lastname.value.trim(); 
    const emailValue = email.value.trim(); 
    const passwordValue = password.value.trim(); 
    
    if (firstnameValue === '') {
        setErrorFor(firstname, "First Name cannot be empty");
    } else {
        setSuccessFor(firstname);
    }

     if (lastnameValue === '') {
        setErrorFor(lastname, "Last Name cannot be empty");
    } 
    else {
        setSuccessFor(lastname);
    }

    if (emailValue === '') {
        setErrorFor(email, "Email Address cannot be empty");
        }
    else if (!isEmail(emailValue)){
        setErrorFor(email, "Looks like this is not an email");
    }
     else {
        setSuccessFor(email);
    }

     if (passwordValue === '') {
        setErrorFor(password, "Password cannot be empty");
    } else {
        setSuccessFor(password);
    }
    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('.error-text');
    
    small.innerText = message; 
    formControl.classList.add('error');

    input.setAttribute('aria-invalid', 'true');
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('.error-text');

    formControl.classList.remove('error');
    if (small) small.innerText = '';

    input.removeAttribute('aria-invalid');
}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}