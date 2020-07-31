import React from 'react'
import BannerMain from '../../components/BannerMain'
import Footer from '../../components/Footer'

function pageDefault({ children }) {
    return (
      <div>
        <BannerMain />
            {children}
        <Footer />
      </div>
    )
}

export default pageDefault;