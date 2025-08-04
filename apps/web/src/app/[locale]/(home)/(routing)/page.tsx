import { HeroSection } from '../composables/hero-section'
import { AboutSection } from '../composables/about-section'
import { ContactSection } from '../composables/contact-section'
import { ProjectsSection } from '../composables/projects-section'
import { CompaniesSection } from '../composables/companies-section'
import { NewsLetterSection } from '../composables/news-letter-section'

const Page = () => {
  return (
    <div>
      <HeroSection />
      <CompaniesSection />
      <AboutSection />
      <ProjectsSection />
      <NewsLetterSection />
      <ContactSection />
    </div>
  )
}
export default Page
