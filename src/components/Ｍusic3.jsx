import React,{useEffect,useState} from 'react';
import './styles/section3.scss'
import titleH2 from '../components/images/section2/s3_b3_t.png'
// import IMG from '../components/images/section2/img_music.png'

import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Music3 = () => {

    const data = [
        {
          name: '落日飛車',
          pv: 22.0,
        },
        {
            name: '盧廣仲',
            pv: 14.7,
          },
          {
            name: '滅火器樂團',
            pv: 12.0,
          },
          {
            name: '閃靈樂團',
            pv: 10.8,
          },
          {
            name: '拍謝少年',
            pv: 5.7,
          },
          {
            name: '宇宙人',
            pv: 5.5,
          },
          {
            name: '大象體操',
            pv: 5.5,
          },
          {
            name: 'Leo王',
            pv: 3.5,
          },
          {
            name: '9m88',
            pv: 3.1,
          },
          {
            name: '孫盛希',
            pv: 2.8,
          },
          {
            name: '八三夭',
            pv: 2.3,
          },
          {
            name: '茄子蛋',
            pv: 2.3,
          },
      ];

      const [showImage, setShowImage] = useState(false);
      const [isPc, setIsPc] = useState(false);
      useEffect(()=>{
          if (navigator.userAgent.match(/Android/i)
          || navigator.userAgent.match(/webOS/i)
          || navigator.userAgent.match(/iPhone/i)
          || navigator.userAgent.match(/iPad/i)
          || navigator.userAgent.match(/iPod/i)
          || navigator.userAgent.match(/BlackBerry/i)
          || navigator.userAgent.match(/Windows Phone/i)
          ) {
              setIsPc(false);
          }
          else {
              setIsPc(true);
          }
      })

      const getElementTop = (element) => {
          let actualTop = element.offsetTop
          let current = element.offsetParent
          while (current !== null) {
              actualTop += current.offsetTop
              current = current.offsetParent
          }
          return actualTop
      }

  
  
      useEffect(() => {
          //計算每個區塊
          document.addEventListener('scroll', onScroll)
          onScroll()
          return () => {
              document.removeEventListener('scroll', onScroll)
          }
      }, [])

      const onScroll = () => {
          let currentY = window.pageYOffset  //當前視窗距離天花板的高度
          let targetDom =  document.getElementById("target_bar");
          let targetDomStart = getElementTop(targetDom) - targetDom.offsetHeight; //元素上層距離天花板的高度
          let startNumber = isPc ? 300 : 300 
          
          if( targetDomStart  <= currentY+startNumber ) {
              setShowImage(true);
          } 
      }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            console.log(active, payload, label)
            return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
            </div>
            );
        }
    }
    
    return (
        <div className="music3">
             <div className='blockWrap'>
                 <div className="content_block">
                    <div className="block_title_h2">
                        <img src={titleH2} alt="" />
                        <p>臺灣音樂藝人團體如何擄獲日本歌迷的關注</p>
                    </div>
                    <div className="content_txt">
                        文策院去（2021）年調查了2020年9月初至2021年9月底臺灣音樂藝人團體在日本網路的討論聲量，發現有96%的聲量來自社群媒體Twitter，而落日飛車、盧廣仲、滅火器樂團、閃靈樂團和拍謝少年等為較受日本關注的臺灣中小型規模藝人。
                    </div>
                    <div className="content_txt">
                        臺灣中小規模音樂藝人及團體在日本社群討論聲量占比（％）
                    </div>
                    <div className="data_box">
                        <div className="l_box" id="target_bar">
                            {/* 圖表 */}
                            {
                                showImage && <>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                        width={600}
                                        height={300}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 35,
                                            left: 35,
                                            bottom: 10,
                                        }}
                                        barSize={20}
                                        >
                                        <XAxis dataKey="name" scale="point" interval={0} angle={30} padding={{ left: 0, right: 0 }} />
                                        <Tooltip content={<CustomTooltip />} />
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Bar dataKey="pv" fill="#8dc55d" background={{ fill: '#eee' }} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </>
                            }

                        </div>
                        <div className="r_box">
                            <div className="value">
                                <p>96</p>
                                <span>%</span>
                            </div>
                            <p className="txt">
                                文策院2021年調查了2020年9月初至2021年9月底臺灣音樂藝人團體在日本網路討論聲量，發現有96%的聲量來自社群媒體Twitter。
                            </p>
                            <div className="btn_box">
                                <a className="more_btn" href='./02_internation03.html'>
                                    MORE+
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="btm_block">
                        <div className="l_box">
                            <div className="block_title_h2">
                                <p>永續發展，以國際趨勢為例，臺灣音樂也做得到</p>
                            </div>
                            <div className="content_txt">
                                在去年底的COP26簽訂格拉斯哥氣候協定後，2050年淨零排放（Net Zero）已是全球氣候行動的共識。而音樂產業也不例外，全球三大音樂唱片公司，環球、華納、Sony以及部分廠牌也回應簽署音樂氣候協定，目標2030年減碳50%、2050年淨零排放。
                            </div>
                            <div className="btn_box">
                                <a className="more_btn" href='./02_tw05.html'>
                                    MORE+
                                </a>
                            </div>
                        </div>
                        <div className="r_box">
                            <img src={IMG} alt="" />
                        </div>
                    </div> */}
                 </div>
             </div>
        </div>
    );
}

export default Music3;
