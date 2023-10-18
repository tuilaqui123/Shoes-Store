Home();

Shoe();

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
        // $("#display").load("./login-register/signIn.html");
        $.ajax({
            url: "./login-register/signIn.html",
            dataType: "html",
            success: function (data) {
                $("#display").html(data);
            }
        });
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
function favouriteShoe() {
    $(function () {
        $(".favouriteShoe").toggleClass("fa-solid");
        $(".favouriteShoe").toggleClass("fa-regular");
    });
}

function inc() {
    var quantity = document.getElementById("quantity");
    ++quantity.value
}

function dec() {
    var quantity = document.getElementById("quantity");
    if (quantity.value > 1) --quantity.value
}

function choseImg(clickedImg) {
    const images = document.querySelectorAll('.asideImg');
    images.forEach(img => img.classList.remove('chose'));

    clickedImg.classList.add('chose');

    const imgDisplay = document.getElementById('imgDisplay');

    if (clickedImg.classList.contains('chose'))
        imgDisplay.src = clickedImg.getAttribute('src');
    // alert(clickedImg.getAttribute('src'));
}
