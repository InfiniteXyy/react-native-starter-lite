module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'tailwindcss-react-native/babel',
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias: {
            '@/assets': './assets',
            '@/components': './components',
            '@/hooks': './hooks',
            '@/navigation': './navigation',
          },
        },
      ],
    ],
  };
};
