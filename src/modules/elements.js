/* -*- javascript -*- */
"use strict";

import 'semantic-ui';


export class Elements {
	heading = 'Elements';
	buttonIcon = 'cloud';
	buttonColor = 'black';
	userIcon = 'user';
	loaderIsLoading = false;
	currentStep = 1;

	attached() {
		$('.ui.checkbox').checkbox();
		$('select.dropdox').dropdown();
	}
}

