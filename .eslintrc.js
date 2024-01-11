/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module'
	},
	extends: [
		'prettier', //
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	plugins: ['@typescript-eslint'],
	ignorePatterns: ['node_modules/', '.eslintrc.js'],
	rules: {
		'@typescript-eslint/no-unused-vars': 'warn'
	}
};
