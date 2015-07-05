
define(['../vendor/flight/index'], function (flight) {
    'use strict';

    var listen = flight.component(function () {

        this.attributes({
            text: null
        });

        this.doListening = function () {
            console.log('listening');
            this.$node.html(this.attr.text);
        }

        //initialize
        this.after('initialize', function () {
            this.on(document, 'talk', this.doListening);
        });

    });

    listen.attachTo('h2', { text: "OK!" });

});