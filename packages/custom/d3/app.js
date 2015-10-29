'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var D3 = new Module('d3');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
D3.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  D3.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  D3.menus.add({
    title: 'D3js',
    link: 'd3-page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  D3.aggregateAsset('css', 'd3.css');

  D3.aggregateAsset('js', '../lib/d3/d3.min.js');
  D3.aggregateAsset('js', '../lib/angularD3/angularD3.min.js');

  D3.angularDependencies(['ad3']);

  return D3;
});
