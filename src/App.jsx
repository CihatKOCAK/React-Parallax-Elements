import React from 'react'
import "./styles/normalise.css";
import "./styles/main_styles.css"
import MyButton from './components/MyButton';

const App = () => {
  return (
    <div className="main_container">

      <div className="section1">
        <img src="./images/space.png" alt="" className="space" />
        <img src="./images/earth.png" alt="" className="earth" />
        <img src="./images/planet1.png" alt="" className="planet1" />
        <img src="./images/rocket.png" alt="" className="rocket" />
        <img src="./images/satellite.png" alt="" className="satellite" />
        <div className="greeting">[Welcome]</div>

      </div>

      <div className="section2">
        <svg className="svg_curve_top" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 100 100" preserveAspectRatio="none" >
          <path d="M0,100 C65,93 76,10 100,100" />
        </svg>

        <div className="section2_container">
          <div className="left_side">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam expedita veritatis rerum accusamus dolore deserunt repellat temporibus nam perspiciatis nesciunt, fugit aliquam praesentium reprehenderit tenetur iusto iure sed quo nostrum! </p>
          </div>
          <div className="right_side">
            <img src="https://picsum.photos/1200/1200" alt="" className="image" />
          </div>
        </div>

        <svg className="svg_curve_bottom" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 100 100" preserveAspectRatio="none" >
          <path d="M0,0 C65,20 90,5 100,0" />
        </svg>

      </div>

      <div className="section3">
      Sign up for our newsletter!
      <input type="text" name="email" id="email" className="input_email" />
      <MyButton />
        <div className="contracts">
          <div className="contacts_section">
      <ul>
        <li>Affiliates</li>
        <li>Careers</li>
        <li>Privacy</li>
      </ul>
          </div>
          <div className="contacts_section">
    <ul>
      <li>Telephone <i className="fas fa-phone-square-alt"></i></li>
      <li>Email <i className="fas fa-envelope-square"></i></li>
      
    </ul>
          </div>
          <div className="contacts_section">
<ul>
  <li>Linkedin <i className="fab fa-linkedin-in"></i></li>
  <li>Twitter <i className="fab fa-twitter"></i></li>
  <li>Github <i className="fab fa-github"></i></li>
</ul>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
