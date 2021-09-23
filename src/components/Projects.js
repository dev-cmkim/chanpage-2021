import React, { Component } from 'react';
import Slide from "./Slide";


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  
  
  render() {
    const slideData = [
      {
        index: 0,
        headline: 'New Fashion Apparel',
        button: 'Shop now',
        src :'../assests/images/cha-gangnam/0.png'
      },
      {
        index: 1,
        headline: 'In The Wilderness',
        button: 'Book travel',
        src : '../assests/images/cha-gangnam/1.png'
      },
      {
        index: 2,
        headline: 'For Your Current Mood',
        button: 'Listen',
        src :'../assests/images/cha-gangnam/2.png'
      }
    ]

  
    return (
      <div className="Projects">
         <h3 className="pointText">Projects</h3>
         <Slide slide={slideData} />
    </div>
    );
  }
}

export default Projects;

