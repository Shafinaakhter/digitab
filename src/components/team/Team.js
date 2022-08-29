import React, { useEffect } from 'react'
import 'aos/dist/aos.css'; 
import Aos from 'aos'
import './Team.css'

const Team = () => {

    useEffect(() => {
        Aos.init();
    }, [])

  return (  
    <>
        <div className="team" id='blog'>

            <div className="t-top">
                <h2>Our Great Team Member</h2>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="image" data-aos="zoom-in-left" data-aos-offset="200">
                            <img src="./images/team-one.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image" data-aos="zoom-in-left" data-aos-offset="200">
                            <img src="./images/team-two.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image" data-aos="zoom-in-left" data-aos-offset="200">
                            <img src="./images/team-three.jpg" alt="" />
                        </div>
                    </div>

                    <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="image"  data-aos="zoom-in-left" data-aos-offset="200">
                            <img src="./images/team-four.jpg" alt="" style={{marginLeft:'-10px', width:'800px'}} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="image"  data-aos="zoom-in-left" data-aos-offset="200" >
                            <img src="./images/team-five.jpg" alt="" style={{  marginRight:'100px'}}/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Team