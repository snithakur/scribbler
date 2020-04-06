function openSignUpModal(){
    document.getElementById('signUpModal').style.display='block';
    document.getElementById('overlay').style.display='block';
    document.getElementById('signInModal').style.display='none';
    document.getElementById('overlay1').style.display='none';
}

function closeSignUpModal(){
    document.getElementById('signUpModal').style.display='none';
    document.getElementById('overlay').style.display='none';
}

function openSignInModal(){
    document.getElementById('signInModal').style.display='block';
    document.getElementById('overlay1').style.display='block';
}

function closeSignInModal(){
    document.getElementById('signInModal').style.display='none';
    document.getElementById('overlay1').style.display='none';
}