import ClientDetail from '@/component/ClientDetail'
import Clients from '@/component/Clients'
import Contact from '@/component/Contact'
import HeroSection from '@/component/HeroSection'
import WhatWeDo from '@/component/WhatWeDo'
import React from 'react'

export default function page() {
  return (
    <>
      <Clients />
      <ClientDetail />
      <WhatWeDo />
      <Contact />
    </>
  )
}
