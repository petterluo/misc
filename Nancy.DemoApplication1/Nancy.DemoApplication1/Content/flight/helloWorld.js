
jQuery(function($) {
    'use strict';


    var talk = flight.component(function () {

        //click event handler
        //this.onClick = function () {
        this.doTalking = function() {
            //alert('you just clicked the h1');
            //console.log('aaa');
            this.trigger('talk');
        };

        //initialize
        this.after('initialize', function () {
            //this.on('click', this.onClick);
            this.on('click', this.doTalking);
        });

        //return talk;
    });


    var listen = flight.component(function () {

        this.doListening = function () {
            console.log('I was listening');
            $('h2').html('new text');
        }

        //initialize
        this.after('initialize', function () {
            this.on('talk', this.doListening);
        });

    });

    
    talk.attachTo('h1');
    listen.attachTo('h1');

});