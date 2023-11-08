import React from 'react'
import './App.css'
import { Article, Brand, Navbar, CTA, BlogContainer, Features } from './components/index'
import { Header, Footer, Blog, Possibility, WhatGPT3, FeatureContainer } from './container/index'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <FeatureContainer />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
