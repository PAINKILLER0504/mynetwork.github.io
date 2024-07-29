//独立地完成了整个程序从分析、设计到编码的所有工作。
//如果在上述过程中，遇到了什么困难而求教于人，那么，将在实习总结报告中完整列举所遇到的问题，以及别人给的提示。
//201931774122邓睿
import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import Experties from "./components/Experties/Experties";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import People from "./components/People/People";
import Footer from "./components/Footer/Footer";
import css from './styles/app.module.scss'

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
          <Header></Header>
          <Hero/>
          <Experties/>
          <Works/>
          <Portfolio/>
          <People/>
          <Footer></Footer>
    </div>
  )
};


export default App;
