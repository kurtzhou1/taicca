import React from 'react';
import Kv from './Kv';
import Focus from './Focus';
import Comic from './Comic';
import Flim from './Flim';

const Containers = () => {
    
    return (
        <div className="App">
            <div className='page'><Kv /></div>
            <div className='page_black first'><Focus /></div>
            <div className='page_black'><Comic /></div>
            <div className='page_black'><Flim /></div>
            {/* <section id="HOME"><Home/></section>
            <section id="ABOUT"><About/></section>
            <section id="PROJECT"><Project /></section> */}
        </div>
    );
}

export default Containers;
