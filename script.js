function validate()
{
    let username=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let cp=document.getElementById("cpassword").value;

    checkusername(username);
    checkemail(email);
    checkpassword(password);
    checkcp(cp,password);

}

function checkusername(username){
    if(username.length>7){
        document.getElementById("username").classList.add('success'); 
        document.getElementById("username").classList.replace('error','success');
        document.getElementById("username_error").innerHTML='';
    }
    else{
        document.getElementById("username").classList.add('error');
        document.getElementById("username_error").innerHTML="username must be >=8 letters";
    }
}


function checkemail(email){
    if(email.length>7 && email.includes('@gmail.com')){
        document.getElementById("email").classList.add('success'); 
        document.getElementById("email").classList.replace('error','success');
        document.getElementById("email_error").innerHTML='';
    }
    else{
        document.getElementById("email").classList.add('error');
        document.getElementById("email_error").innerHTML="Invalid Email format (8letters or more)";
    }
}

function checkpassword(password){
    if(password.length>7 && password.includes('.')){
        document.getElementById("password").classList.add('success'); 
        document.getElementById("password").classList.replace('error','success');
        document.getElementById("password_error").innerHTML='';
    }
    else{
        document.getElementById("password").classList.add('error');
        document.getElementById("password_error").innerHTML="Password lenght >7 and must include '.'(dot symbol)";
    }
}

function checkcp(cp,password){
    if(cp!='' && cp == password){
        document.getElementById("cpassword").classList.add('success'); 
        document.getElementById("cpassword").classList.replace('error','success');
        document.getElementById("cpassword_error").innerHTML='';
    }
    else{
        document.getElementById("cpassword").classList.add('error');
        document.getElementById("cpassword_error").innerHTML="Password does not match" ;
    }
}


