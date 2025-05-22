import { runCommand, Del } from '@repo/scripts'

runCommand(new Del({ files: ['**/{node_modules,dist,.turbo}', './generated'] }).command)
