/** @type {import("prettier").Config} */
module.exports = {
    ...require('prettier-config-standard'),
    "semi": true,
    "singleQuote": false,
    pluginSearchDirs: [__dirname],
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
      {
        files: '*.astro',
        options: {
          parser: 'astro'
        }
      }
    ]
  }