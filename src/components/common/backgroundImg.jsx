import React from 'react'
import bgImg1 from '../../image/homeBG_1.svg'
import bgImg2 from '../../image/homeBG_2.svg'

const BackgroundImg = () => {
  return (
    <section className='homeBackground'>
      <img src={bgImg1} />
      <img src={bgImg2} />
    </section>
  )
}

export default BackgroundImg