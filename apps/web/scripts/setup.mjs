import { runCommand, Dotenv, Prisma } from '@repo/scripts'

runCommand(
  new Dotenv({
    envFile: '.env.local',
    execute: new Prisma({
      mode: 'generate',
    }).command,
  }).command
)
