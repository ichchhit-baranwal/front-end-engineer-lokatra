/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('services.cart', [])
        .service('Cart', ['$rootScope', 'Reviewer', function ($rootScope, Reviewer) {
                var cart=new Array();
                var getCart = function () {
                    cart = JSON.parse(localStorage['Cart']);
                    return cart;
                };

                var addItem = function (id, quantity) {
                    cart = JSON.parse(localStorage['Cart']);
                    cart[id] = quantity;
                    localStorage['Cart'] = JSON.stringify(cart);

                };

                var addItems = function (items) {
                    cart = JSON.parse(localStorage['Cart']);
                    for (var k in items) {
                        if (items.hasOwnProperty(k)) {
                            cart[k]=items[k];
                        }
                    }
                    localStorage['Cart'] = JSON.stringify(cart);
                };

                var save = function () {
                    var promise=Reviewer.review(cart);
                    promise.then(function(value){
                        cart=value;
                    });
                    localStorage['Cart'] = JSON.stringify(cart);
                };

                var remove = function (id) {
                    cart = JSON.parse(localStorage['Cart']);
                    delete cart[id];
                    localStorage['Cart'] = JSON.stringify(cart);
                };

                var clear = function () {
                    cart=new Array();
                    localStorage.clear();
                };

                var persist = function () {
                    localStorage['Cart'] = JSON.stringify(cart);
                };

                var changeQuantity = function (id , newquantity) {
                    var cart = JSON.parse(localStorage['Cart']);
                    cart[id] = newquantity;
                    localStorage['Cart'] = JSON.stringify(cart);
                };

                var refresh = function () {
                };
            }]);


