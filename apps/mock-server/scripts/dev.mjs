import { runCommand, Concurrently, Tsx, JsonServer } from '@repo/scripts'

runCommand(
  new Concurrently({
    prefixColors: [],
    names: ['merge', 'json-server'],
    killOthers: false,
    args: [
      new Tsx({
        entryFile: './server/merge.ts',
        watch: true,
      }).command,
      new JsonServer({
        serveFrom: './server/db.json',
        port: 5500,
      }).command,
    ],
  }).command
)
