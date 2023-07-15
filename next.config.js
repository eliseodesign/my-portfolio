import withMarkdoc from '@markdoc/next.js';

const markdocConfig = {
  mode: 'static',
  schemaPath: './src/pages'
};

export default withMarkdoc(markdocConfig)({
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx']
});
