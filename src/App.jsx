import Scene from './components/Scene'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import OpenSourceSection from './components/OpenSourceSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#020b18] scanline">
      {/* Fixed 3D canvas background — always behind everything */}
      <Scene />

      {/* Scrollable content layer — sits above the canvas */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <HeroSection />

          {/* Subtle section divider */}
          <div className="relative h-px mx-auto max-w-4xl">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(0,245,255,0.3), transparent)',
              }}
            />
          </div>

          <AboutSection />

          <div className="relative h-px mx-auto max-w-4xl">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(0,128,255,0.3), transparent)',
              }}
            />
          </div>

          <ProjectSection />

          <div className="relative h-px mx-auto max-w-4xl">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(255,0,255,0.3), transparent)',
              }}
            />
          </div>

          <OpenSourceSection />
        </main>

        <Footer />
      </div>
    </div>
  )
}
