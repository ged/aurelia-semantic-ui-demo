module.exports = {
	"bundles": {
		"dist/app-build": {
			"includes": [
				"[**/*.js]",
				"**/*.html!text",
				"**/*.css!text"
			],
			"options": {
				"inject": true,
				"minify": false,
				"depCache": true,
				"rev": false
			}
		},
		"dist/aurelia": {
			"includes": [
				"aurelia-framework",
				"aurelia-bootstrapper",
				"aurelia-fetch-client",
				"aurelia-router",
				"aurelia-animator-css",
				"aurelia-templating-binding",
				"aurelia-polyfills",
				"aurelia-templating-resources",
				"aurelia-templating-router",
				"aurelia-semantic-ui",
				"aurelia-loader-default",
				"aurelia-history-browser",
				"aurelia-logging-console",
				"semantic-ui",
				"semantic-ui/semantic.css!text",
				"fetch",
				"bluebird",
				"dompurify",
				"numeral",
				"moment",
				"prism",
				"prism/themes/prism.css!text",
				"jquery"
			],
			"options": {
				"inject": true,
				"minify": true,
				"depCache": false,
				"rev": false
			}
		}
	}
};
