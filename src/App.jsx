import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ImpressumPage from './pages/ImpressumPage'
import ProposalModal from './components/ProposalModal'
import ScrollToTop from './components/ScrollToTop'
import { ProposalModalProvider } from './context/ProposalModalContext'

export default function App() {
  return (
    <ProposalModalProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
      </Routes>
      <Footer />
      <ProposalModal />
    </ProposalModalProvider>
  )
}
