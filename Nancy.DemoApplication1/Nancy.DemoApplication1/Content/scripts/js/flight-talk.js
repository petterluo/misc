
define(['../vendor/flight/index'], function (flight) {
    'use strict';

    var talk = flight.component(function () {

        this.doTalking = function (event, data) {
            console.log('talking');
            this.trigger(document, 'talk');
        };

        //initialize
        this.after('initialize', function () {
            this.on('click', this.doTalking);
        });
    });

    talk.attachTo('h1');

});