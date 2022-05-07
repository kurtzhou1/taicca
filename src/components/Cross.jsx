import React from 'react';
// import './styles/section2.scss'

const Cross = () => {
    
    return (
        <div className="cross">
            <div className='blockWrap'>
                <div className="block1">
                    <div className="title">
                        2021年台灣文化內容消費趨勢管窺──────參與比率、付費比率
                    </div>
                    <div className="content">
                        受到疫情影響，2021年台灣民眾文化內容的消費，雖然線上參與比率提高，但是在參與比率、
                        付費比率、消費金額多有減少的現象。參與比率除觀看影視節目、收聽廣播與聽過podcast等
                        3項成長，其他均衰退，其中至電影院看電影，流行音樂展、KTV/卡拉OK、圖書、雜誌等參與比
                        衰退超過10%以上。
                    </div>
                    <div className="subContent">
                        2021年文化內容消費金額中位數
                    </div>
                </div>
                <div className="block2">
                    <div className="content1">
                        「網頁遊戲」消費金額中位數成長，由20200101-200元提升至201-300元。其餘項目維持2020年水準，
                        不過在「網頁遊戲」、「看雜誌」、「電腦遊戲」項目，小額消費比率較2020年各減少6.8%、1.8%及
                        7.4%，顯示有部分消費者朝高額消費靠攏。
                    </div>
                    <div className="content2">
                        <div>Base=付費者</div>
                        <div>※除流行音樂展演單位為元/年，其餘項目為元/月</div>
                    </div>
                </div>
                <div className="block3">
                    <div className="button">MORE+</div>
                </div>
            </div>
           
        </div>
    );
}

export default Cross;
