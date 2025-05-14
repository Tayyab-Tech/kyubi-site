import Contact from '@/component/Contact'
import Logo from '@/component/Logo'
import OurExpertise from '@/component/OurExpertise'
import OurMission from '@/component/OurMission'
import StudioHero from '@/component/StudioHero'
import Team from '@/component/Team'
import React from 'react'

function page() {
  return (
    <div>
        <StudioHero />
        <OurMission />
        <OurExpertise />
        <Team />
        <Logo />
        <Contact />
    </div>
  )
}

export default page
