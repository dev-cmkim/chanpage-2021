import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStarOfDavid,
    faCode,
    faPeopleCarry,
  } from "@fortawesome/free-solid-svg-icons";


const About = () => {
    return (  
        <div className="about">
            <h2 className="pointText">ABOUT</h2>
            <ul className="topBox">
              <li>
                 <FontAwesomeIcon className="icon" icon={faStarOfDavid}  />
                 <h3>도전</h3>
                 <p>도전하는것이 두렵지 않습니다.</p>
              </li>
              <li>
                 <FontAwesomeIcon className="icon" icon={faCode}  />
                 <h3>끈기</h3>
                 <p>쉽게 포기하지 않습니다.</p>
              </li>
              <li>
                 <FontAwesomeIcon className="icon" icon={faPeopleCarry}  />
                 <h3>소통</h3>
                 <p>서로 도우며 함께 협력하겠습니다.</p>
              </li>
            </ul>
        </div>
    );
}
 
export default About;