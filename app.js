Home();

function shoppingCart() {
    $(function () {
        $("#display").load("./shopping-cart/cart.html");
    });
}

function Fav() {
    $(function () {
        $("#display").load("./home-page/fav.html");
    });
}

function BrandItem() {
    $(function () {
        $("#display").load("./home-page/brandItem.html");
    });
}

function checkOut() {
    $(function () {
        $("#display").load("./shopping-cart/checkout.html");
    });
}

function Shipping() {
    $(function () {
        $("#display").load("./shopping-cart/shipping.html");
    });
}

function Shoe() {
    $(function () {
        $("#display").load("./shoe/shoe.html");
    });
}

function orderDetail() {
    $(function () {
        $("#display").load("./shopping-cart/orderDetail.html");
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

//-----------------------

$(document).ready(function () {
    // Click event to load HTML content into the main div

    $("#display").load("your-content.html", function () {
        // Once content is loaded, scroll to the top
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

});