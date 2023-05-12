const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const main = document.getElementById('main');
const sign =document.getElementById('signin')

signUpButton.addEventListener('click',() => {
    main.classList.add("right-panel-active");
});
signInButton.addEventListener('click',() => {
    main.classList.remove("right-panel-active");
});

sign.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Add code to authenticate the user and redirect to another page
    if (authenticateUser()) {
      window.location.href = "welcome.html";
    }
  });