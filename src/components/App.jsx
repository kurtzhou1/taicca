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

const Containers = () => {
    
    return (
        <div className="App">
            <div className='page'><Kv /></div>
            <div className='page_black focusPage'><Focus /></div>
            <div className='page_black comicPage'><Comic /></div>
            <div className='page_black flimPage'><Flim /></div>
            <div className='page_black musicPage'><Music /></div>
            <div className='page_black gamePage'><Game /></div>
            {/* 產業研究(跨域) */}
            <div className='page section2'><Cross /></div>
            {/* 產業研究(出版) */}
            <div className='page_black gamePage'><Game /></div>
            {/* <div className='page section2'><Cross /></div>
            <div className='page section2 gary tune4'>
                <div className='mask'>
                    <Publish />
                </div>
            </div>
            {/* 產業研究(影視) */}
            <div className='page section2 tune4'>
                <div className='mask'>
                    <FilmSection2 />
                </div>
            </div>
            {/* 產業研究(表演藝術) */}
            <div className='page section2 gary tune5'>
                <div className='mask'>
                    <Performance />
                </div>
            </div>
            {/* 國際動態(影視) */}
            <div className='page section2 tune6'><FilmSection3 /></div> 
            <div className='page section2 gary tune5'>
                <div className='mask'>
                    <CrossSection3 />
                </div>
            </div>      
            {/* <section id="HOME"><Home/></section>
            <section id="ABOUT"><About/></section>
            <section id="PROJECT"><Project /></section> */}
        </div>
    );
}

export default Containers;
