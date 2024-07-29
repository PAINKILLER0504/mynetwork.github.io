//独立地完成了整个程序从分析、设计到编码的所有工作。
//如果在上述过程中，遇到了什么困难而求教于人，那么，将在实习总结报告中完整列举所遇到的问题，以及别人给的提示。
//201931774122邓睿

import React from "react";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
const Footer = () =>{

    
    return(
        <motion.section 
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        viewport={{once: false,amount: 0.25}} 
        className={`paddings ${css.wrapper}`}>
            <motion.div 
            variants={footerVariants}
            className={`yPaddings innerWidth flexCenter ${css.container}`}>
                {/* 左边 */}
                <div className={`flexCenter ${css.left}`}>
                    
                    <span className="primaryText">
                        点击这里给我发送 <a href="mailto:dengrui0504@163.com">邮件</a>
                    </span>
                    
                </div>
                {/*右边*/}
                <div className={`yPaddings ${css.right}`}>
                    <div className={css.info}>
                        <span className="secondaryText">关于本站<p>© 2023 dengrui</p></span>
                        
                    </div>

                    <div className={css.menu}>
                        <li>仅作为学习使用</li>
                        <li>备案信息：</li>
                        <li><a href="http://beian.miit.gov.cn" target="_blank">蜀ICP备2022025264号</a></li>
                    </div>
                </div>



            </motion.div>
        </motion.section>
    )

}
export default Footer