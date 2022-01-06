Moralis.initialize("nNMbLT3fFZ3iMimgQZdK9AAo1ARjoEjjehalvcw3"); //app id
Moralis.serverURL = "https://we9zvbuw0sy1.usemoralis.com:2053/server";

async function login(){
    Moralis.Web3.authenticate().then(function (user){
        user.set("name", document.getElementById('username')).value;
        user.set("email", document.getElementById('email')).value;
        user.save();
        desactivateControls();
    })
}

function desactivateControls(){
    document.getElementById('login').setAttribute("disabled", null);
    document.getElementById('username').setAttribute("disabled", null);
    document.getElementById('email').setAttribute("disabled", null);
}