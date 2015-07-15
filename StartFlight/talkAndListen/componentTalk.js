'use strict';

define(
    [
        'flight/lib/component'
    ],
    function (
        flightComponent
        )
    {

        function talk() {
            this.after('initialize', function () {
                this.on('click', function() {
                    console.log('h1 was clicked, a message was triggered');
                    this.trigger(document, 'eventH1Click', { message: 'message sent at click on h1' });
                });
            });
        }

        return flightComponent(talk);
    }
);