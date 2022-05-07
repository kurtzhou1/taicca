import React from 'react';
import './styles/section3.scss'
import titleH2 from '../components/images/section2/s3_b3_t.png'
import IMG from '../components/images/section2/img_music.png'

const Music3 = () => {
    
    return (
        <div className="music3">
             <div className='blockWrap'>
                 <div className="content_block">
                    <div className="block_title_h2">
                        <img src={titleH2} alt="" />
                        <p>臺灣音樂藝人團體如何擄獲日本歌迷的關注</p>
                    </div>
                    <div className="content_txt">
                        文策院去（2021）年調查了2020年9月初 至2021年9月底臺灣音樂藝人團體在日本網路的討論聲量，發現有96%的聲量來自社群 媒體Twitter，而落日飛車、盧廣仲、滅火器 樂團、閃靈樂團和拍謝少年等為較受日本關 注的臺灣中小型規模藝人1 。這些歌手團體的共通點是多曾在日本三大音樂祭演出、推出日文版專輯，或跟日本樂團有合作演出、共創新曲等經歷…
                    </div>
                    <div className="content_txt">
                        臺灣中小規模音樂藝人及團體在日本社群討論聲量占比（％）
                    </div>
                    <div className="data_box">
                        <div className="l_box">
                            {/* 圖表 */}
                        </div>
                        <div className="r_box">
                            <div className="value">
                                <p>96</p>
                                <span>%</span>
                            </div>
                            <p className="txt">
                                文策院2021年調查了2020年9月初至2021年9月底臺灣音樂藝人團體在日本網路討論聲量，發現有96%的聲量來自社群媒體Twitter。
                            </p>
                            <div className="btn_box">
                                <div className="more_btn">
                                    MORE+
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btm_block">
                        <div className="l_box">
                            <div className="block_title_h2">
                                <p>永續發展，臺灣的音樂還能做得更多</p>
                            </div>
                            <div className="content_txt">
                                在去年底的COP26簽訂格拉斯哥氣候協定後，2050年淨零排放（Net zero）已是全球氣候行動的共識。而音樂產業也不例外，全球三大音樂唱片公司，環球、華納、Sony以及部分廠牌也回應簽署音樂氣候協定，目標2030年減碳50% 、2050年淨零排放1 。
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
        </div>
    );
}

export default Music3;
