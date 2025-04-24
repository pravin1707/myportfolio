import LogoSection from './sections/LogoSection'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
    </>
  )
}

export default App