let subscribeFormEl = document.getElementById("subscribeForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById('email');
let emailErrMsg = document.getElementById("emailErrMsg");

let errMsg = "Required*";

nameEl.addEventListener("blur",function(event){
    if(event.target.value === ''){
        nameErrMsgEl.textContent = errMsg;
    }
    else{
        nameErrMsgEl.textContent = "";
    }
})

emailEl.addEventListener('blur',function(event){
    if(event.target.value === ''){
        emailErrMsg.textContent = errMsg;
    }else{
        emailErrMsg.textContent = "";
    }
})


subscribeFormEl.addEventListener("submit",function(event){
    event.preventDefault();
});