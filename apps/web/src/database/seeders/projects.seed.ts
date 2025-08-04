import { SeederFn } from '@repo/common'
import projects from '../data/projects.json'
import { PrismaClient } from '@/generated/prisma'

export const seedProjects: SeederFn<PrismaClient> = async (prismaClient) => {
  let i = 1
  for (const project of projects) {
    console.log(`🌱 seeding project ${i}`)
    await prismaClient.project.create({ data: project })
    i++
  }
}
