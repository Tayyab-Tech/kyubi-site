import Logo from '@/component/Logo'
import OurExpertise from '@/component/OurExpertise'
import OurMission from '@/component/OurMission'
import StudioHero from '@/component/StudioHero'
import React from 'react'

function page() {
  return (
    <div>
        <StudioHero />
        <OurMission />
        <OurExpertise />
        <Logo />
    </div>
  )
}

export default page
