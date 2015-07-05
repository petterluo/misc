define([], function () {

//define(['../vendor/flight/index'], function (flight) {
    //require(['vendor/flight/index'], function (flight) {
    //    console.log('flight: ' + flight.toString());
    //});

        var returnedModule = function () {
            var _name = 'module4 name';
            this.getName = function () {
                return _name;
            }
        };

        return returnedModule;

    
});