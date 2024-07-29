//独立地完成了整个程序从分析、设计到编码的所有工作。
//如果在上述过程中，遇到了什么困难而求教于人，那么，将在实习总结报告中完整列举所遇到的问题，以及别人给的提示。
//201931774122邓睿


import React from "react";
import css from "./Experties.module.scss";
import { motion } from "framer-motion";
import { WhatDoIHelp, projectExperience } from "../../utils/data";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
const Experties = () =>{

    
    return(
        <motion.section 
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{once: false,amount: 0.25}} 
        className={`paddings ${css.wrapper}`}>
            <a id="1"></a>
            <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
                {/* 左边 */}
                <div className={css.leftSide}>

                    {
                        projectExperience.map((exp, i)=>{
                            return (
                            <motion.div 
                            variants={fadeIn("right","tween",(i+1)*0.2,1)}
                            className={css.exp} key={i}>
                                <div className="flexCenter" style={{background: exp.bg}}> 
                                    <img src={exp.img} width={30} />
                                </div>


                                <div>
                                    
                                    <a href={exp.link} target="_blank"><span>{exp.name}</span></a>
                                </div> 

                            </motion.div>
                            );
                        })
                    }
                </div>
                {/* 右边 */}
                <motion.div variants={textVariant(0.5)} className={css.rightSide}>
                    <span className="primaryText">人物简介</span>
                    {
                        WhatDoIHelp.map((paragraph,i)=>{
                            return (<span className="secondaryText" key={i}>{paragraph}</span>);
                        })
                    }

                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className="primaryText">44+</span>
                            <span className="secondaryText">solo专辑</span>
                        </div>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className="primaryText">266+</span>
                            <span className="secondaryText">人气单曲</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )

}
export default Experties