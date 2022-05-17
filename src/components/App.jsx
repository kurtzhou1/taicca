import React from 'react';
import Kv from './Kv';
import Focus from './Focus';
import Comic from './Comic';
import Flim from './Flim';
import Music from './Music';
import Game from './Game';
import Cross from './Cross';
import Publish from './Publish';
import FilmSection2 from './FilmSection2';
import Performance from './Performance';
import FilmSection3 from './FilmSection3';
import CrossSection3 from './CrossSection3';
import Music3 from './Ｍusic3'
import Music3_2 from './Ｍusic3_2'
import VisualArt3 from './VisualArt3'
import MarketIntelligence from './MarketIntelligence'

const Containers = () => {

    return (
        <div className="App">
            <div className='page'><Kv /></div>
            <div className='page_black focusPage'><Focus /></div>
            <div className='page_black comicPage'><Comic /></div>
            <div className='page_black flimPage'><Flim /></div>
            <div className='page_black musicPage'><Music /></div>
            <div className='page_black gamePage'><Game /></div>
            <div className="section_2_block">
                {/* 產業研究(跨域) */}
                <div className='section_2_box'><Cross /></div>
                {/* 產業研究(出版) */}
                <div className='section_2_box'><Publish /></div>
                {/* 產業研究(表演藝術) */}
                <div className='section_2_box'><Performance /></div>
                {/* 國際動態(音樂_2) */}
                <div className='section_2_box'><Music3_2 /></div>
                {/* 產業研究(影視) */}
                <div className='section_2_box'><FilmSection2 /></div>
                {/* 國際動態(影視) */}
                <div className='section_2_box'><FilmSection3 /></div>
                {/* 國際動態(跨域) */}
                <div className='section_2_box'><CrossSection3 /></div>
                {/* 國際動態(音樂) */}
                <div className='section_2_box'><Music3 /></div>
                {/* 國際動態(視覺藝術) */}
                <div className='section_2_box'><VisualArt3 /></div>
            </div>

            <div className="section_3_block">
                {/* 情商掃描 */}
                <div className='section_3_box'><MarketIntelligence /></div>
            </div>

            {/* <section id="HOME"><Home/></section>
            <section id="ABOUT"><About/></section>
            <section id="PROJECT"><Project /></section> */}
        </div>
    );
}

export default Containers;
