
requirejs.config({
    baseUrl: '',
    paths: {
        'flight': '../vendor/flight'
    }
});

require(
    ['componentAttacher'],
    function (init) {
        init();
    }
);
