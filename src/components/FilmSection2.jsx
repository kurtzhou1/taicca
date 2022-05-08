import React from 'react';
import './styles/section2.scss'
import title from '../components/images/section2/s2_b3_t.png'
import dataIMG from '../components/images/section2/s2_b3_data.png'

const FilmSection2 = () => {
    
    return (
        <div className="filmSection2">
            <div className="blockWrap">
                <div className='content_block'>
                    <div className="block1">
                        <div className="block_title_h2">
                            <img src={title} alt="" />
                            <p>電影歌曲流行區域初探&nbsp;臺灣影視目標市場</p>
                        </div>
                        <div className="content_txt">
                            近兩年國片話題不斷，破億票房超過五部，主題搶進熱門流行音樂
                            榜。由於疫情，各國影院歇業或觀眾不上門，某段時期國片多上架
                            國際串流平臺，取代過去的電影賣埠、實體上映。透過線上接觸潛
                            在觀眾的特殊時期播映模式，是否可探查台灣電影在全球各國未來
                            落地播映的市場機會？
                        </div>
                        <div className="data_box">
                            <img src={dataIMG} alt="" />
                        </div>
                        <div className="btn_box">
                            <a className="more_btn" href='./02_tw03.html'>
                                MORE+
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilmSection2;
