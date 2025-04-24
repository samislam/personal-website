import { input, select } from '@inquirer/prompts'
import { CrossEnv, runCommand, TypeORM } from '@repo/scripts'

async function main() {
  /** @type {import('@repo/scripts').TypeORMRunMode} */
  const mode = await select({
    message: 'Choose an operation for the TypeORM-cli to execute:',
    choices: [
      {
        name: 'Generate migration files',
        value: 'migration:generate',
        description: 'Only generate the files, without running them',
      },
      {
        name: 'Run pending migrations',
        value: 'migration:run',
        description: 'Run pending migration on the database',
      },
      {
        name: 'Undo last migration',
        value: 'migration:revert',
        description: "the last migration to the database, (this can't restore deleted data!)",
      },
      {
        name: 'Show migrations',
        value: 'migration:show',
        description: 'Shows the pending migrations without executing them',
      },
    ],
  })

  let migrationName = ''
  if (mode === 'migration:generate') {
    migrationName = await input({ message: 'Migration name', required: true })
  }

  runCommand(
    new CrossEnv({
      variables: {
        NODE_ENV: 'development',
      },
      execute: new TypeORM({
        mode,
        migrationsDir: './src/migrations',
        dataSrcFile: './src/server/typeorm.ts',
        migrationName,
      }).command,
    }).command
  )
}
main()
