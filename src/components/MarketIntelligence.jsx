import React from 'react';
import './styles/section3.scss'
import titleH1 from '../components/images/section2/s3_h1.png'
import footerBg from '../components/images/section2/s3_btm_img.png'
import footerBgl from '../components/images/section2/footer_left.png'
import footerBgr from '../components/images/section2/footer_right.png'
import footerLogo from '../components/images/section2/footer_logo.png'

const MarketIntelligence = () => {
    
    return (
        <div className="marketIntelligence">
            <div className="content_block">
                <div className="block_title_h1">
                    <img src={titleH1} alt="" />
                </div>
                <div className="slider_box">

                </div>

       
            </div>
        
                <img src={footerBgl} alt="" className='footerBGl'/>
                <img src={footerBgr} alt="" className='footerBGr'/>
                {/* <img src={footerBg} alt="" className='footerBG'/> */}
                <img src={footerLogo} alt="" className='footerLogo'/>
  
        </div>
    );
}

export default MarketIntelligence;
