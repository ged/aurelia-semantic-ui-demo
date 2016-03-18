/* -*- javascript -*- */
"use strict";

import 'babel/polyfill';

import 'semantic-ui';
import 'semantic-ui/semantic.css!';


export function configure(aurelia) {
	aurelia.use.
		standardConfiguration().
		developmentLogging().
		globalResources(
			'resources/index.js'
		).
		plugin( 'aurelia-animator-css' ).
		plugin( 'aurelia-semantic-ui' );

	aurelia.start().
		then( a => a.setRoot('app', document.body) );
}


