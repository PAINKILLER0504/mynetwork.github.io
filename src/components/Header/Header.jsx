//独立地完成了整个程序从分析、设计到编码的所有工作。
//如果在上述过程中，遇到了什么困难而求教于人，那么，将在实习总结报告中完整列举所遇到的问题，以及别人给的提示。
//201931774122邓睿

import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight} from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter"
const Header = () =>{
// 开启菜单
    const [menuOpend,setMenuOpened] = useState(false);
    //阴影
    const headerShadow = useHeaderShadow()
    const menuRef = useRef()
// 点击任意部分关闭菜单
    useOutsideAlerter({
        menuRef,
        setMenuOpened
    }     
    )

    return(
        <motion.div
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{once: false,amount: 0.25}} 
        className={`paddings ${css.wapper}`}
        style={{boxShadow: headerShadow}}
        >
            
            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={css.name}>
                    <a href="#0">刘宪华</a>
                </div>

                <ul 
                ref={menuRef}
                style={getMenuStyles(menuOpend)}
                className={`flexCenter ${css.menu}`}>
                    <li><a href="#1">简介</a> </li>
                    <li><a href="#2">生涯</a> </li>
                    <li><a href="#3">mv</a></li>
                    <li><a href="#4">musics</a></li>
                    <li className={`flexCenter ${css.phone}`}>
                    </li>
                </ul>
{/*中小屏幕菜单栏  */}
                <div className={css.menuIcon}
                onClick={()=>setMenuOpened((prev)=>!prev)}
                >
                    <BiMenuAltRight size={30}/>
                </div>
                
                
            </div>
        </motion.div>
    )
}
export default Header