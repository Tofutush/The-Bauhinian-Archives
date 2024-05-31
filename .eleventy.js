const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(EleventyRenderPlugin);
	eleventyConfig.addPassthroughCopy('asset');
	eleventyConfig.addTransform('supercharge', async function (content) {
		content = content.replaceAll('Firefly', '<span class="name firefly">Firefly</span>');
		content = content.replaceAll('Hyrax', '<span class="name hyrax">Hyrax</span>');
		content = content.replaceAll('Kangaroo', '<span class="name kangaroo">Kangaroo</span>');
		content = content.replaceAll('Koala', '<span class="name koala">Koala</span>');
		content = content.replaceAll('Pegasus', '<span class="name pegasus">Pegasus</span>');
		content = content.replaceAll('Starcorp', '<span class="name starcorp">Starcorp</span>');
		content = content.replaceAll('NSAB', '<span class="name bauhinia">NSAB</span>');
		content = content.replaceAll('Bauhinia', '<span class="name bauhinia">Bauhinia</span>');
		return content;
	});
}