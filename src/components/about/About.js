import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <div className="about">
        <div className="a-wrapper">
          <div className="a-left">
            <img src="./images/about-img.jpg" alt="" />
          </div>
          <div className="a-right">
          
            
              <h2>About us</h2>
              <h4>Our Agency Provide <br /> Best Service</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit. Sed nam ea reiciendis, distinctio porro ipsum pariatur <br /> mollitia dicta nemo quas error voluptatem, adipisci maxime </p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit. Sed nam ea reiciendis, distinctio porro ipsum pariatur <br /> mollitia dicta nemo quas error voluptatem, adipisci maxime </p>

            <div className="a-group">
              <img src="./images/a-i-one.png" alt="not found" className='img-one' /> <span>Modern Design</span>
              <img src="./images/a-i-two.png" alt="not found" className='img-two' /> <span>Premium Design</span> <br />
              <img src="./images/a-i-three.png" alt="not found" className='img-three' /> <span>Modern Design</span>
              <img src="./images/a-i-four.png" alt="not found" className='img-four' /> <span>Premium Design</span>
            </div>

            <div className="a-buttons">
                <button className='a-btn-one'>Learn More</button>
                <button className='btn a-btn-two'>Discover More</button>
            </div>
            <div className="a-last">
              <p className='t-text'>
                5 Years <br /> Work <br /> Experience
              </p>
              {/* <img src="./images/about-circle.png" alt="" />   */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About