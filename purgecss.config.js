const gaExtractor = (content) => content.match(/[\w-/:!]+/g) || [];

module.exports = {
  content: ['dist/**/*.js', 'dist/**/*.html'],
  css: ['dist/**/*.css'],
  extractors: [
    {
      extractor: gaExtractor,
      extensions: ['js', 'html'],
    },
  ],
  whitelist: ['mat-primary', ':before', ':after'],
  whitelistPatterns: [
    /border-ga-/,
    /bg-ga-/,
    /mat-elevation-/,
    /-webkit-scrollbar/,
  ],
};
