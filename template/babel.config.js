module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: '.',
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        alias: {
          '@animations': './src/app/animations',
          '@providers': './src/app/providers',
          '@test': './src/test',
          '@router': './src/app/router',
          '@infra': './src/infra',
          '@domain': './src/domain',
          '@screens': './src/app/screens',
          '@helpers': './src/app/helpers',
          '@services': './src/app/services',
          '@components': './src/app/components',
          '@assets': './src/assets',
          '@shared': './src/app/shared',
          '@styles': './src/app/styles',
        },
      },
    ],
  ],
};
