import { Next, runCommandsSequentially } from '@repo/scripts'

runCommandsSequentially([new Next({ mode: 'lint' }).command])
