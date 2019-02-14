export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/bundles/parseIrcColor.umd.js',
    format: 'umd',
    name: 'parse-irc-color',
    globals: {
      '@angular/core': 'vendor._angular_core',
      '@angular/common': 'vendor._angular_common',
      '@angular/platform-browser' : 'vendor._angular_browser',
    },
  },
  external: [
    '@angular/core',
    '@angular/common',
    '@angular/platform-browser',
  ],
  onwarn: (warning) => {
    const skip_codes = [
      'THIS_IS_UNDEFINED',
      'MISSING_GLOBAL_NAME'
    ];
    if (skip_codes.includes(warning.code)) return;
    console.error(warning);
  }
};
