

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import './index.css'
// import ActivityApp from "./Mock Website/MockApp.jsx";
// import App from './App.jsx'


import Navbar from './CyberAI/Navbar/Navbar'

import HomeSection from './CyberAI/HomeSection/HomeSection'

import Features from './CyberAI/Features/Features'

import CyberBox from './CyberAI/CyberBox/CyberBox'

import CyberUniverse from './CyberAI/CyberUniverse/CyberUniverse'

import PortalSection from './CyberAI/Portal/PortalSection'

import FAQ from './CyberAI/FAQ/FAQ'

import Footer from './CyberAI/Footer/Footer'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {<Navbar/>}
    <HomeSection/>
    <Features/>
    <CyberBox/>
    <CyberUniverse/>
 <PortalSection/>
    <FAQ/>
     <Footer/>
  </StrictMode>,
)

