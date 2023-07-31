module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-explicit-any': ['error'],
        '@typescript-eslint/naming-convention': [
          'error',
          { selector: 'interface', format: ['PascalCase'] }
        ],
        'no-console': 'warn',
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/no-unstable-nested-components': 'off',
        'comma-dangle': ['error', 'never'],
        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: 'import', next: '*' },
          { blankLine: 'never', prev: 'import', next: 'import' },
          { blankLine: 'always', prev: '*', next: 'export' },
          { blankLine: 'never', prev: '*', next: 'break' },
          { blankLine: 'never', prev: 'break', next: '*' },
          { blankLine: 'never', prev: '*', next: 'continue' },
          { blankLine: 'never', prev: 'continue', next: '*' },
          { blankLine: 'never', prev: '*', next: 'case' }
        ]
      }
    }
  ]
};
