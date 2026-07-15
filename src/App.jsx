import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import GitHubSection from './components/GitHubSection.jsx'
import CertificationsAwards from './components/CertificationsAwards.jsx'
import Education from './components/Education.jsx'
import Process from './components/Process.jsx'
import Stack from './components/Stack.jsx'
import { Goals, Contact } from './components/GoalsContact.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <a href="#top" className="skip-link">Skip to content</a>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GitHubSection />
      <CertificationsAwards />
      <Education />
      <Process />
      <Stack />
      <Goals />
      <Contact />
      <Footer />
    </>
  )
}
