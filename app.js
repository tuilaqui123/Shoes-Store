$(function () {
    $("#display").load("./login-register/signUp.html");
});
function signIn() {
    $(function () {
        $("#display").load("./login-register/signIn.html");
    });
}
function signUp() {
    $(function () {
        $("#display").load("./login-register/signUp.html");
    });
}

function Next() {
    $(function () {
        $(".first").addClass("hidden");
    });
    $(function () {
        $(".second").removeClass("hidden");
    });
}

function SignUp() {
    $(function () {
        $(".noti").removeClass("hidden");
    });
}

function SignIn() {
    $(function () {
        $(".signed").removeClass("hidden");
    });
    $(function () {
        $(".unsigned").addClass("hidden");
    });
}

function cancelNoti() {
    $(function () {
        $(".noti").addClass("hidden");
    });
    $(function () {
        $("#display").load("./login-register/signIn.html");
    });
}