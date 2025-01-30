import { runCommand, Eslint } from '@repo/scripts'

runCommand(
  new Eslint({
    scanPath: '{src,apps,libs,test}/**/*.ts',
    fix: true,
  }).command
)
