
requirejs.config({
    baseUrl: '',
    paths: {
        'flight': 'vendor/flight'
    }
});

require(['talkListenBoot'], function (initialize) {
    initialize();
});



// -- config with debug --
//requirejs.config({
//    baseUrl: '',
//    paths: {
//        'flight': 'vendor/flight'
//    }
//});

//require(['helloWorldBoot'], function (initialize) {
//    initialize();
//});

//require(
//  [
//    'flight/lib/debug'
//  ],

//  function (debug) {
//      debug.enable(true);
//      require(['helloWorldBoot'], function (initialize) {
//          initialize();
//      });
//  }
//);



// -- old crappy code --
//load libs that aren’t defined as Require modules
//require.config({
//    paths: {
//        'jQuery': '/vendor/jquery/jquery.min'
//    },
//    shim: {
//        'jQuery': {
//            exports: '$'
//        }
//    }
//});

//require([
//        'jQuery',
//        'helloWorld'
//        ],
//    function (
//        $,
//        hwIn
//        ) {

//    //work with loaded modules
//    //var mod1 = new modIn();

//    console.log('jQuery version:', $.fn.jquery);
//    //console.log('mod1:', mod1.getName());

//});

//var hw = require(["helloWorld"]);