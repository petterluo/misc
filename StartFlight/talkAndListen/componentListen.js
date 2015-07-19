'use strict';

define(
    [
        'flight/lib/component'
    ],
    function (
        flightComponent
        )
    {

        function listen() {
            this.after('initialize', function () {
                this.on(document, 'eventH1Click', function (ev, data) {
                    console.log('h2 got the message');
                    var mess = data.message;
                    this.$node.html('h2: ' + mess);
                });
            });
        }

        return flightComponent(listen);
    }
);