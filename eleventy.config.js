module.exports = function (eleventyConfig) {
	// Output directory: _site

	// Copy `img/` to `_site/img/`
	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addPassthroughCopy("src/js");

};