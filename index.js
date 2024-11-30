
var inputNameInput = document.getElementById('inputName');
var inputEmail = document.getElementById('inputEmail');
var inputPass = document.getElementById('inputPass');
var loginBtn = document.getElementById('loginBtn');
var signUpBtn = document.getElementById('signUpBtn');
var signUpText = document.getElementById('signUpText');
var signInText = document.getElementById('signInText');

function valedateForm(element) {
    var regex = {
        inputName: /^[A-Z]\w{5,15}$/,
        inputEmail: /^[A-Z]\w{3,10}[0-9]{2,5}(@)(gmail|yahoo){1}(.com)$/,
        inputPass: /^.{8,15}$/

    }
    // console.log(regex[element.id]);
    if (regex[element.id].test(element.value)) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        element.nextElementSibling.classList.add('d-none');
    } else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        element.nextElementSibling.classList.remove('d-none');
    }
}

signUpText.addEventListener('click', function () {
    console.log('hello');
    signInText.classList.remove('d-none');
    signUpText.classList.add('d-none');
    signUpBtn.classList.add('d-none');
    loginBtn.classList.remove('d-none');
    inputNameInput.classList.remove('d-none');

})

signInText.addEventListener('click', function () {
    console.log('hello');
    signInText.classList.add('d-none');
    signUpText.classList.remove('d-none');
    signUpBtn.classList.remove('d-none');
    loginBtn.classList.add('d-none');
    inputNameInput.classList.add('d-none');

});

loginBtn.addEventListener('click', function () {
    if (inputPass.classList.contains('is-valid') &&
        inputEmail.classList.contains('is-valid')) {
        loginBtn.nextElementSibling.classList.add('d-none')
    }
    else {
        loginBtn.nextElementSibling.classList.remove('d-none')
    }
})
signUpBtn.addEventListener('click', function () {
    if (inputPass.classList.contains('is-valid') &&
        inputEmail.classList.contains('is-valid') &&
        inputNameInput.classList.contains('is-valid')) {
        signUpBtn.nextElementSibling.classList.add('d-none')
    }
    else {
        signUpBtn.nextElementSibling.classList.remove('d-none')
    }
})
