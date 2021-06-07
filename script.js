let mainScreen = document.createElement('div');
mainScreen.className = 'mainScreen';
document.body.append(mainScreen);

let divAuthorization = document.createElement('div');
divAuthorization.className = 'divAuthorization';
mainScreen.prepend(divAuthorization);

let divSignIn = document.createElement('div');
divSignIn.className = 'divSignIn';
divAuthorization.prepend(divSignIn);
divSignIn.textContent = 'Sign In';
divSignIn.onclick = function() {
    divSignInContent.style.display = 'block';
    divCreateAnAccountContent.style.display = 'none';
    divSignIn.style.borderBottom = '1px solid transparent';
    divCreateAnAccount.style.borderBottom = '1px solid #F2D5CE';
    divSignIn.style.borderRight = '1px solid transparent';
    divCreateAnAccount.style.borderLeft = '1px solid #F2D5CE';
}

let divCreateAnAccount = document.createElement('div');
divCreateAnAccount.className = 'divCreateAnAccount';
divAuthorization.append(divCreateAnAccount);
divCreateAnAccount.textContent = 'Create an account';
divCreateAnAccount.onclick = function() {
    divCreateAnAccountContent.style.display = 'block';
    divSignInContent.style.display = 'none';
    divCreateAnAccount.style.borderBottom = '1px solid transparent';
    divSignIn.style.borderBottom = '1px solid #F2D5CE';
    divCreateAnAccount.style.borderLeft= '1px solid transparent';
    divSignIn.style.borderRight = '1px solid #F2D5CE';
}

let divSignInContent = document.createElement('div');
divSignInContent.className = 'divSignInContent';
divAuthorization.append(divSignInContent);

let divCreateAnAccountContent = document.createElement('div');
divCreateAnAccountContent.className = 'divCreateAnAccountContent';
divAuthorization.append(divCreateAnAccountContent);

//Наполнение первого блока входа;

let divSignInEmailSubheader = document.createElement('div');
divSignInEmailSubheader.className = 'divSignInEmailSubheader';
divSignInEmailSubheader.textContent = 'Your Email';
divSignInContent.append(divSignInEmailSubheader);

let inputSignInEmail = document.createElement('input');
inputSignInEmail.className = 'inputSignInEmail';
inputSignInEmail.type = 'email';
divSignInContent.append(inputSignInEmail);

let divSignInEmailError = document.createElement('div');
divSignInEmailError.className = 'divSignInEmailError';
divSignInContent.append(divSignInEmailError);

//Проверка корректности email

inputSignInEmail.onblur = function () {
    if (!inputSignInEmail.value.includes('@')) {
        divSignInEmailError.innerHTML = 'Please write correct email';
        buttonSignIn.disabled = true;
        inputSignInEmail.style.border = '1px solid #F2D5CE';
    };
    if (!inputSignInEmail.value) {
        divSignInEmailError.innerHTML = '';
        buttonSignIn.disabled = true;
        inputSignInEmail.style.border = '1px solid transparent';
        inputSignInEmail.style.borderBottom = '1px solid #F2D5CE';
    }
};
inputSignInEmail.onfocus = function () {
    divSignInEmailError.innerHTML = '';
    inputSignInEmail.style.border = '1px solid transparent';
    inputSignInEmail.style.borderBottom = '1px solid #F2D5CE';
    inputSignInPassword.style.border = '1px solid transparent';
    inputSignInPassword.style.borderBottom = '1px solid #F2D5CE';
    divSignInError.textContent = '';
};

let divSignInPasswordSubheader = document.createElement('div');
divSignInPasswordSubheader.className = 'divSignInPasswordSubheader';
divSignInPasswordSubheader.textContent = 'Password';
divSignInContent.append(divSignInPasswordSubheader);

let inputSignInPassword = document.createElement('input');
inputSignInPassword.className = 'inputSignInPassword';
inputSignInPassword.type = 'password';
divSignInContent.append(inputSignInPassword);

inputSignInPassword.onfocus = function () {
    inputSignInPassword.style.border = '1px solid transparent';
    inputSignInPassword.style.borderBottom = '1px solid #F2D5CE';
    divSignInError.textContent = '';
    if (!inputSignInEmail.value) {
        inputSignInEmail.style.border = '1px solid transparent';
        inputSignInEmail.style.borderBottom = '1px solid #F2D5CE';
    }
};

let divSignInError = document.createElement('div');
divSignInError.className = 'divSignInError';
divSignInContent.append(divSignInError);

let buttonSignIn = document.createElement('button');
buttonSignIn.className = 'buttonSignIn';
buttonSignIn.textContent = 'Sign In';
divSignInContent.append(buttonSignIn);

let pForgotPassword = document.createElement('p');
pForgotPassword.className = 'pForgotPassword';
pForgotPassword.textContent = 'Forgot your password?';
divSignInContent.append(pForgotPassword);

//Проверяет, заполнены ли все поля ввода

buttonSignIn.onclick = function () {
    if (!inputSignInEmail.value || !inputSignInPassword.value) {
        buttonSignIn.disabled = true;
        inputSignInPassword.style.border = '1px solid white';
        inputSignInEmail.style.border = '1px solid white';
        divSignInError.textContent = 'Please fill in all the fields!'
    }
}

//Наполнение второго блока с регистрацией

let divCreateAnAccountEmailSubheader = document.createElement('div');
divCreateAnAccountEmailSubheader.className = 'divCreateAnAccountEmailSubheader';
divCreateAnAccountEmailSubheader.textContent = 'Your Email';
divCreateAnAccountContent.append(divCreateAnAccountEmailSubheader);

let inputCreateAnAccountEmail = document.createElement('input');
inputCreateAnAccountEmail.className = 'inputCreateAnAccountEmail';
inputCreateAnAccountEmail.type = 'email';
divCreateAnAccountContent.append(inputCreateAnAccountEmail);

let divCreateAnAccountEmailError = document.createElement('div');
divCreateAnAccountEmailError.className = 'divCreateAnAccountEmailError';
divCreateAnAccountContent.append(divCreateAnAccountEmailError);

//Проверка корректности email

inputCreateAnAccountEmail.onblur = function () {
    if (!inputCreateAnAccountEmail.value.includes('@')) {
        divCreateAnAccountEmailError.innerHTML = 'Please write correct email';
        buttonCreateAnAccount.disabled = true;
        inputCreateAnAccountEmail.style.border = '1px solid #F2D5CE';
    };
    if (!inputCreateAnAccountEmail.value) {
        divCreateAnAccountEmailError.innerHTML = '';
        buttonCreateAnAccount.disabled = true;
        inputCreateAnAccountEmail.style.border = '1px solid transparent';
        inputCreateAnAccountEmail.style.borderBottom = '1px solid #F2D5CE';
    }
};
inputCreateAnAccountEmail.onfocus = function () {
    divCreateAnAccountEmailError.innerHTML = '';
    inputCreateAnAccountEmail.style.border = '1px solid transparent';
    inputCreateAnAccountEmail.style.borderBottom = '1px solid #F2D5CE';
    divCheckingPasswords.textContent = '';
}

let divCreateAnAccountPasswordSubheader = document.createElement('div');
divCreateAnAccountPasswordSubheader.className = 'divCreateAnAccountPasswordSubheader';
divCreateAnAccountPasswordSubheader.textContent = 'Password';
divCreateAnAccountContent.append(divCreateAnAccountPasswordSubheader);

let inputCreateAnAccountPassword = document.createElement('input');
inputCreateAnAccountPassword.className = 'inputCreateAnAccountPassword';
inputCreateAnAccountPassword.type = 'password';
divCreateAnAccountContent.append(inputCreateAnAccountPassword);

let divCreateAnAccountRepeatPasswordSubheader = document.createElement('div');
divCreateAnAccountRepeatPasswordSubheader.className = 'divCreateAnAccountRepeatPasswordSubheader';
divCreateAnAccountRepeatPasswordSubheader.textContent = 'Repeat password';
divCreateAnAccountContent.append(divCreateAnAccountRepeatPasswordSubheader);

let inputCreateAnAccountRepeatPassword = document.createElement('input');
inputCreateAnAccountRepeatPassword.className = 'inputCreateAnAccountRepeatPassword';
inputCreateAnAccountRepeatPassword.type = 'password';
divCreateAnAccountContent.append(inputCreateAnAccountRepeatPassword);

let divCheckingPasswords = document.createElement('div');
divCheckingPasswords.className = 'divCheckingPasswords';
divCreateAnAccountContent.append(divCheckingPasswords);

//Проверка совпадения паролей

inputCreateAnAccountPassword.onblur = function () {
    if (inputCreateAnAccountPassword.value !== inputCreateAnAccountRepeatPassword.value) {
        divCheckingPasswords.innerHTML = 'You entered two different passwords. Please try again.'
        inputCreateAnAccountPassword.style.border = '1px solid #F2D5CE';
        inputCreateAnAccountRepeatPassword.style.border = '1px solid #F2D5CE';
        buttonCreateAnAccount.disabled = true;
    };
    if (!inputCreateAnAccountPassword.value || !inputCreateAnAccountRepeatPassword.value) {
        divCheckingPasswords.innerHTML = '';
        buttonCreateAnAccount.disabled = true;
        inputCreateAnAccountPassword.style.border = '1px solid transparent';
        inputCreateAnAccountPassword.style.borderBottom = '1px solid #F2D5CE';
        inputCreateAnAccountRepeatPassword.style.border = '1px solid transparent';
        inputCreateAnAccountRepeatPassword.style.borderBottom = '1px solid #F2D5CE';
    };
};
inputCreateAnAccountRepeatPassword.onblur = function () {
    if (inputCreateAnAccountPassword.value !== inputCreateAnAccountRepeatPassword.value) {
        divCheckingPasswords.innerHTML = 'You entered two different passwords. Please try again.'
        inputCreateAnAccountPassword.style.border = '1px solid #F2D5CE';
        inputCreateAnAccountRepeatPassword.style.border = '1px solid #F2D5CE';
        buttonCreateAnAccount.disabled = true;
    }
    if (!inputCreateAnAccountPassword.value || !inputCreateAnAccountRepeatPassword.value) {
        divCheckingPasswords.innerHTML = '';
        buttonCreateAnAccount.disabled = true;
        inputCreateAnAccountPassword.style.border = '1px solid transparent';
        inputCreateAnAccountPassword.style.borderBottom = '1px solid #F2D5CE';
        inputCreateAnAccountRepeatPassword.style.border = '1px solid transparent';
        inputCreateAnAccountRepeatPassword.style.borderBottom = '1px solid #F2D5CE';
    }
};
inputCreateAnAccountPassword.onfocus = function () {
    divCheckingPasswords.innerHTML = '';
    inputCreateAnAccountPassword.style.border = '1px solid transparent';
    inputCreateAnAccountPassword.style.borderBottom = '1px solid #F2D5CE';
    inputCreateAnAccountRepeatPassword.style.border = '1px solid transparent';
    inputCreateAnAccountRepeatPassword.style.borderBottom = '1px solid #F2D5CE';
    if (!inputCreateAnAccountEmail.value) {
        inputCreateAnAccountEmail.style.border = '1px solid transparent';
        inputCreateAnAccountEmail.style.borderBottom = '1px solid #F2D5CE';
    }
}

inputCreateAnAccountRepeatPassword.onfocus = function () {
    divCheckingPasswords.innerHTML = '';
    inputCreateAnAccountPassword.style.border = '1px solid transparent';
    inputCreateAnAccountPassword.style.borderBottom = '1px solid #F2D5CE';
    inputCreateAnAccountRepeatPassword.style.border = '1px solid transparent';
    inputCreateAnAccountRepeatPassword.style.borderBottom = '1px solid #F2D5CE';
    if (!inputCreateAnAccountEmail.value) {
        inputCreateAnAccountEmail.style.border = '1px solid transparent';
        inputCreateAnAccountEmail.style.borderBottom = '1px solid #F2D5CE';
    }
}

let buttonCreateAnAccount = document.createElement('button');
buttonCreateAnAccount.className = 'buttonCreateAnAccount';
buttonCreateAnAccount.textContent = 'Create an account';
divCreateAnAccountContent.append(buttonCreateAnAccount);

buttonCreateAnAccount.onclick = function () {
    if (!inputCreateAnAccountEmail.value || !inputCreateAnAccountPassword.value || !inputCreateAnAccountRepeatPassword.value) {
        buttonCreateAnAccount.disabled = true;
        inputCreateAnAccountPassword.style.border = '1px solid white';
        inputCreateAnAccountEmail.style.border = '1px solid white';
        inputCreateAnAccountRepeatPassword.style.border = '1px solid white';
        divCheckingPasswords.innerHTML = 'Please fill in all the fields!'
    };
}

