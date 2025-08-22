

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import ActivityApp from "./Mock Website/MockApp.jsx";
// import App from './App.jsx'
import Navbar from './CyberAI/Navbar/Navbar.jsx'

import HomeSection from './CyberAI/HomeSection/HomeSection.jsx'


import Features from './CyberAI/Features/Features.jsx'

import CyberBox from './CyberAI/CyberBox/CyberBox.jsx'

import CyberUniverse from './CyberAI/CyberUniverse/CyberUniverse.jsx'

import PortalSection from './CyberAI/Portal/PortalSection.jsx'

import FAQ from './CyberAI/FAQ/FAQ.jsx'

import Footer from './CyberAI/Footer/Footer.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <HomeSection/>
    <Features/>
    <CyberBox/>
    <CyberUniverse/>
 <PortalSection/>
    <FAQ/>
     <Footer/>
  </StrictMode>,
)

