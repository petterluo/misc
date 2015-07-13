'use strict';

define(
    [
        'flight/lib/component'
    ],

    function (defineComponent) {

        return defineComponent(talk);

        function talk() {
            this.after('initialize', function () {
                this.on('click', function() {
                    console.log('h1 was clicked, a message was triggered');
                    this.trigger(document, 'eventH1Click', { message: 'the message' });
                });
            });
        }
    }
);