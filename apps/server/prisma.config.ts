import { defineConfig } from 'prisma/config'

export default defineConfig({
  earlyAccess: true,
  schema: './src/database/schema.prisma',
})
