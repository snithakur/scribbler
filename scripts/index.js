//Display Sign UP Modal Code
function SignUP() {
    // Get the modal
    var modal = document.getElementById("signUpModal");
    var overlay = document.getElementById("overlay");
    // Get the button that opens the modal
    var btn = document.getElementById("signUpBtn");

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            overlay.style.display = "none";
        }
    };
}

//Display Sign UP Modal Code
function SignIN() {
    // Get the modal
    var modal = document.getElementById("signInModal");
    var overlay = document.getElementById("overlay1");
    // Get the button that opens the modal
    var btn = document.getElementById("signInBtn");

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            overlay.style.display = "none";
        }
    };
}