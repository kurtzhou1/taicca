import React from 'react';
import './styles/page_black.scss'

const Focus = () => {
    
    return (
        <div className="focus">
            <div className='title' />
            <div className='subTitle'>市場掃描―――探索文化內容新商模</div>
            <div className='content'>
                <div>
                    在出版當天一早至書店報到，是過去許多漫畫迷追連載漫畫的生
                    活日常；現在，只要點進電子書城，彈指間就可以看到最新一集
                    的故事內容。過去，你可能為了要看哪一臺的電視節目與家人展
                    開遙控器爭霸；而現在朋友間的話題，更多是圍繞某部影集要上
                    Netflix、Disney+還是CATCHPLAY+才看得到？
                </div>
                <div>
                    受疫情影響掀起的線上化或Metaverse熱潮，對於早已透過電競
                    遊戲成功將FIFA品牌虛實整合的國際足球總會，線上賽事並非疫
                    情期間實體比賽的替代品，而是擁有一批忠實粉絲的強勢商模。
                </div>
                <div>
                    線上產值在2021年已占整體產值近七成的流行音樂產業，全球業
                    者面對串流市場的消費生態，甚至新型態的NFT交易，如何順應
                    這樣的產業樣貌及趨勢，推出與時俱進的營運方式？
                </div>
                <div>
                    本期的「TAICCA聚焦」，將逐一觀察數位科技在大眾日常比例的
                    提升，為漫畫、影視、流行音樂及遊戲電競產業帶來哪些轉變，
                    從而發展出什麼樣的商業模式及產業風貌。
                </div>
            </div>
            <div className='focusComic focusImg' />
            <div className='focusGame focusImg' />
            <div className='focusFlim focusImg' />
            <div className='focusMusic focusImg' />
        </div>
    );
}

export default Focus;
