let mainScreen = document.createElement('div');
mainScreen.className = 'mainScreen';
document.body.append(mainScreen);

let divAuthorization = document.createElement('div');
divAuthorization.className = 'divAuthorization';
mainScreen.prepend(divAuthorization);

let divSignIn = document.createElement('div');
divSignIn.className = 'divSignIn';
divAuthorization.prepend(divSignIn);

let headerSignIn = document.createElement('p');
headerSignIn.classname = 'headerSignIn';
headerSignIn.innerHTML = 'Sign In';
divSignIn.prepend(headerSignIn);

let divCreateAnAccount = document.createElement('div');
divCreateAnAccount.className = 'divCreateAnAccount';
divAuthorization.append(divCreateAnAccount);

let headerCreateAnAccount = document.createElement('p');
headerCreateAnAccount.classname = 'headerCreateAnAccount';
headerCreateAnAccount.innerHTML = 'Create an account';
divCreateAnAccount.prepend(headerCreateAnAccount);

let divSignInContent = document.createElement('div');
divSignInContent.className = 'divSignInContent';
divAuthorization.append(divSignInContent);
