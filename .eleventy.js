const fs = require('fs');

module.exports = (function(eleventyConfig) {
	
	/**
		* Add layout aliases
		*/

	eleventyConfig.addLayoutAlias('global', '_globals/global');
	eleventyConfig.addLayoutAlias('campaign', '_layouts/campaign');
	
	/**
		* Add custom collections
		*/
	
	// Return templates
	eleventyConfig.addCollection("templates", function(collection) {
		return collection.getAll().filter(function(item) {
			return item.data.content_type == "template";
		});
	});
	
	// Return campaigns
	eleventyConfig.addCollection("campaigns", function(collection) {
		return collection.getAll().filter(function(item) {
			return item.data.content_type == "campaign";
		});
	});
	
	/**
		* Copy static assets
		*/

	const assets = [
		'css',
		'js',
		'img',
		'fonts',
	];

	assets.forEach((asset) => {
	  try {
		  if (fs.existsSync(`./src/${asset}`)) {
				eleventyConfig.addPassthroughCopy(`src/${asset}`);
		  }
		} catch(err) {
		  console.error(err)
		}
	});
	
	return {
    passthroughFileCopy: true,

		dir: {
			input: "src",
			output: "dist"
		}
	};

});