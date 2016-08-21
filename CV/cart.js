/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var cart = new Array();
var getCart = function () {
    if ('Cart' in localStorage)
        cart = JSON.parse(localStorage.getItem('Cart'));
    else{
        cart = new Array();
        localStorage.setItem('Cart', JSON.stringify(cart));
    }
    return cart;
};

var addItem = function (id, quantity) {
    cart = JSON.parse(localStorage.getItem('Cart'));
    cart[id] = quantity;
    localStorage.setItem('Cart', JSON.stringify(cart));

};

var addItems = function (items) {
    cart = JSON.parse(localStorage.getItem('Cart'));
    for (var k in items) {
        if (items.hasOwnProperty(k)) {
            cart[k] = items[k];
        }
    }
    localStorage.setItem('Cart', JSON.stringify(cart));
};

var save = function () {
    var promise = Reviewer.review(cart);
    promise.then(function (value) {
        cart = value;
    });
    localStorage.setItem('Cart', JSON.stringify(cart));
};

var remove = function (id) {
    cart = JSON.parse(localStorage.getItem('Cart'));
    delete cart[id];
    localStorage.setItem('Cart', JSON.stringify(cart));
};

var clear = function () {
    
    cart = new Array();
    window.localStorage.clear();
};

var persist = function () {
    localStorage.setItem('Cart', JSON.stringify(cart));
};

var changeQuantity = function (id, newquantity) {
    var cart = JSON.parse(localStorage.getItem('Cart'));
    cart[id] = newquantity;
    localStorage.setItem('Cart', JSON.stringify(cart));
};

var refresh = function () {
    $(function () {

        $(window).bind('storage', function (e) {
            if(confirm("Cart has been updated. To refresh the page press OK!!"))
                location.reload(true);
        });
    });
};


