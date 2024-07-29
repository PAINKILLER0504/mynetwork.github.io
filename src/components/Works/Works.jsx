import React from "react";
import css from "./Works.module.scss";
import { motion } from "framer-motion";
import { workExp } from "../../utils/data";
import { fadeIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";
const Works = () =>{

    
    return(
        <motion.section 
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{once: false,amount: 0.25}} 
        className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="2"></a>
            <div className={`flexCenter innerWidth ${css.container}`}>
                <span className="primaryText ypaddings">职业生涯</span>  
                <div className={`flexCenter ${css.experiences}`}>
                    {
                        workExp.map((exp,i)=>{
                            return(
                                <motion.div 
                                variants={textVariant2}
                                className={`flexCenter ${css.exp}`} key={i}>
                                    <div className={css.post}>
                                        <h1>{exp.place}</h1>
                                        <p>{exp.tenure}</p>

                                    </div>
                                    <div className={css.role}>
                                        
                                        <h2>{exp.role}</h2>
                                        <p>{exp.detail}</p>
                                    </div>

                                </motion.div>
                            )
                        })
                    }
{/* 进度条 */}
                    <motion.div variants={zoomIn(1,1)} className={css.progressbar}>
                        <motion.div variants={fadeIn("down","tween",1.5,1.5)} className={css.line}></motion.div>
                        <div><div className={css.circle} style={{background: "#286f6c"}}></div></div> 
                        <div><div className={css.circle} style={{background: "#f2704e"}}></div></div>
                        <div><div className={css.circle} style={{background: "#286f6c"}}></div></div> 
                        <div><div className={css.circle} style={{background: "#eec048"}}></div></div>
                    </motion.div>
                </div>   

            </div>
        </motion.section>
    )

}
export default Works