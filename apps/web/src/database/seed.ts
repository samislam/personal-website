import { runSeeders } from '@repo/common'
import { PrismaClient } from '@/generated/prisma'
import { seedProjects } from './seeders/projects.seed'

const prisma = new PrismaClient()
console.log('\n')

async function main() {
  runSeeders(prisma, [
    /** Your seeders goes here */
    seedProjects,
  ])
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
