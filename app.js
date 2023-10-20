Home();

function routerPage(url) {
    document.getElementById('frame').src = url
    document.addEventListener("DOMContentLoaded", function () {
        var iframe = document.getElementById("frame");
        iframe.addEventListener("load", function () {
            var iframeDocument = iframe.contentDocument;
            if (iframeDocument) {
                var contentHeight = iframeDocument.body.scrollHeight;
                document.getElementById('display').style.height = contentHeight + 'px';
            }
        });
    });
}

function shoppingCart() {
    routerPage('./shopping-cart/cart.html')
}

function Fav() {
    routerPage('./home-page/fav.html')
}

function BrandItem() {
    routerPage('./home-page/brandItem.html')
}

function BrandItemIframe() {
    location.href = '../home-page/brandItem.html'
    window.parent.document.getElementById('header').scrollIntoView(true);
}

function CheckOut() {
    location.href = '../shopping-cart/checkout.html'
    window.parent.document.getElementById('header').scrollIntoView(true);
}

function Shipping() {
    routerPage("./shopping-cart/shipping.html")
}

function Shoe() {
    location.href = '../shoe/shoe.html'
    window.parent.document.getElementById('header').scrollIntoView(true);
}

function orderDetail() {
    location.href = '../shopping-cart/orderDetail.html'
    window.parent.document.getElementById('header').scrollIntoView(true);
}

function Home() {
    routerPage('./home-page/home.html')
}

function signIn() {
    routerPage('./login-register/signIn.html')
}

function signUp() {
    routerPage('./login-register/signUp.html')

}

function Account() {
    routerPage('./account/account.html')
}

//----------------------------------------

function SignUp() {
    $(function () {
        $(".noti").removeClass("hidden");
        window.parent.document.getElementById('header').scrollIntoView(true);
    });
}

function userMenu() {
    $(function () {
        $(".userMenu").toggleClass("hidden");
    });
}

function SignIn() {
    location.href = "../home-page/home.html"
    window.parent.document.getElementById('header').scrollIntoView(true);
}

function LogOut() {
    $(function () {
        $(".signed").addClass("hidden");
    });
    $(function () {
        $(".unsigned").removeClass("hidden");
    });
    routerPage('./home-page/home.html')
}

function cancelNoti() {
    location.href = '../login-register/signIn.html';
    window.parent.document.getElementById('header').scrollIntoView(true);
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
