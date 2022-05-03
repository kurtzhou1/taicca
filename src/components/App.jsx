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
            <div className='page_black first'><Focus /></div>
            <div className='page_black'><Comic /></div>
            <div className='page_black tune1'><Flim /></div>
            <div className='page_black tune2'><Music /></div>
            <div className='page_black tune3'><Game /></div>
            <div className='page section2'><Cross /></div>
            <div className='page section2 gary tune4'>
                <div className='mask'>
                    <Publish />
                </div>
            </div>
            <div className='page section2 tune4'>
                <div className='mask'>
                    <FilmSection2 />
                </div>
            </div>     
            <div className='page section2 gary tune5'>
                <div className='mask'>
                    <Performance />
                </div>
            </div>     
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
