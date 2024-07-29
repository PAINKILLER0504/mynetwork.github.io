//独立地完成了整个程序从分析、设计到编码的所有工作。
//如果在上述过程中，遇到了什么困难而求教于人，那么，将在实习总结报告中完整列举所遇到的问题，以及别人给的提示。
//201931774122邓睿

import React from "react";
import css from "./People.module.scss";
import { motion } from "framer-motion";
import { staggerChildren } from "../../utils/motion";
import { musics, sliderSettings } from "../../utils/data";
import Slider from "react-slick";
const People = () =>{

    
    return(
        <motion.section 
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{once: false,amount: 0.25}} 
        className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="4"></a>

            <div className={`yPaddings innerWidth ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    
                    <span className="primaryText">
                        精选音乐合集
                    </span>
                    <p style={{marginTop:"2rem"}}>沉浸在音乐的海洋</p>
                </div>
                 {/* 图片 */}
                <div className={`yPaddings ${css.comments}`}>

                    <Slider {...sliderSettings} className={css.slider}>

                    {musics.map((music,i)=>{
                        return(
                            <div className={`flexCenter ${css.music}`} key={i}>

                                <img src={music.img} alt="" />
                                <p>{music.comment}</p>
                                {/* <iframe style={{frameBorder:"no" ,border:"0" ,marginWidth:"0" ,marginHeight:"0", width:"260" ,height:"52"}}  
                                src={music.src}></iframe> */}
                                <audio controls
                                    src={music.src}>
                                        <a href={music.src}>
                                            Download audio
                                        </a>
                                </audio>
                                <div className={css.line}></div>
                                
                                <div className={css.bio}>
                                    <span>{music.name}</span>
                                    <span>{music.post}</span>
                                </div>
                            </div>
                            )
                        })
                    }


                    </Slider>
                </div>



            </div>
        </motion.section>
    )

}
export default People