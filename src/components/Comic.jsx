import React from 'react';
import './styles/page_black.scss'
import {Button, Grid, Stack, Typography} from '@mui/material'
import comic2 from './images/black_page/comic2.png'
import chart from './images/black_page/chart.png'

const Comic = () => {
    
    return (
        <div className="comic" style={{ padding: '48px', backgroundColor: '#09361B' }}>
            <Grid container spacing={2} sx={{ mt: 2, width: '100%' }}>
                <Grid item xs={12} md={7} container spacing={2}>
                    <Stack item spacing={2} sx={{ mt:2 }}>
                        <div style={{color:'#fff67f'}}>
                            韓國網漫進化史 → Webtoon產業創造新商模
                        </div>
                        <div style={{color:'white'}}>
                            韓國Webtoon(網路漫畫)產業被視為繼韓劇(K-Drama)、韓國流行音樂(K-POP)之後，
                            有潛力成為下一個推廣韓國文化到國際舞台的韓流產業。Webtoon一字由網路媒介「Web」
                            與漫畫「cartoon」兩詞結合而成，專指載於網路平台上的漫畫。當Webtoon逐漸取代傳統紙本漫畫
                            成為創造韓國漫畫產業值的主力，韓國漫畫產業的整體生態隨之改變，無論是產業發展走向、產業角色
                            重組、政策規劃、行業標準接軌Webtoon產業的未來發展。
                        </div>
                        <div className="button" style={{ color: '#09361b',
                            backgroundColor: '#fff67f',
                            borderRadius: '1px',
                            padding: '0.05rem 2rem',
                            fontFamily: 'sans-serif',
                            fontWeight: 'bold',
                            width: 'fit-content',
                            alignSelf: 'flex-end'
                        }}>MORE+</div>
                        <img src={comic2} width={'100%'}/>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Stack item spacing={2}>
                        <img src={chart} width={'100%'}/>
                        <Typography variant={'caption'} color={'white'}>
                            根據KOCCA的統計觀察，韓國網路漫畫新作品於2013年至2016年的產量，
                            從原本的382部增加到1,971部，短短三年內突增了1,589部，成長超過五倍。
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
}

export default Comic;
