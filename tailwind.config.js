module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  theme: {
    extend: {
    },
  },
  variants: {
    margin: ['responsive', 'direction', 'important'],
    outline: ['important'],
    padding: ['responsive', 'direction', 'important'],
    height: ['responsive', 'important'],
    width: ['responsive', 'important'],
    fontSize: ['responsive', 'important'],
    textColor: ['responsive', 'hover', 'important'],
    lineHeight: ['important'],
    borderRadius: ['responsive', 'direction', 'important'],
    display: ['responsive', 'important'],
    minWidth: ['responsive', 'important'],
    maxWidth: ['responsive', 'important'],
    position: ['direction', 'important'],
    backgroundColor: ['responsive', 'important', 'hover'],
    borderColor: ['important', 'hover'],
    borderStyle: ['important', 'hover'],
    borderWidth: ['important', 'direction', 'hover', 'focus'],
    textAlign: ['important', 'direction'],
    boxShadow: ['important', 'hover'],
    overflow: ['important'],
    flexDirection: ['responsive', 'direction', 'important'],
    alignItems: ['responsive', 'important'],
    textDecoration: ['responsive', 'hover', 'important'],
  },
  plugins: [
    /* This plugin is used for the dir variants (rtl / ltr support). */
    require('tailwindcss-dir')(),
    /* This custom plugin adds an important variant. */
    function ({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });
    },
  ],
};
