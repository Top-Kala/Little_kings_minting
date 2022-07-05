import React from 'react'
import BackgroundImg from '../components/common/backgroundImg'
import Footer from '../components/common/footer'
import Header from '../components/common/header'
import Faq from '../components/roundtable/faq'
import Slider from '../components/roundtable/slider'

const Roundtable = () => {
    return (
        <>
            <BackgroundImg />
            <Header />
            <Slider />
            <Faq />
            <Footer />
        </>
    )
}

export default Roundtable