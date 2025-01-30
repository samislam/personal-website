import chalk from 'chalk'
import { Barrel } from '@repo/scripts'
import { Echo, Tspc } from '@repo/scripts'
import { runCommandsSequentially } from '@repo/scripts'

runCommandsSequentially([
  new Echo(chalk.cyanBright('info') + ' Running Barrelsby...').command,
  new Barrel({ directory: './src', delete: true }).command,
  new Echo(chalk.cyanBright('info') + ' Compiling TypeScript...').command,
  new Tspc({ tsconfigPath: './tsconfig.app.json' }).command,
  new Echo(chalk.greenBright('Done') + ' Ready to use!').command,
])
