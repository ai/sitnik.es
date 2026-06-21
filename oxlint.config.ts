import loguxOxlintConfig from '@logux/oxc-configs/lint'
import { defineConfig } from 'oxlint'

export default defineConfig({
  extends: [loguxOxlintConfig],
  rules: {
    'unicorn/prefer-add-event-listener': 'off'
  },
  overrides: [
    {
      files: ['scripts/*.js'],
      rules: {
        'no-console': 'off'
      }
    }
  ]
})
