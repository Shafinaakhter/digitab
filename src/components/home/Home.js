import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="home" id='home'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="h-left">
                <h2>Best & First <br /> Digital System
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Aspernatur voluptas quidem necessitatibus, error <br /> officiis provident commodi reiciendis exercitationem ea  <br /> Voluptatem odit excepturi perferendis praesentium quisq  </p>
                <div className="h-buttons">
                  <button className='btn h-btn-one'> <a href="https://www.keysight.com/us/en/solutions/high-speed-digital-system-design.html" target="blank">Learn More</a> </button>
                  
                  <button className='btn h-btn-two'> <a href="https://www.lumapps.com/digital-workplace/digital-transformation-tools/" target="blank" >View Demo</a> </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
            <div className="h-right">
              <img src="./images/home.png" alt="not found" />

            </div>
            </div>
          </div>
        </div>
          
          
        
      </div>
    </>
  )
}

export default Home