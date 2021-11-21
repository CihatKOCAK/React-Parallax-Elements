import React from 'react'
import "./styles/normalise.css";
import "./styles/main_styles.css"

import ParallaxJSXWrapper from "./components/ParallaxJSXWrapper";
import MyButton from './components/MyButton';



const App = () => {

  const Space = ParallaxJSXWrapper(<img src="./images/space.png" alt="" className="space" />, 0.02);
  const Earth = ParallaxJSXWrapper(<img src="./images/earth.png" alt="" className="earth" />, 0.07);
  const Planet = ParallaxJSXWrapper(<img src="./images/planet1.png" alt="" className="planet1" />, 0.03);
  const Rocket = ParallaxJSXWrapper(<img src="./images/rocket.png" alt="" className="rocket" />, 0.04);
  const Satellite = ParallaxJSXWrapper(<img src="./images/satellite.png" alt="" className="satellite" />, 0.03);

  const Greeting = ParallaxJSXWrapper(<div className="greeting">[Welcome]</div>, 0.04);

  const Section2 = ParallaxJSXWrapper(<div className="section2">
   
<div className="section2_container">
      <div className="left_side">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam expedita veritatis rerum accusamus dolore deserunt repellat temporibus nam perspiciatis nesciunt, fugit aliquam praesentium reprehenderit tenetur iusto iure sed quo nostrum! </p>
      </div>
      <div className="right_side">
        <img src="https://picsum.photos/1200/1200" alt="" className="image" />
      </div>
    </div>
  </div>, 0.05)

  const Section3 = ParallaxJSXWrapper(<div className="section3">
  Sign up for our newsletter!
  <input type="text" name="email" id="email" className="input_email" />
  <MyButton name="Sign Up" />
  <div className="contracts">
    <div className="contact_section">
      <ul>
        <li>Affiliates</li>
        <li>Careers</li>
        <li>Privacy</li>
      </ul>
    </div>
    <div className="contact_section">
      <ul>
        <li>Telephone <i className="fas fa-phone-square-alt"></i></li>
        <li>Email <i className="fas fa-envelope-square"></i></li>

      </ul>
    </div>
    <div className="contact_section">
      <ul>
        <li>Linkedin <i className="fab fa-linkedin-in"></i></li>
        <li>Twitter <i className="fab fa-twitter"></i></li>
        <li>Github <i className="fab fa-github"></i></li>
      </ul>
    </div>
  </div>

</div>,0.05)

  return (
    <div className="main_container">

      <div className="section1">
        <Space />
        <Earth />
        <Planet />
        <Rocket />
        <Satellite />
        <Greeting />

      </div>

      <Section2 />

      <Section3 />

    </div>
  )
}

export default App
