import "../Style/Skills.css";
import js from "../Images/jslogo.png";
import html from "../Images/html5.png";
import css from "../Images/css3.png";
import bootstrap from "../Images/bootstrap.png";
import reactjs from "../Images/react.png";
import java from "../Images/java_horizontal_logo_icon_167858.png";
import python from "../Images/Python_logo_and_wordmark.svg.png";
import boot from "../Images/sboot.png";
import spring from "../Images/springpng.png";
import hibernate from "../Images/Hibernate_logo_a.png";
import nodejs from "../Images/Node.js_logo_2015.svg.png";
import oracle from "../Images/Oracle-Logo.png";
import mysql from "../Images/Mysql_logo.png";
import sql from "../Images/Sql_data_base_with_logo.png";
import mongo from "../Images/mongodb_original_wordmark_logo_icon_146425.png";
import git from "../Images/Git_icon.svg.png";
import vs from "../Images/visual-studio-code-logo-png-transparent.png";
import excel from "../Images/Microsoft_Excel_2013-2019_logo.svg.png";
import word from "../Images/Microsoft-Word-Logo.png";
import postman from "../Images/postman.svg";
const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h2>SKILLS</h2>
      <div className="skilll">
        <div className="tech">
          <h3>FRONTEND</h3>
          <div id="logos" className="logoimg">
            <img src={js} alt="" />
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={bootstrap} alt="" />
            <img src={reactjs} alt="" />
          </div>
        </div>
        <div className="tech">
          <h3>BACKEND</h3>
          <div id="logos" className="logoimgback">
            <img src={java} alt="" />
            <img src={boot} alt="" />
            <img src={spring} alt="" />
            <img src={hibernate} alt="" />
            <img src={python} alt="" />
            <img src={nodejs} alt="" />
          </div>
        </div>
        <div className="tech">
          <h3>DATABASE</h3>
          <div id="logos" className="database">
            <img src={oracle} alt="" />
            <img src={sql} alt="" />
            <img src={mysql} alt="" />
            <img src={mongo} alt="" />
          </div>
        </div>
        <div className="tech">
          <h3>TOOLS</h3>
          <div id="logos" className="tools">
            <img src={git} alt="" />
            <img src={excel} alt="" />
            <img src={word} alt="" />
            <img src={vs} alt="" />
            <img src={postman} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
