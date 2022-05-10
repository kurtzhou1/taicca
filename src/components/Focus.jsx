import React from 'react';
import './styles/page_black.scss'

const Focus = () => {
    
    return (
        <div className="focus">
            <div className='title' />
            <div className='subTitle'>探索文化內容新商模</div>
            <div className='content'>
                <div>
                    在出版當天一早至書店報到，是過去許多漫畫迷追連載漫畫的生活日
                    常；現在，只要點進電子書城，彈指間就可以看到最新一集的故事內容。
                </div>
                <div>
                    過去，你可能為了要看哪一臺的電視節目與家人展開遙控器爭霸；而
                    現在朋友間的話題，更多是圍繞某部影集要上Netflix、Desney+還
                    是CatchPlay+才看的到？受疫情影響掀起的線上化或Metaverse熱潮
                    ，對於早已透過電競遊戲成功將FIFA品牌虛實整合的國際足球總會，
                    線上賽事並非疫情期間實體比賽的替代品，而是擁有一批忠實粉絲的
                    強勢商模。
                </div>
                <div>
                    線上產值在2021年已占整體產?近七成的流行音樂產業，全球業者面對
                    串流市場的消費生態，甚至新型態的NFT交易，如何順應這樣的產業樣
                    貌及趨勢，推出與時俱進的營運方式？
                </div>
                <div>
                    本期的「TAICCA聚焦」，將逐一觀察數位科技在大眾日常比例的提升，
                    為漫畫、影視、流行音樂及遊戲電競產業帶來哪些轉變，從而發展出什
                    麼樣的商業模式及產業風貌。
                </div>
            </div>
            <div className='focusImgWrap'>
                <div className='focusComic focusImg' />
                <div className='focusGame focusImg' />
                <div className='focusFlim focusImg' />
                <div className='focusMusic focusImg' />
            </div>
        </div>
    );
}

export default Focus;
