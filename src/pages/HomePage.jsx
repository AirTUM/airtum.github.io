import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import NXTSpaceSection from '../components/NXTSpaceSection'
import ProjectSection from '../components/ProjectSection'
import OpenSourceSection from '../components/OpenSourceSection'

const SectionDivider = () => (
  <div className="section-divider" style={{ margin: '0 auto' }} />
)

export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#f5f6f8', minHeight: '100vh' }}>
      <main>
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <NXTSpaceSection />
        <SectionDivider />
        <ProjectSection />
        <SectionDivider />
        <OpenSourceSection />
      </main>
    </div>
  )
}
