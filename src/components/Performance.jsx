import React from 'react';
import './styles/section2.scss'
import title from '../components/images/section2/s2_b4_t.png'
import IMG from '../components/images/section2/s2_b4_pic.png'

const Performance = () => {
    
    return (
        <div className="performance">
            <div className='blockWrap'>
                <div className="content_block">
                    <div className="l_box">
                        <div className="block_title_h2">
                            <img src={title} alt="" />
                            <p>在臺北商圈營運表演空間，區位在哪？</p>
                        </div>
                        <div className="content_txt">
                            如果想要在交通方便、捷運可達、下班可以跟朋友約，順便逛街就
                            會想到的蛋黃區商圈設立表演場所，就臺北市內的房地產物件客觀
                            條件，想要經營這一行的業主有什麼選擇？
                        </div>
                        <div className="btn_box">
                            <div className="more_btn">
                                MORE+
                            </div>
                        </div>
                    </div>
                    <div className="r_box">
                        <img src={IMG} alt="" />
                    </div>

                </div>
            </div>
           
        </div>
    );
}

export default Performance;
