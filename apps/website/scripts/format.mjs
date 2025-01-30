import { Prettier, runCommandsSequentially } from '@repo/scripts'

runCommandsSequentially([
  new Prettier({
    files: ['./**/*.{htm,html,css,md,mdx,js,jsx,ts,tsx}'],
  }).command,
])
