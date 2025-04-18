import LogoSection from './sections/LogoSection'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import FeatureCards from './sections/FeatureCards'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <LogoSection />
      <FeatureCards />
    </>
  )
}

export default App