const config = {
	trailingComma: 'es5',
	tabWidth: 2,
	useTabs: true,
	singleQuote: true,
	importOrder: [
		'^react',
		'<THIRD_PARTY_MODULES>',
		'^@/store/(.*)$',
		'^@/hooks/(.*)$',
		'^@/components/(.*)$',
		'^@/assets/(.*)$',
		'^../(.*)',
		'^./(.*)',
		'^(.scss)$',
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	plugins: ['@trivago/prettier-plugin-sort-imports'],
};

module.exports = config;
