
jQuery(function($) {
  'use strict';

  var helloWorld = flight.component(function() {
 
    // click event handler
    this.onClick = function(event) {
      event.stopPropagation();
      this.$node.text('Hello World from Flight.js');
    };

    // initialize
    this.after('initialize', function() {
      this.on('click', this.onClick);
    });

  });


  helloWorld.attachTo('h1');
  helloWorld.attachTo('h2');
});
