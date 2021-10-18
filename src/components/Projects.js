import React, { Component } from 'react';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import gangnamChaImg1 from '../assests/images/cha-gangnam/0.png';
import gangnamChaImg2 from '../assests/images/cha-gangnam/1.png';
import gangnamChaImg3 from '../assests/images/cha-gangnam/2.jpg';
import gangnamChaImg4 from '../assests/images/cha-gangnam/3.png';
import bundangChaImg1 from '../assests/images/cha-bundang/b1.PNG';
import bundangChaImg2 from '../assests/images/cha-bundang/b2.PNG';
import bundangChaImg3 from '../assests/images/cha-bundang/b3.PNG';
import bundangChaImg4 from '../assests/images/cha-bundang/b4.PNG';
import bundangChaImg5 from '../assests/images/cha-bundang/b5.PNG';
import bundangChaImg6 from '../assests/images/cha-bundang/b6.PNG';
import bundangChaImg7 from '../assests/images/cha-bundang/b7.PNG';
import bundangChaImg8 from '../assests/images/cha-bundang/b8.PNG';
import bundangChaImg9 from '../assests/images/cha-bundang/b9.PNG';





class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  
  render() {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,  // 1장씩 뒤로 넘어가게
      centerMode: true,
      centerPadding: '0px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      fade: false,
      infinite: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const slideData = [
      {
        index: 0,
        headline: '강남차병원 의료진용 앱',
        src : gangnamChaImg1
      },
      {
        index: 1,
        headline: '강남차병원 의료진용 앱',
        src : gangnamChaImg2
      },
      {
        index: 2,
        headline: '강남차병원 의료진용 앱',
        src :gangnamChaImg3
      },
      {
        index: 3,
        headline: '강남차병원 의료진용 앱',
        src : gangnamChaImg4
      },
      {
        index: 4,
        headline: '분당차병원 환자용 앱(웹)',
        src : bundangChaImg1
      },
      {
        index: 5,
        headline: '분당차병원 환자용 앱(웹)',
        src : bundangChaImg2
      },
      {
        index: 6,
        headline: '분당차병원 환자용 앱(웹)',
        src : bundangChaImg3
      },
      {
        index: 7,
        headline: '분당차병원 환자용 앱(웹)',
        src : bundangChaImg4
      },
      {
        index: 8,
        headline: '분당차병원 환자용 앱(웹)',
        src : bundangChaImg5
      },
      {
        index: 9,
        headline: '분당차병원 환자용 앱(웹)',
        src : bundangChaImg6
      },
      {
        index: 10,
        headline: '분당차병원 환자용 앱(웹)',
        src : bundangChaImg7
      },
      {
        index: 11,
        headline: '분당차병원 환자용 앱(웹)',
        src : bundangChaImg8
      },
      {
        index: 12,
        headline: '분당차병원 환자용 앱(웹)',
        src : bundangChaImg9
      },
    ]

  
    return (
      <div className="Projects">
         <h3 className="pointText">Projects</h3>
         <Slider {...settings}>
            {slideData.map(({ headline, src }) => {
              return (
                <div>
                  <div className="slide-img">
                    <img alt={headline} src={src} />
                    <h4>{headline}</h4>
                  </div>
                </div>
              )
            })}
         </Slider>
    </div>
    );
  }
}

export default Projects;

