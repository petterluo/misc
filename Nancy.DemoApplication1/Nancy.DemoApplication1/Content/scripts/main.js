
//load libs that aren’t defined as Require modules
require.config({
    paths: {
        'jQuery': 'vendor/jquery/jquery.min'
    },
    shim: {
        'jQuery': {
            exports: '$'
        }
    }
});

require([
        'jQuery',
        'js/module4',
        //'js/helloWorld',
        'js/flight-talk',
        'js/flight-listen',
        ],
    function (
        $,
        modIn,
        //hwIn,
        talkIn,
        listenIn
        ) {

    //work with loaded modules
    var mod1 = new modIn();

    console.log('jQuery version:', $.fn.jquery);
    console.log('mod1:', mod1.getName());
});