import { Dotenv, Next, runCommandsSequentially } from '@repo/scripts'

runCommandsSequentially([
  new Dotenv({
    envFile: '.env.production',
    execute: new Next({ mode: 'build' }).command,
  }).command,
])
