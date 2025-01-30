import { runCommand, CrossEnv, Nest } from '@repo/scripts'

runCommand(
  new CrossEnv({
    variables: {
      NODE_ENV: 'production',
    },
    execute: new Nest({
      mode: 'build',
    }).command,
  }).command
)
