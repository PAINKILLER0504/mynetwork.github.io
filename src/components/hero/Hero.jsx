//独立地完成了整个程序从分析、设计到编码的所有工作。
//如果在上述过程中，遇到了什么困难而求教于人，那么，将在实习总结报告中完整列举所遇到的问题，以及别人给的提示。
//201931774122邓睿

import React from "react";
import css from './Hero.module.scss';
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import { fadeIn } from "../../utils/motion";
import { slideIn } from "../../utils/motion";

const Hero = () =>{
    return(

        <section className={`paddings ${css.wapper}`}>
        <a id="0"></a>


            <motion.div 
            initial="hidden"
            whileInView="show"
            variants={staggerContainer}
            viewport={{once: false,amount: 0.25}}                                            
            className={`innerWidth ${css.container}`}>
                {/* 上半部分 */}
                <div className={css.upperElements}>
                    <motion.span 
                    // 向右边淡入
                    variants={fadeIn("right", "tween", 0.2,1)}
                    className="primaryText">
                        欢迎光临 <br />刘宪华小站
                    </motion.span>

                    <motion.span 
                    // 向左边淡入                    
                    variants={fadeIn("left", "tween", 0.2,1)}
                    className="secondaryText">
                        音乐才子 <br />才华无限
                    </motion.span>
                </div>

                {/* 人物照片 */}
                <motion.div variants={fadeIn("up", "tween", 0.3,1)} className={css.person}>
                    <motion.img variants={slideIn("up", "tween", 0.5,1.3)}src="./henry.png" alt="" />
                </motion.div>
                {/* 微博 */}
                <a href="https://www.weibo.com/u/2975979770" target="_blank" className={css.weibo}> <img src="./weibo.svg" alt="" style={{width:"30px"}} /> 新浪微博</a>
                {/* 下半部分 */}
                <div className={css.lowerElements}>
                    <motion.div variants={fadeIn("right", "tween", 0.3,1)} className={css.experience}>
                        <div>出道</div>
                        <div className="primaryText">15</div>
                        <div className="secondaryText">
                            <div>years</div>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeIn("left", "tween", 0.3,1)} className={css.certificate}>
                        <img src="./violin.webp" alt="" />
                        <span>提琴艺术家</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero