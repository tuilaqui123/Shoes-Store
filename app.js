Home();

Fav();

function shoppingCart() {
    $(function () {
        $("#display").load("./shopping-cart/cart.html");
        $('html, body').animate({
            scrollTop: $("#nav-head").offset().top
        }, 0);
    });
}

function Fav() {
    $(function () {
        $("#display").load("./home-page/fav.html");
        $('html, body').animate({
            scrollTop: $("#nav-head").offset().top
        }, 0);
    });
}

function BrandItem() {
    $(function () {
        $("#display").load("./home-page/brandItem.html");
        $('html, body').animate({
            scrollTop: $("#nav-head").offset().top
        }, 0);
    });
}

function checkOut() {
    $(function () {
        $("#display").load("./shopping-cart/checkout.html");
        $('html, body').animate({
            scrollTop: $("#nav-head").offset().top
        }, 0);
    });
}

function Shipping() {
    $(function () {
        $("#display").load("./shopping-cart/shipping.html");
        $('html, body').animate({
            scrollTop: $("#nav-head").offset().top
        }, 0);
    });
}

function Shoe() {
    $(function () {
        $("#display").load("./shoe/shoe.html");
        $('html, body').animate({
            scrollTop: $("#nav-head").offset().top
        }, 0);
    });

}

function orderDetail() {
    $(function () {
        $("#display").load("./shopping-cart/orderDetail.html");
        $('html, body').animate({
            scrollTop: $("#nav-head").offset().top
        }, 0);
    });
}

function Home() {
    $(function () {
        $("#display").load("./home-page/home.html");
        $('html, body').animate({
            scrollTop: $("#nav-head").offset().top
        }, 0);
    });
}

function signIn() {
    $(function () {
        $("#display").load("./login-register/signIn.html");
        $('html, body').animate({
            scrollTop: $("#nav-head").offset().top
        }, 0);
    });
}
function signUp() {
    $(function () {
        $("#display").load("./login-register/signUp.html");
        $('html, body').animate({
            scrollTop: $("#nav-head").offset().top
        }, 0);
    });
}

function Account() {
    $(function () {
        $("#display").load("./account/account.html");
        $('html, body').animate({
            scrollTop: $("#nav-head").offset().top
        }, 0);
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

function userMenu() {
    $(function () {
        $(".userMenu").toggleClass("hidden");
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

function LogOut() {
    $(function () {
        $(".signed").addClass("hidden");
    });
    $(function () {
        $(".unsigned").removeClass("hidden");
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

function check() {
    $(function () {
        $(".checked").toggleClass("hidden");
    });
    $(function () {
        $(".uncheck").toggleClass("hidden");
    });
}

//-----------------------
