import { Dotenv, Next, runCommandsSequentially } from '@repo/scripts'

runCommandsSequentially([
  new Dotenv({
    envFile: '.env.local',
    execute: new Next({ mode: 'dev', turbo: true }).command,
  }).command,
])
