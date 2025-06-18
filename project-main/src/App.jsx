import React from 'react'
import GlowNaturallyLandingPage from './components/GlowNaturallyLandingPage'
import { Descriptiontext } from './components/Descriptiontext'
import YourSkinDeservesCare from './components/YourSkinDeservesCare'
import BestSellingProducts from './components/BestSellingProducts'
import FeelBeautifulHero from './components/FeelBeautifulHero'
import FeelBeautifulProducts from './components/FeelBeautifulProducts'
import SkincareFAQ from './components/SkincareFAQ'
import SkincareFooter from './components/SkincareFooter'
import SkincareNavbar from './components/SkincareNavbar'
import LoadingScreen from './components/LoadScreen'

const App = () => {
  return (
    <>
      <LoadingScreen />
      <SkincareNavbar />
      <GlowNaturallyLandingPage />
      <Descriptiontext />
      <YourSkinDeservesCare />
      <BestSellingProducts />
      <FeelBeautifulHero />
      <FeelBeautifulProducts />
      <SkincareFAQ />
      <SkincareFooter />
    </>
  )
}

export default App