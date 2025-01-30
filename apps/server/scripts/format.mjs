import chalk from 'chalk'
import { Echo, Prettier, runCommandsSequentially } from '@repo/scripts'

runCommandsSequentially([
  new Echo(`Formatting ${chalk.bold('server')}`).command,
  new Prettier({
    files: ['./src/**/*.{ts,js}', './test/**/*.{ts,js}'],
  }).command,
])
