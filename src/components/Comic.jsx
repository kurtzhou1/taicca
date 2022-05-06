import React, { PureComponent } from 'react';
import './styles/page_black.scss';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';
// import {Button, Grid, Stack, Typography} from '@mui/material'

const Comic = () => {

    const data = [
        {
          name: '11',
          uv: 0.3,
          pv: 0.5,
        },
        {
          name: '12',
          uv: 1,
          pv: 0.4,
        },
        {
          name: '13',
          uv: 1.5,
          pv: 0.6,
        },
        {
          name: '14',
          uv: 2.5,
          pv: 0.8,
        },
        {
          name: '15',
          uv: 3.5,
          pv: 1.3,
        },
        {
          name: '16',
          uv: 5,
          pv: 2,
        },
        {
            name: '17',
            uv: 7,
            pv: 1.4,
        },
        {
            name: '18',
            uv: 9,
            pv: 1.3,
        },
        {
            name: '19',
            uv: 10,
            pv: 1.5,
        },
        {
            name: '20',
            uv: 11,
            pv: 1,
        },
    ];
    
    return (
        <div className="comic">
            <div className='title'>
            </div>
            <div className='content'>
                <div className='blockWrap'>
                    <div className="block1">
                        <div className="subTitle">
                            韓國網漫進化史 → Webtoon產業創造新商模
                        </div>
                        <div className="subContent">
                            韓國Webtoon(網路漫畫)產業被視為繼韓劇(K-Drama)、韓國流行音樂(K-POP)之後，
                            有潛力成為下一個推廣韓國文化到國際舞台的韓流產業。Webtoon一字由網路媒介「Web」
                            與漫畫「cartoon」兩詞結合而成，專指載於網路平台上的漫畫。當Webtoon逐漸取代傳統紙本漫畫
                            成為創造韓國漫畫產業值的主力，韓國漫畫產業的整體生態隨之改變，無論是產業發展走向、產業角色
                            重組、政策規劃、行業標準接軌Webtoon產業的未來發展。
                        </div>
                    </div>
                    <div className="block2">
                        <div className="button">MORE+</div>
                    </div>
                    <div className='block3'>
                        <div className='img' />
                    </div>
                </div>
                <div className='comic_chart'>
                    <div className='chart'>
                    <ResponsiveContainer>
                        <ComposedChart
                            width={500}
                            height={400}
                            data={data}
                            // margin={{
                            // top: 20,
                            // right: 20,
                            // bottom: 20,
                            // left: 20,
                            // }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="name" scale="band" />
                            <YAxis />
                            {/* <Tooltip /> */}
                            {/* <Legend /> */}
                            <Bar dataKey="pv" barSize={60} fill="#fff67f" />
                            <Line type="monotone" dataKey="uv" stroke="#fff67f" />
                        </ComposedChart>
                    </ResponsiveContainer>
                    </div>
                    <div className='text'>
                        韓根據KOCCA的統計觀察，韓國網路漫畫新作品於2013年至2016年的產量，
                        從原本的382部增加到1,971部，短短三年內突增了1,589部，成長超過五倍。
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comic;
