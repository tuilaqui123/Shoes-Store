Home();

checkOut();


function shoppingCart() {
    $(function () {
        $("#display").load("./shopping-cart/cart.html");
    });
}

function checkOut() {
    $(function () {
        $("#display").load("./shopping-cart/checkout.html");
    });
}

function Home() {
    $(function () {
        $("#display").load("./home-page/home.html");
    });
}

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

function Account() {
    $(function () {
        $("#display").load("./account/account.html");
    });
}

//----------------------------------------
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
    $(function () {
        $("#display").load("./home-page/home.html");
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