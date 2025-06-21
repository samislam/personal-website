import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProjectPreview } from '@/data/projects-preview'
import { getTranslate } from '@/lib/tolgee/tolgee-server'
import { GithubIcon } from '@/components/icons/github-icon'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export interface ProjectCardProps {
  project: ProjectPreview
}

export const ProjectCard = async (props: ProjectCardProps) => {
  const { project } = props
  const t = await getTranslate()
  return (
    <Card className="card-hover group overflow-hidden border-0 shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {project.featured && <Badge className="btn-primary absolute left-4 top-4">Featured</Badge>}
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3">
          <Link href={`/projects/${project.id}`}>
            <Button asChild size="sm" className="btn-primary flex-1">
              {t('@t<project-details=primary-button-text>')}
            </Button>
          </Link>
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" asChild className="-p-3">
              <GithubIcon className="h-16" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
