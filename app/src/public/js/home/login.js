"use strict";

// DOM Document Object Model / HTML에서 객체를 컨트롤 할 수 있게 해줌

const id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  login_btn = document.querySelector("button") 

login_btn.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        password : password.value
    };

    fetch()l
};