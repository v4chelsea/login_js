"use strict";
// MVC Pattern에서 Controller 부분

const users = {
    id: ["abc", "abc2", "abc3"],
    password: ["123", "1234", "12345"]
};

const output = {
    home :  (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    }
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            password =  req.body.password;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);

            if (users.password[idx] === password){
                return res.json({
                    success: true
                });
            }
        }
        return res.json({
            success: false,
            msg: "failure for login"
        });
    }
};

module.exports = {
    output,
    process
};