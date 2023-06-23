const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form-container");
formCloseBtn = document.querySelector(".form-close");
signUpBtn = document.querySelector("#signup");
loginBtn = document.querySelector("#login");
submitSignBtn = document.querySelector("#sign-submit");
submitLogBtn=document.querySelector("#log-submit");

//retrieves username + pfp in navbar
accountBtn=document.querySelector(".user-profile");


//Sample existing users
var reg_users={
    anne_s:"sulit123",
    bella_t:"torio123",
    zhoe_g:"gon123",
    mar_v:"villa123",
    jack_e:"eli123"
};
// Allows user to log in
submitLogBtn.addEventListener("click",async(e)=>{
    e.preventDefault();

    //retrieves username
    let login_un=document.querySelector("#login-username").value;
    //retrieves password
    let login_pw=document.querySelector("#login-pw").value;

    //retrieves div for displaying error message
    let errormsg=document.getElementById("login-error-msg");

    if(reg_users.hasOwnProperty(login_un)){
        //console.log("username exists. valid log in");
        if(reg_users[login_un]==login_pw){
            errormsg.textContent="";
            //hides log in page
            home.classList.remove("show");
            accountBtn.classList.remove("hidden");
            formOpenBtn.classList.add("hidden");

          
        }
        else{
            errormsg.textContent="The password you've entered is incorrect.";
        }
      
    }
    else{
        errormsg.textContent="Username does not exist";
    }

});

// Allows user to create an account
submitSignBtn.addEventListener("click", async(e)=>{
    e.preventDefault();
    //console.log("working");

    //retrieves username
    let username=document.querySelector("#username").value;
    console.log(`${username}`);

    //retrieves password and confirmation password
    let pw=document.querySelector(".pw").value;
    let confirm_pw=document.querySelector(".confirm-pw").value;
    //console.log(pw);
    //console.log(confirm_pw);

    //retrieves div for displaying error message
    let errormsg=document.getElementById("sign-error-msg");

    if(reg_users.hasOwnProperty(username)){
        errormsg.textContent="Username is already taken";
    }
    else{
        //console.log("username not taken");
        errormsg.textContent="";

        if(pw==confirm_pw){
            //console.log("same passwords");
            reg_users[username]=pw;
            console.log(reg_users);
        }
        else{
            errormsg.textContent="Passwords do not match.";
        }
    } 
});



// shows the login button and exits it when X is pressed
formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

// switches between login and register forms through the Login and Signup belo
signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});