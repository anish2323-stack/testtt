import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import PageTransitionWrapper from './components/PageTransitionWrapper';
import EnhancedHeader from './components/EnhancedHeader';
import Home from './pages/Home';
import MinecraftHosting from './pages/game-hosting/MinecraftHosting';
import ArkHosting from './pages/game-hosting/ArkHosting';
import FiveMHosting from './pages/game-hosting/FiveMHosting';
import TerrariaHosting from './pages/game-hosting/TerrariaHosting';
import RustHosting from './pages/game-hosting/RustHosting';
import ValheimHosting from './pages/game-hosting/ValheimHosting';
import PalworldHosting from './pages/game-hosting/PalworldHosting';
import AMDVps from './pages/other-hosting/AMDVps';
import IntelVps from './pages/other-hosting/IntelVps';
import WebHosting from './pages/other-hosting/WebHosting';
import BotHosting from './pages/other-hosting/BotHosting';
import DomainSelling from './pages/other-hosting/DomainSelling';
import OurCommitment from './pages/important/OurCommitment';
import Career from './pages/important/Career';
import AboutUs from './pages/important/AboutUs';
import ContactUs from './pages/important/ContactUs';
import Infrastructure from './pages/important/Infrastructure';
import Partnership from './pages/important/Partnership';
import TermsOfService from './pages/legal/TermsOfService';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import RefundPolicy from './pages/legal/RefundPolicy';
import UsagePolicy from './pages/legal/UsagePolicy';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Get page name from pathname
  const getPageName = (pathname: string) => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) return 'Home';
    
    const pageName = segments[segments.length - 1]
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return pageName;
  };
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <EnhancedHeader />
      <Routes>
        <Route path="/" element={
          <PageTransitionWrapper pageName="Home">
            <Home />
          </PageTransitionWrapper>
        } />
        
        {/* Game Hosting Routes */}
        <Route path="/minecraft-hosting" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <MinecraftHosting />
          </PageTransitionWrapper>
        } />
        <Route path="/ark-hosting" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <ArkHosting />
          </PageTransitionWrapper>
        } />
        <Route path="/fivem-hosting" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <FiveMHosting />
          </PageTransitionWrapper>
        } />
        <Route path="/terraria-hosting" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <TerrariaHosting />
          </PageTransitionWrapper>
        } />
        <Route path="/rust-hosting" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <RustHosting />
          </PageTransitionWrapper>
        } />
        <Route path="/valheim-hosting" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <ValheimHosting />
          </PageTransitionWrapper>
        } />
        <Route path="/palworld-hosting" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <PalworldHosting />
          </PageTransitionWrapper>
        } />
        
        {/* Other Hosting Routes */}
        <Route path="/amd-vps" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <AMDVps />
          </PageTransitionWrapper>
        } />
        <Route path="/intel-vps" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <IntelVps />
          </PageTransitionWrapper>
        } />
        <Route path="/web-hosting" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <WebHosting />
          </PageTransitionWrapper>
        } />
        <Route path="/bot-hosting" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <BotHosting />
          </PageTransitionWrapper>
        } />
        <Route path="/domain-selling" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <DomainSelling />
          </PageTransitionWrapper>
        } />
        
        {/* Important Routes */}
        <Route path="/our-commitment" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <OurCommitment />
          </PageTransitionWrapper>
        } />
        <Route path="/career" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <Career />
          </PageTransitionWrapper>
        } />
        <Route path="/about-us" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <AboutUs />
          </PageTransitionWrapper>
        } />
        <Route path="/contact-us" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <ContactUs />
          </PageTransitionWrapper>
        } />
        <Route path="/infrastructure" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <Infrastructure />
          </PageTransitionWrapper>
        } />
        <Route path="/partnership" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <Partnership />
          </PageTransitionWrapper>
        } />
        
        {/* Legal Routes */}
        <Route path="/terms-of-service" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <TermsOfService />
          </PageTransitionWrapper>
        } />
        <Route path="/privacy-policy" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <PrivacyPolicy />
          </PageTransitionWrapper>
        } />
        <Route path="/refund-policy" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <RefundPolicy />
          </PageTransitionWrapper>
        } />
        <Route path="/usage-policy" element={
          <PageTransitionWrapper pageName={getPageName(location.pathname)}>
            <UsagePolicy />
          </PageTransitionWrapper>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;