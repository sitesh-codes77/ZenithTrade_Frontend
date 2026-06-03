import React from 'react'
import Header from './CgeHeader'
import Price from './CgePrice'
import Section from './CgeSection'
import Opening from './CgeOpening'
import Maintaince from './CgeMaintaince'
import Services from './CgeServices'
import Explained from './CgeExplained'

function PricingPage() {
    return ( 
        <>
            <Header />
            <Price />
            <Section />
            <Opening />
            <Maintaince />
            <Services />
            <Explained />
        </>
     );
}

export default PricingPage;