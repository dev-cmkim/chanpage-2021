import React, { Component } from 'react';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import {gangnamChaImg1, gangnamChaImg2, gangnamChaImg3, gangnamChaImg4, bundangChaImg1, bundangChaImg2, bundangChaImg3, bundangChaImg4, bundangChaImg5, bundangChaImg6, bundangChaImg7, bundangChaImg8, bundangChaImg9} from '../assests'


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
      // arrows: true,
      autoplay: true,
      autoplaySpeed: 1000,
      dots: false,
      fade: false,
      infinite: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
          }
        },
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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

