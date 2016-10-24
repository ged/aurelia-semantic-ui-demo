// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
	'list': [
		'index.html',
		'config.js',
		'favicon.ico',
		'LICENSE',
		'jspm_packages/system.js',
		'jspm_packages/system-polyfills.js',
		'jspm_packages/system-csp-production.js'
	],
	'normalize': [
		[
			'semantic-ui', [
				'/semantic.min.css',
				'/themes/basic/assets/fonts/icons.woff'
			]
		],
		[
			'aurelia-semantic-ui', [
				'/collections/*.html',
				'/collections/*.css',
				'/elements/*.html',
				'/elements/*.css',
				'/modules/*.html',
				'/modules/*.css',
				'/views/*.html',
				'/views/*.css'
			]
		],
		[
			'prism', [
				'/themes/prism.css'
			]
		],
		[
			'bluebird', [
				'/js/browser/bluebird.min.js'
			]
		],
		[
			'plugin-text', []
		]
	]
};
