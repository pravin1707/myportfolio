import LogoSection from './sections/LogoSection'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import AppShowcase from './sections/AppShowcase'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import SkillStack from './sections/SkillStack'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowcase />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <SkillStack />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App