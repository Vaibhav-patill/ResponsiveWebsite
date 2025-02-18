import React from 'react'
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow';

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
    <HeroSection/>
    </div>
    <FeatureSection/>
    <Workflow />

    </>
  )
}

export default App;
