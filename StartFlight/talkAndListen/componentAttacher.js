'use strict';

define(
    [
        'componentTalk',
        'componentListen'
    ],
    function (
        talker,
        listener
        )
    {
        function attItems() {
            talker.attachTo('h1');
            listener.attachTo('h2');
        }

        return attItems;
    }
);
