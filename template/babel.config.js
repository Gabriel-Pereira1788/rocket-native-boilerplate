module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'nativewind/babel',
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
          '@infra': './src/infra',
          '@domain': './src/domain',
          '@screens': './src/app/screens',
          '@components': './src/app/components',
          '@assets': './src/assets',
          '@shared': './src/app/shared',
        },
      },
    ],
  ],
};
