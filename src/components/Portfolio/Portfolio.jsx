//独立地完成了整个程序从分析、设计到编码的所有工作。
//如果在上述过程中，遇到了什么困难而求教于人，那么，将在实习总结报告中完整列举所遇到的问题，以及别人给的提示。
//201931774122邓睿

import React from "react";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, staggerContainer, textVariant } from "../../utils/motion";
const Portfolio = () =>{

    
    return(
        <motion.section 
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{once: false,amount: 0.25}} 
        className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="3"></a>

            <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    <div>
                        <span className="primaryText">
                            惊艳舞台
                        </span>
                        <p className="Text" style={{marginTop:"10px"}}>精选演奏现场</p>
                    </div>

                    <span className="secondaryText">展开更多</span>
                </div>

                {/* 视频 */}
                <div className={`flexCenter ${css.showCase}`}>
                    
                    <motion.video 
                    variants={fadeIn("up","tween",0.5,0.6)}
                    src="./HowToLove.mp4" controls>
                    </motion.video>
                    <motion.video 
                    variants={fadeIn("up","tween",0.5,0.6)}
                    src="./RollingInTheDeep.mp4" controls>
                    </motion.video>
                    <motion.video 
                    variants={fadeIn("up","tween",0.5,0.6)}
                    src="./SavagLove.mp4" controls>
                    </motion.video>
                    <motion.video 
                    variants={fadeIn("up","tween",0.5,0.6)}
                    src="./DANCEMONKEY.mp4" controls>                        
                    </motion.video>
                </div>
            </div>
        </motion.section>
    )

}
export default Portfolio