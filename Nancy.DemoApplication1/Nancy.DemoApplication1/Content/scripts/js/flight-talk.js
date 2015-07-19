
define(['../vendor/flight/index'], function (flight) {
    'use strict';

    //this.on(document, 'dataSent', function (ev, data) {
    //    alert('Message sent: ' + data.msg);
    //});

    var talk = flight.component(function () {

        ////this.doTalking = function (ev, data) {
        //this.doTalking = function () {
        //    console.log('talking');
        //    //data = 'test123';
        //    this.trigger(document, 'talk');
        //};

        //initialize
        this.after('initialize', function () {
            //this.on('click', this.doTalking);

            this.on('click', function () {
                //var ev = 'the event';
                //var data = 'the data';
                this.trigger(document, 'talk', { data: 'some data' });

            });
        });
    });

    talk.attachTo('h1');

});