/* -*- javascript -*- */
"use strict";

import 'bluebird';
import 'semantic-ui';


export function configure(aurelia) {
	aurelia.use.
		standardConfiguration().
		developmentLogging().
		feature( 'resources' ).
		plugin( 'aurelia-animator-css' ).
		plugin( 'aurelia-semantic-ui' );

	aurelia.start().then( () => aurelia.setRoot() );
}


