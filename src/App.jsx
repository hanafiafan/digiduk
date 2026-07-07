import { useState } from 'react'
import { ProposalModeProvider } from './context/ProposalModeContext'
import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Statement from './components/Statement'
import ServicesOverview from './components/ServicesOverview'
import PricingSection from './components/PricingSection'
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

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <ProposalModeProvider>
      <CustomCursor />
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      <Navbar />

      <main>
        <Hero />
        <Statement />
        <div className="section-divider" />
        <ServicesOverview />
        <div className="section-divider" />
        <PricingSection />
        <ECommerceCostBreakdown />
        <div className="section-divider" />
        <MetaAdsSection />
        <PixelSection />
        <BundlesSection />
        <div className="section-divider" style={{ background: 'linear-gradient(90deg, transparent, rgba(242,240,233,0.08) 20%, rgba(242,240,233,0.08) 80%, transparent)' }} />
        <AddOnsSection />
        <div className="section-divider" />
        <ThirdPartySection />
        <div className="section-divider" />
        <ProcessSection />
        <ScopeGuard />
        <TermsSection />
        <InquiryForm />
      </main>

      <Footer />
      <ProposalModeToggle />
    </ProposalModeProvider>
  )
}
