import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Package, DownloadIcon } from 'lucide-react'
import { Package as PackageType } from '@/data/packages'
import { getTranslate } from '@/lib/tolgee/tolgee-server'
import { GithubIcon } from '@/components/icons/github-icon'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface PackageCardProps {
  package: PackageType
}

export const PackageCard = async (props: PackageCardProps) => {
  const { package: pkg } = props
  const t = await getTranslate()
  return (
    <Card className="card-hover border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Package className="h-5 w-5 text-primary" />
              {pkg.name}
            </CardTitle>
            <div className="mt-2 flex items-center gap-4">
              <Badge variant="outline">v{pkg.version}</Badge>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <DownloadIcon className="h-4 w-4" />
                {pkg.downloads}
              </div>
            </div>
          </div>
        </div>
        <CardDescription className="text-base">{pkg.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {pkg.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3">
          <Link href={pkg.npmUrl} target="_blank" rel="noopener noreferrer">
            <Button asChild size="sm" className="btn-primary flex-1">
              {t('@t<package-view-button-text>')}
            </Button>
          </Link>
          <Link href={pkg.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" asChild className="-p-3">
              <GithubIcon className="h-16" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
