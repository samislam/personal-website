const prettierConfig = require('@samislam/prettier-config')

module.exports = {
  ...prettierConfig,
  overrides: [
    {
      files: ['./src/misc/conditionalize-validator.ts'],
      options: {
        plugins: [],
      },
    },
  ],
}
