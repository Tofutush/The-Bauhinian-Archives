const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(EleventyRenderPlugin);
	eleventyConfig.addPassthroughCopy('asset');
	eleventyConfig.addTransform('supercharge', async function (content) {
		return content.replaceAll('Firefly', '<span class="firefly">Firefly</span>');
	});
}