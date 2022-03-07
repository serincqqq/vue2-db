module.exports = {
<<<<<<< HEAD
  presets: [
    '@vue/app'
  ]
=======
	
	presets: [
		'@vue/cli-plugin-babel/preset',
		["@babel/preset-env", {
			"modules": false
		}],
	],
	plugins: [
		[
			"component",
			{
				"libraryName": "element-ui",
				"styleLibraryName": "theme-chalk"
			}
		]
	]
>>>>>>> 6901f85 (first)
}
