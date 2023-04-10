function LoggingIn() {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if (username == "" && password == "") {
    document.getElementById("missing").innerHTML = ("Please put in your username and password.");
    console.log("LOG IN ERROR");
    return false
} else if (username == "") {
    document.getElementById("missing").innerHTML = ("Please put in your username.");
    console.log("LOG IN ERROR");
    return false

} else if (password == "") {
    document.getElementById("missing").innerHTML = ("Please put in your password.");
    console.log("LOG IN ERROR");
    return false
    
} else {
    document.getElementById("missing").innerHTML = ("successful login");
    console.log("log in success!");
}
}
