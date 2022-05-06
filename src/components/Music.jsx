import React from 'react';
import './styles/page_black.scss';
// import music_jay from './images/black_page/music_jay.png';

const Music = () => {
    
    return (
        <div className="music">
            <div className='title' />
            <div className='content'>
                <div className='blockWrap'>
                    <div className="block1">
                        <div className="subTitle">
                            音樂市場新商模&nbsp;市場金礦山已經出現？
                        </div>
                        <div className="subContent">
                            根據國際唱片業協會報告顯示，音樂產業線上產值在2021年達到整體產值67%，時至2022年。
                            線上產值將突破七成，消費型態、版權與商業模式等也在持續變化中。新技術概念的加入，
                            更讓未來趨勢走向多元。文策院今年推出的《2021年臺灣文化內容產業調查報告III:流行
                            音樂、廣播產業 》介紹音樂產業的三種新商業模式，有近二年最火熱的NFT話題、歌曲版權
                            投資與利用音樂版權指數的交易平臺。
                        </div>
                    </div>
                    <div className="block2">
                        <div className="button">MORE+</div>
                    </div>
                    <div className='block3'>
                        <div className='img'>
                        </div>
                    </div>
                </div>
                <div className='music_jay'>
                    <div className='img' />
                    <div className='black1' />
                    <div className='text'>
                        周杰倫潮牌「PHANTACi」與Ezek平臺聯名推出的「Phanta Bear」NFT，不僅在NFT市場刷新
                        世界紀錄，甚至躍上紐約時報廣場那斯達克電視牆。
                    </div>
                    <div className='black2' />
                </div>
            </div>
        </div>
    );
}

export default Music;
