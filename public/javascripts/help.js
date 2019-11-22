function onLogin(event) {
    alert('login!!!!!!!!')
    console.log("onLogin:");
    console.log(event);
}

function onLogout() {
    SFIDWidget.init();

}