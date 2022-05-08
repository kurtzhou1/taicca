import React from 'react';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './styles/section3.scss'
import titleH1 from '../components/images/section2/s3_h1.png'
// import footerBg from '../components/images/section2/s3_btm_img.png'
import footerBgl from '../components/images/section2/footer_left.png'
import footerBgr from '../components/images/section2/footer_right.png'
import footerLogo from '../components/images/section2/footer_logo.png'


const MarketIntelligence = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2500,
        responsive:[
            {
                breakpoint: 990,
                settings:{
                   slidesToShow: 2, 
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 1, 
                }
            }
        ]
      };

    return (
        <div className="marketIntelligence">
            <div className="content_block">
                <div className="block_title_h1">
                    <img src={titleH1} alt="" />
                </div>
                <div className="subTitle">
                    想了解文化內容產業最新動態？<br />
                    《TAICCA誌》帶你快速掌握全球文化內容產業重要商業情報
                </div>

                {/* 輪播 */}
                <div className="slider_block">
                    <Slider {...settings}>
                        <div className='slider_box'>
                            <div className="news_card">
                                <h3 className="card_title">
                                    Netflix為奧斯卡<br />
                                    推出自家入圍影片線上專區
                                </h3>
                                <p>
                                    Netflix為了自家發行的電影製作了Netflix Awards For Your Consideration ，供美國影藝學院會員參考，分為活動、看、讀、 聽等4個類別。「活動」中有電影近期的重要排程;「 看 」...
                                </p>
                                <a href="#" className="more_link">MORE+</a>
                            </div>
                        </div>
                        <div className='slider_box'>
                            <div className="news_card sty_r">
                                <h3 className="card_title">
                                    Netflix為奧斯卡<br />
                                    推出自家入圍影片線上專區
                                </h3>
                                <p>
                                    Netflix為了自家發行的電影製作了Netflix Awards For Your Consideration ，供美國影藝學院會員參考，分為活動、看、讀、 聽等4個類別。「活動」中有電影近期的重要排程;「 看 」...
                                </p>
                                <a href="#" className="more_link">MORE+</a>
                            </div>
                        </div>
                        <div className='slider_box'>
                            <div className="news_card sty_r">
                                <h3 className="card_title">
                                    Netflix為奧斯卡<br />
                                    推出自家入圍影片線上專區
                                </h3>
                                <p>
                                    Netflix為了自家發行的電影製作了Netflix Awards For Your Consideration ，供美國影藝學院會員參考，分為活動、看、讀、 聽等4個類別。「活動」中有電影近期的重要排程;「 看 」...
                                </p>
                                <a href="#" className="more_link">MORE+</a>
                            </div>
                        </div>
                        <div className='slider_box'>
                            <div className="news_card">
                                <h3 className="card_title">
                                    Netflix為奧斯卡<br />
                                    推出自家入圍影片線上專區
                                </h3>
                                <p>
                                    Netflix為了自家發行的電影製作了Netflix Awards For Your Consideration ，供美國影藝學院會員參考，分為活動、看、讀、 聽等4個類別。「活動」中有電影近期的重要排程;「 看 」...
                                </p>
                                <a href="#" className="more_link">MORE+</a>
                            </div>
                        </div>
                    </Slider>
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
