// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


document.getElementById("run").addEventListener("click", () => {

    // your code here


    function checkPassword(form) {
        password1 = form.pass-one.value;
        password2 = form.pass-two.value;

        // If password not entered
        if (password1 == '')
            alert ("Please enter Password");
              
        // If confirm password not entered
        else if (password2 == '')
            alert ("Please enter confirm password");
              
        // If Not same return False.    
        else if (password1 != password2) {
            document.getElementById("pass-one", "pass-two").style.borderColor = "red";
            return false;
        }

        // If same return True.
        else{
            alert("Password Match: Thanks!")
            return true;
        }
    }
checkPassword;

})