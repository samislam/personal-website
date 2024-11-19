// eslint-disable-next-line import/no-anonymous-default-export
export default {
  $schema: 'https://tolgee.io/cli-schema.json',
  apiUrl: 'https://app.tolgee.io',
  format: 'JSON_TOLGEE',
  patterns: ['./src/**/*.ts?(x)'],
  extractor: './src/lib/tolgee/tolgee-extractor.mjs',
  pull: { path: './src/i18n' },
  push: {
    files: [
      {
        path: './src/i18n/en.json',
        language: 'en',
      },
      {
        path: './src/i18n/ar.json',
        language: 'ar',
      },
      {
        path: './src/i18n/tr.json',
        language: 'tr',
      },
      // add more languages as needed
    ],
    forceMode: 'OVERRIDE',
  },
  // projectId: 00000, // # uncomment and change this
}
