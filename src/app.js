/**
 * Aurelia Semantic UI Demo
 */

import {inject, bindable, LogManager} from 'aurelia-framework';
import {Redirect} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject( EventAggregator )
export class DemoApp {

	@bindable router;

	constructor( eventAggregator ) {
		this.logger = LogManager.getLogger( 'aurelia-semantic-ui-demo' );
		this.eventAggregator = eventAggregator;
	}


	configureRouter( config, router ) {
		this.router = router;
		this.logger.debug( "Router is: ", router );

		config.title = 'Aurelia Semantic UI Demo App';
		config.map([
			{
				route: 'overview',
				name: 'overview',
				moduleId: 'overview',
				nav: true,
				title: 'Overview'
			},

			{
				route: 'elements',
				name: 'elements',
				moduleId: 'modules/elements',
				nav: true,
				title: 'Elements'
			},

			{
				route: 'collections',
				name: 'collections',
				moduleId: 'modules/collections',
				nav: true,
				title: 'Collections'
			},

			{
				route: 'views',
				name: 'views',
				moduleId: 'modules/views',
				nav: true,
				title: 'Views'
			},

			{
				route: 'modules',
				name: 'modules',
				moduleId: 'modules/modules',
				nav: true,
				title: 'Modules'
			},

			{
				route: 'behaviors',
				name: 'behaviors',
				moduleId: 'modules/behaviors',
				nav: true,
				title: 'Behaviors'
			},


			/* --- */

			{
				route: '',
				redirect: 'overview'
			}
		]);
	}

	attached() {

		// lazy load images
		$('.image').visibility({
			type: 'image',
			transition: 'vertical flip in',
			duration: 500
		});
	}

}
