module.exports = function(api) {
  api.cache(true);
  return {
		presets: ['babel-preset-expo'],
		plugins: [
			'@babel/plugin-proposal-export-namespace-from',
			[
				'babel-plugin-root-import',
				{
					paths: [
						{
							rootPathSuffix: 'src',
							rootPathPrefix: '~/',
						},
						{
							rootPathSuffix: 'src/modules',
							rootPathPrefix: '#/',
						},
					],
				},
			],
		],
  };
};
