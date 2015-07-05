
//define(['jQuery'], function () {
//define([], function () {
define(['../vendor/flight/index'], function (flight) {
    'use strict';

    //load flight files
    //require(['vendor/flight/index'], function (flight) {

        var talk = flight.component(function () {

            //click event handler
            //this.onClick = function () {
            this.doTalking = function(event, data) {
                //alert('you just clicked the h1');
                //console.log('aaa');
                this.trigger(document, 'talk');
            };

            //initialize
            this.after('initialize', function () {
                this.on('click', this.doTalking);
            });

            //return talk;
        });


        var listen = flight.component(function () {

            this.attributes({
                text: null
            });

            this.doListening = function () {
                console.log('I was listening');
                this.$node.html(this.attr.text);
            }

            //initialize
            this.after('initialize', function () {
                this.on(document, 'talk', this.doListening);
            });

        });

        talk.attachTo('h1');
        listen.attachTo('h2', {
            text: "hejsan!"
        });

    //});
});