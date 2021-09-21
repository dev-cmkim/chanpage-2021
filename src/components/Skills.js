import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faJava,
  faLinux,
  faSwift,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div className="skills">
      <h3 className="pointText">SKILLS</h3>
      <div className="skills_box">
        <span>
          <FontAwesomeIcon className="icon_skiils" icon={faHtml5} />
          <p>HTML5</p>
        </span>
        <span>
          <FontAwesomeIcon className="icon_skiils" icon={faCss3} />
          <p>CSS3</p>
        </span>
        <span>
          <FontAwesomeIcon className="icon_skiils" icon={faJs} />
          <p>JavaScript</p>
        </span>
        <span>
          <FontAwesomeIcon className="icon_skiils" icon={faJava} />
          <p>JAVA</p>
        </span>
        <span>
          <FontAwesomeIcon className="icon_skiils" icon={faReact} />
          <p>React</p>
        </span>
        <span>
          <FontAwesomeIcon className="icon_skiils" icon={faLinux} />
          <p>Linux</p>
        </span>
        <span>
          <FontAwesomeIcon className="icon_skiils" icon={faSwift} />
          <p>Swift</p>
        </span>
      </div>
    </div>
  );
};

export default Skills;
