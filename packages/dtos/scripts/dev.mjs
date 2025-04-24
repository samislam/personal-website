import { Barrel } from '@repo/scripts'
import { Chokidar } from '@repo/scripts'
import { Concurrently } from '@repo/scripts'
import { runCommandsSequentially, Tspc } from '@repo/scripts'

const barrelCommand = new Barrel({ directory: './src', delete: true }).command

runCommandsSequentially([
  new Concurrently({
    names: ['BARRELS', 'TS'],
    prefixColors: ['blue', 'green'],
    killOthers: true,
    args: [
      new Chokidar({
        watchDir: 'src/**/*.ts',
        exclude: ['src/index.ts', 'src/**/index.ts'],
        onChange: barrelCommand,
      }).command,
      new Tspc({
        tsconfigPath: './tsconfig.app.json',
        watch: true,
      }).command,
    ],
  }).command,
])
