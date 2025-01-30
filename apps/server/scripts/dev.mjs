import { runCommand, CrossEnv, Nest } from '@repo/scripts'

runCommand(
  new CrossEnv({
    variables: {
      NODE_ENV: 'development',
    },
    execute: new Nest({
      mode: 'start',
      watch: true,
    }).command,
  }).command
)
