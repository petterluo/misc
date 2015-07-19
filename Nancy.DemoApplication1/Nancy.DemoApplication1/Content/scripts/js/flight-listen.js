
define(['../vendor/flight/index'], function (flight) {
    'use strict';


    //this.on(document, 'dataSent', function (ev, data) {
    //    alert('Message sent: ' + data.msg);
    //});


    var listen = flight.component(function () {

        //this.attributes({
        //    text: null
        //});

        //this.doListening = function () {
        ////this.doListening = function (ev, data) {
        //    console.log('listening');
        //    this.$node.html(this.attr.text);
        //}

        //initialize
        //this.after('initialize', function () {
        this.after('initialize', function (ev, data) {
            //this.on(document, 'talk', this.doListening);
            //var data = "abc";

            this.on(document, 'talk', function () { console.log('listening to ' + data) });
            

            //this.on(document, 'talk', this.doListening);
        });

    });

    listen.attachTo('h2', { text: "OK!" });

});