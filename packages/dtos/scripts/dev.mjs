import { Barrel } from '@repo/scripts'
import { Chokidar } from '@repo/scripts'
import { Tailwindcss } from '@repo/scripts'
import { Concurrently } from '@repo/scripts'
import { runCommandsSequentially, Tspc } from '@repo/scripts'

const barrelCommand = new Barrel({ directory: './src', delete: true }).command

runCommandsSequentially([
  barrelCommand,
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
      new Tailwindcss({
        ignore: ['./src/styles.css'],
        outputFilePath: './dist/styles.css',
        watch: true,
      }).command,
    ],
  }).command,
])
