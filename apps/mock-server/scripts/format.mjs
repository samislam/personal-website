import { runCommand, Prettier } from '@repo/scripts'

runCommand(
  new Prettier({
    files: ['**/*.{ts,tsx,md,js}'],
  }).command
)
