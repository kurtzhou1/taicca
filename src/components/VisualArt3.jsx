import React from 'react';
import './styles/section2.scss'
import titleH2 from '../components/images/section2/s3_b4_t.png'

const VisualArt3 = () => {
    
    return (
        <div className="visualArt3">
            <div className='blockWrap'>
                <div className="content_block">
                    <div className="block_title_h2">
                        <img src={titleH2} alt="" />
                        <p>藝術拍賣產業加入綠色工業行列</p>
                    </div>
                    <div className="content_txt">
                        國際藝術拍賣龍頭佳士得（Christie's）於2021年7月首 次公布集團的年度碳排放量，並宣示遵循「科學基礎 減量目標倡議」（SBTi），承諾將減少碳排50%，於 2030年以前達到淨零排放（net zero）。 在2021年全 球拍賣市場取得43%市占的佳士得，是全球2,356間響 應SBTi公司中唯一的藝術拍賣行。
                    </div>
                    <div className="data_block">
                        <div className="l_box">
                            <p className='content_txt'>佳士得2019年碳排放量分布─</p>
                            <div className="pieChart">
                                {/* 圓餅圖 */}
                            </div>
                        </div>
                        <div className="r_box">
                            <div className="list_box">
                                <div className="list">
                                    <span className='lv01'></span>
                                    <p>運輸→19,551噸（出入境的貨運、展覽導覽和其他內部的物流項目，如倉儲。）</p>
                                </div>
                                <div className="list">
                                    <span className='lv02'></span>
                                    <p>其他→14,117噸（其他商業行為所產生的間接碳排放。）</p>
                                </div>
                                <div className="list">
                                    <span className='lv03'></span>
                                    <p>商務差旅→13,585噸（主要為員工的航空差旅。）</p>
                                </div>
                                <div className="list">
                                    <span className='lv04'></span>
                                    <p>建築物→12,804噸（包含建築物、廢棄物、水、紙張、資訊、數據中心和員工通勤所使用的能源。）</p>
                                </div>
                                <div className="list">
                                    <span className='lv05'></span>
                                    <p>出版→4,311噸（如拍品目錄的印製和配發。）</p>
                                </div>
                            </div>
                            <p className="unit">
                                單位：tonnes CO2e
                            </p>
                            <div className="btn_box">
                                <div className="more_btn">
                                    MORE+
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisualArt3;
