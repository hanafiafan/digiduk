import { useState } from 'react'
import { ProposalModeProvider } from './context/ProposalModeContext'
import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Statement from './components/Statement'
import ServicesOverview from './components/ServicesOverview'
import { PricingGroup, pricingGroups } from './components/PricingSection'
import ECommerceCostBreakdown from './components/ECommerceCostBreakdown'
import MetaAdsSection from './components/MetaAdsSection'
import PixelSection from './components/PixelSection'
import BundlesSection from './components/BundlesSection'
import AddOnsSection from './components/AddOnsSection'
import ThirdPartySection from './components/ThirdPartySection'
import ProcessSection from './components/ProcessSection'
import ScopeGuard from './components/ScopeGuard'
import TermsSection from './components/TermsSection'
import InquiryForm from './components/InquiryForm'
import Footer from './components/Footer'
import ProposalModeToggle from './components/ProposalModeToggle'
import DepthScrollContainer from './components/DepthScrollContainer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <ProposalModeProvider>
      <CustomCursor />
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      <Navbar />

      <main>
        <DepthScrollContainer>
          <Hero />
          <Statement />
          <ServicesOverview />
          {pricingGroups.map((group) => (
            <PricingGroup key={group.id} group={group} />
          ))}
          <ECommerceCostBreakdown />
          <MetaAdsSection />
          <PixelSection />
          <BundlesSection />
          <AddOnsSection />
          <ThirdPartySection />
          <ProcessSection />
          <ScopeGuard />
          <TermsSection />
          <InquiryForm />
          <Footer />
        </DepthScrollContainer>
      </main>

      <ProposalModeToggle />
    </ProposalModeProvider>
  )
}
