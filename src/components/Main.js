import myImg from '../assests/images/me.png'


const Main = () => {
    return (  
        <div className="main">
            <div className="img_wrap">
                <img src={myImg} alt="로고"/>
            </div>
            <p>Hello, I'm <span className="pointText">CHANMI</span></p>
            <p>Front-end/Full-stack Engineer</p>
        </div>
    );
}
 
export default Main;