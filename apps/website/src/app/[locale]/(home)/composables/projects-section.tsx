import { ProjectCard } from './project-card'
import { PackageCard } from './package-card'
import { packagesData } from '@/data/packages'
import { getTranslate } from '@/lib/tolgee/tolgee-server'
import { projectsPreviewData } from '@/data/projects-preview'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const ProjectsSection = async () => {
  const t = await getTranslate()
  return (
    <section className="bg-white/70 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            {t('@t<projects-section-title>')}
          </h2>
          <p className="text-lg text-gray-600">{t('@t<projects-section-description>')}</p>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="mx-auto mb-12 grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="projects">
              {t('@t<projects-section-projects-tab-label>')}
            </TabsTrigger>
            <TabsTrigger value="packages">
              {t('@t<projects-section-projects-packages-label>')}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="projects" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projectsPreviewData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="packages" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              {packagesData.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
