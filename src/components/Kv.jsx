import React from 'react';
import './styles/kv.scss'

const Kv = () => {
    
    return (
        <div className="kv">
            <div className="kv_header"><span>Taiwan Creative Content Agency Publishing</span></div>
            <div className="kv_body">
                <a href="https://www.taicca.tw/" target="_blank" className="link_web">taicca.tw</a>
                <div className="title" />
                <div className='subtitleIsPC'>探索文化內容新商模</div>
                <div className='subtitleIsM'><div>探索</div><div>文化內容新商模</div></div>
            </div>
            <div className="kv_img_left"></div>
            <div className="kv_img_right"></div>
        </div>
    );
}

export default Kv;
