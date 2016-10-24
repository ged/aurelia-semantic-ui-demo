/**
 * Global resources
 */

export * from './value-converters/capitalize';
export * from './value-converters/currency-format';
export * from './value-converters/date-format';
export * from './value-converters/filter';
export * from './value-converters/json';
export * from './value-converters/order-by';
export * from './value-converters/relative-time';
export * from './value-converters/sanitize-html';
export * from './value-converters/underscore';

export function configure( config ) {
	config.globalResources([
		'./value-converters/capitalize',
		'./value-converters/currency-format',
		'./value-converters/date-format',
		'./value-converters/filter',
		'./value-converters/json',
		'./value-converters/order-by',
		'./value-converters/relative-time',
		'./value-converters/sanitize-html',
		'./value-converters/underscore'
	]);
}
