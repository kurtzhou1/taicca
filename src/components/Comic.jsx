import React from 'react';
import './styles/page_black.scss'
// import {Button, Grid, Stack, Typography} from '@mui/material'

const Comic = () => {
    
    return (
        <div className="comic">
            <div className='title'>
            </div>
            <div className='content'>
                <div className='blockWrap'>
                    <div className="block1">
                        <div className="subTitle">
                            韓國網漫進化史 → Webtoon產業創造新商模
                        </div>
                        <div className="subContent">
                            韓國Webtoon(網路漫畫)產業被視為繼韓劇(K-Drama)、韓國流行音樂(K-POP)之後，
                            有潛力成為下一個推廣韓國文化到國際舞台的韓流產業。Webtoon一字由網路媒介「Web」
                            與漫畫「cartoon」兩詞結合而成，專指載於網路平台上的漫畫。當Webtoon逐漸取代傳統紙本漫畫
                            成為創造韓國漫畫產業值的主力，韓國漫畫產業的整體生態隨之改變，無論是產業發展走向、產業角色
                            重組、政策規劃、行業標準接軌Webtoon產業的未來發展。
                        </div>
                    </div>
                    <div className="block2">
                        <div className="button">MORE+</div>
                    </div>
                    <div className='block3'>
                        <div className='img' />
                    </div>
                </div>
                <div className='comic_chart'>
                    <div className='chart'>
                        圖
                    </div>
                    <div className='text'>
                        韓根據KOCCA的統計觀察，韓國網路漫畫新作品於2013年至2016年的產量，
                        從原本的382部增加到1,971部，短短三年內突增了1,589部，成長超過五倍。
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comic;
