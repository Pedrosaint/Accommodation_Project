import LodgeOwnerCTA from "../components/call_to_action"
import FeaturedAccommodations from "../components/featured_accommodation"
import HeroPage from "../components/hero_page"
import HowItWorks from "../components/how_it_works"
import KeyFeaturesBenefits from "../components/key_features"
import TestimonialsSection from "../components/testimonal"

const LandingView = () => {
  return (
    <div>
      <HeroPage />
      <HowItWorks />
      <FeaturedAccommodations />
      <LodgeOwnerCTA />
      <KeyFeaturesBenefits />
      <TestimonialsSection />
    </div>
  )
}

export default LandingView
