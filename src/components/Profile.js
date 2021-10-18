import myImg from "../assests/images/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faCalendarAlt,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
  return (
    <div className="profile">
      <div className="section1">
        <h2 className="pointText">PROFILE</h2>
        <div className="img_wrap">
          <img src={myImg} alt="증명사진" className="img" />
        </div>
        <p style={{ fontWeight: "bold" }}>CHANMI KIM</p>
        <p style={{ color: "#525152" }}>1997.10.03</p>
        <a href="https://github.com/dev-cmkim">
          <FontAwesomeIcon className="icon_git" icon={faGithub} />
        </a>
      </div>
      <div className="section2">
        <div className="section3">
          <h2 className="pointText">CAREER</h2>
          <ul>
            <li>
              <FontAwesomeIcon className="icon_edu" icon={faSchool} />
              명지전문대학 정보통신공학과 (졸업)
            </li>
            <li>
              <FontAwesomeIcon className="icon_edu" icon={faCalendarAlt} />
              2016.03~2019.02
            </li>
            <li>
              <FontAwesomeIcon className="icon_edu" icon={faSchool} />
              더조은아카데미 프론트엔드양성과정 (수료)
            </li>
            <li>
              <FontAwesomeIcon className="icon_edu" icon={faCalendarAlt} />
              2020.02~2020.07
            </li>
            <li>
              <FontAwesomeIcon className="icon_edu" icon={faSchool} />
              포씨게이트 모바일팀
            </li>
            <li>
              <FontAwesomeIcon className="icon_edu" icon={faCalendarAlt} />
              2020.11~
            </li>
          </ul>
        </div>
        <div className="section4">
          <h3 className="pointText">LICENSE</h3>
          <ul>
            <li>
              <FontAwesomeIcon className="icon_edu" icon={faCertificate} />
              정보처리산업기사
            </li>
            <li>
              <FontAwesomeIcon className="icon_edu" icon={faCalendarAlt} />
              2020.08.28
            </li>
            <li>
              <FontAwesomeIcon className="icon_edu" icon={faCertificate} />
              컴퓨터활용능력(2급)
            </li>
            <li>
              <FontAwesomeIcon className="icon_edu" icon={faCalendarAlt} />
              2019.09.13
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
