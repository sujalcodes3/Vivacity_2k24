import React from 'react'
import CaCoverPage from '../components/CaPortal/CaCoverPage'
import CaAbout from '../components/CaPortal/CaAbout'
import Faq from 'react-faq-component';
import Data from '../components/CaPortal/Data/FAQdata';

function CaPortal() {
  return (
    <div className=''>
        <CaCoverPage/>
        <CaAbout/>
    </div>
  )
}

export default CaPortal
