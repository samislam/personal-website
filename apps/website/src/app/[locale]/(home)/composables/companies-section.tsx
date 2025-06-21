'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { companiesData } from '@/data/companies'
import { useTranslate } from '@tolgee/react'

export const CompaniesSection = () => {
  const { t } = useTranslate()
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5 // Adjust speed as needed

    const animate = () => {
      scrollPosition += scrollSpeed

      // Reset position when we've scrolled past half the content
      // (since we duplicate the content, we reset at halfway point)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Pause animation on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId)
    }

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Duplicate the companies array for seamless infinite scroll
  const duplicatedCompanies = [...companiesData, ...companiesData]

  return (
    <section className="border-y border-gray-100 bg-white/50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            {t('@t<companies-scroll-list-title>')}
          </h2>
          <p className="text-gray-600">{t('@t<companies-scroll-list-description>')}</p>
        </div>

        <div
          ref={scrollRef}
          className="scrollbar-hide overflow-hidden whitespace-nowrap"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="animate-scroll inline-flex gap-8">
            {duplicatedCompanies.map((company, index) => (
              <div key={`${company.id}-${index}`} className="group flex-shrink-0 cursor-pointer">
                <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md group-hover:scale-105">
                  <div className="flex min-w-[180px] flex-col items-center space-y-3">
                    <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-gray-50">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                      {company.role && <p className="mt-1 text-sm text-gray-600">{company.role}</p>}
                      {company.period && (
                        <p className="mt-1 text-xs text-gray-500">{company.period}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
