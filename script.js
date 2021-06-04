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
    divCreateAnAccount.style.borderBottom = '1px solid #ffe7ec';
    divSignIn.style.borderRight = '1px solid transparent';
    divCreateAnAccount.style.borderLeft = '1px solid #ffe7ec';
}

let divCreateAnAccount = document.createElement('div');
divCreateAnAccount.className = 'divCreateAnAccount';
divAuthorization.append(divCreateAnAccount);
divCreateAnAccount.textContent = 'Create an account';
divCreateAnAccount.onclick = function() {
    divCreateAnAccountContent.style.display = 'block';
    divSignInContent.style.display = 'none';
    divCreateAnAccount.style.borderBottom = '1px solid transparent';
    divSignIn.style.borderBottom = '1px solid #ffe7ec';
    divCreateAnAccount.style.borderLeft= '1px solid transparent';
    divSignIn.style.borderRight = '1px solid #ffe7ec';
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
inputSignInEmail.style.type = 'email';
divSignInContent.append(inputSignInEmail);

let divSignInPasswordSubheader = document.createElement('div');
divSignInPasswordSubheader.className = 'divSignInPasswordSubheader';
divSignInPasswordSubheader.textContent = 'Password';
divSignInContent.append(divSignInPasswordSubheader);

let inputSignInPassword = document.createElement('input');
inputSignInPassword.className = 'inputSignInPassword';
inputSignInPassword.style.type = 'password';
divSignInContent.append(inputSignInPassword);

let buttonSignIn = document.createElement('button');
buttonSignIn.className = 'buttonSignIn';
buttonSignIn.textContent = 'Sign In';
divSignInContent.append(buttonSignIn);

let pForgotPassword = document.createElement('p');
pForgotPassword.className = 'pForgotPassword';
pForgotPassword.textContent = 'Forgot your password?';
divSignInContent.append(pForgotPassword);

//Наполнение второго блока с регистрацией

let divCreateAnAccountEmailSubheader = document.createElement('div');
divCreateAnAccountEmailSubheader.className = 'divCreateAnAccountEmailSubheader';
divCreateAnAccountEmailSubheader.textContent = 'Your Email';
divCreateAnAccountContent.append(divCreateAnAccountEmailSubheader);

let inputCreateAnAccountEmail = document.createElement('input');
inputCreateAnAccountEmail.className = 'inputCreateAnAccountEmail';
inputCreateAnAccountEmail.style.type = 'email';
divCreateAnAccountContent.append(inputCreateAnAccountEmail);

let divCreateAnAccountPasswordSubheader = document.createElement('div');
divCreateAnAccountPasswordSubheader.className = 'divCreateAnAccountPasswordSubheader';
divCreateAnAccountPasswordSubheader.textContent = 'Password';
divCreateAnAccountContent.append(divCreateAnAccountPasswordSubheader);

let inputCreateAnAccountPassword = document.createElement('input');
inputCreateAnAccountPassword.className = 'inputCreateAnAccountPassword';
inputCreateAnAccountPassword.style.type = 'password';
divCreateAnAccountContent.append(inputCreateAnAccountPassword);

let divCreateAnAccountRepeatPasswordSubheader = document.createElement('div');
divCreateAnAccountRepeatPasswordSubheader.className = 'divCreateAnAccountRepeatPasswordSubheader';
divCreateAnAccountRepeatPasswordSubheader.textContent = 'Repeat password';
divCreateAnAccountContent.append(divCreateAnAccountRepeatPasswordSubheader);

let inputCreateAnAccountRepeatPassword = document.createElement('input');
inputCreateAnAccountRepeatPassword.className = 'inputCreateAnAccountRepeatPassword';
inputCreateAnAccountRepeatPassword.style.type = 'password';
divCreateAnAccountContent.append(inputCreateAnAccountRepeatPassword);

let buttonCreateAnAccount = document.createElement('button');
buttonCreateAnAccount.className = 'buttonCreateAnAccount';
buttonCreateAnAccount.textContent = 'Create an account';
divCreateAnAccountContent.append(buttonCreateAnAccount);

