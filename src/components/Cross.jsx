import React from 'react';
import './styles/section2.scss'
import titleH1 from '../components/images/section2/section2_h1.png'
import titleH2 from '../components/images/section2/section2_b1_t.png'
import dataIMG from '../components/images/section2/layer_567.jpg'

const Cross = () => {
    
    return (
        <div className="cross">
            <div className='blockWrap'>
                <div className="block_title_h1">
                    <img src={titleH1} alt="" />
                </div>
                <div className="content_block">
                    <div className="block1">
                        <div className="block_title_h2">
                            <img src={titleH2} alt="" />
                            <p>2021年臺灣文化內容消費分析──參與及付費比率</p>
                        </div>
                        <div className="content_txt">
                        受到疫情影響，2021年臺灣民眾文化內容的消費，雖然線上參與比率提高，但是在參與比率、付費比率、消費金額多有減少的現象。參與比率除觀看影視節目、收聽廣播與聽過podcast等3項成長，其他均衰退，其中至電影院看電影，流行音樂展演、KTV/卡拉OK、圖書、雜誌等參與比率衰退超過10％以上。
                        </div>
                        <div className="block_title_h3">
                            2021年文化內容消費金額中位數
                        </div>
                        <div className="subContent_block">
                            <div className="data_box">
                                <img src={dataIMG} alt="" />
                            </div>
                            <div className="describe_box">
                                <p>
                                    <span>
                                    「網頁遊戲」消費金額中位數成長，由2020年 的101-200元提升至201-300元。其餘項目維持2020年水準，不過在「網頁遊戲」、「看雜誌」及「電腦遊戲」項目，小額消費比率較2020年各減少6.8個百分點、1.8個百分點及7.4個百分點，顯示有部分消費者朝高額消費靠攏。
                                    </span>
                                    <br /><br />
                                    Base=付費者
                                    <br />
                                    ※除流行音樂展演單位為元/年，其餘項目為元/月
                                </p>
                            </div>
                            <div className="btn_box">
                                <a className="more_btn" href='./02_tw01.html'>
                                    MORE+
                                </a>
                            </div>
                        </div>      
                    </div>
                </div>

            </div>
           
        </div>
    );
}

export default Cross;
