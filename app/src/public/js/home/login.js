"use strict";

// DOM Document Object Model / HTML에서 객체를 컨트롤 할 수 있게 해줌

console.log("HELLO");

const id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  login_btn = document.querySelector("button") 


login_btn.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        password : password.value
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        
    });
};