const autoprefixer = require('autoprefixer'),
			cssnano = require('cssnano'),
    	postcssPresetEnv = require('postcss-preset-env'),
    	precss = require('precss');

module.exports = {
  plugins: [
    postcssPresetEnv,
    precss,
    autoprefixer,
    cssnano({
      preset: 'default',
    }),
  ]
}