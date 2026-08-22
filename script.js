// MODEL
const model = {

    username: "admin",
    password: "1234",

    validateUser: function(user, pass) {

        if (user === this.username && pass === this.password) {
            return true;
        } else {
            return false;
        }
    }
};


// VIEW
const view = {

    showMessage: function(message) {
        document.getElementById("message").innerHTML = message;
    }
};


// CONTROLLER
const controller = {

    login: function() {

        let user = document.getElementById("username").value;
        let pass = document.getElementById("password").value;

        if (model.validateUser(user, pass)) {
            view.showMessage("Login Successful!");
        } else {
            view.showMessage("Invalid Username or Password!");
        }
    }
};