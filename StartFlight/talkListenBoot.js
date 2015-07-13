'use strict';

define(

  [
    'componentTalk',
    'componentListen'
  ],

  function (
      talker,
      listener) {
      
      function initialize() {
          talker.attachTo('h1');
          listener.attachTo('h2');
      }

      return initialize;
  }
);



//var flight = require(['vendor/flight/index'], function (flight){});
////var module = require(['../vendor/flight/lib/module']);
//var comp = require(['vendor/flight/lib/component']);


////function foo() {


//var talk = comp(function() {
////var talk = flight.component(function () {
//    //this.after('initialize', function () {
//        this.onclick() = function() {
//            this.trigger(document, 'sayHello', { message: "hello!" });
//        }
//    //});
//});


//var listen = flight.component(function() {
//    this.after('initialize', function() {
//            this.on(document, 'sayHello', console.log('talk talk talk'));
//        }
//    );
//});


//.attachTo('h1');
//listen.attachTo('h2');


//}


//module.exports = component(foo);

