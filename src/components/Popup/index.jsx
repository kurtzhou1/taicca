import React,{useEffect,useState} from 'react';
import './style.scss'

const Popup = ({open,closeFun}) => {

    return (
        <div className={`popup ${open? 'show':''}`}>
            <div className="popup_block">
                <h3 className="title_box">
                    遊戲IP整併潮: <br />
                    SONY收購BUNGiE
                </h3>
                <div className="content_box">
                    <p>
                        繼微軟以天價687億美元收購動視暴雪後，1月31日SONY宣布以36億美元收購 《 天 命 》( D e s t i n y ) 和 《 最 後 一 戰 》( H a l o ) 等賣座遊戲的開發商BUNGiE 。 雖然收購 價格不及前者，但可由SONY CEO Jim Ryan表 示「We should expect more」的發言，嗅出遊戲產業將大規模整併IP的風潮。
                        <br /><br />
                        即便同為收購，SONY跟微軟採取的策略仍不同:BUNGiE將以SONY獨立子 公司身分繼續營運，在發行方面擁有決策 權，可在任何平臺上發行《最後一戰》系 列續作;而微軟則完全掌控動視暴雪的 遊戲發行，例如《上古卷軸》(The Elder Scrolls)等系列和新作將由XBOX平臺獨 占 。 在家用主機硬體成長有限的狀況下， 未來IP歸屬、平臺服務、玩家流向及營收 間的連動變化，將是遊戲主機市場値得關注的切入點 。
                    </p>
                </div>
                <div className="button_box">
                    <div className="close_btn" onClick={()=>{closeFun()}}>
                        CLOSE x
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
