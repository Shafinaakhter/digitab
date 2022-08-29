import React from 'react'
import CountUp from 'react-countup'
import './Projects.css'

const Projects = () => {

  

  return (
    <>
        <div className="projects" id='pages'>
            <div className="p-top">
                <img src="./images/project-img.jpg" alt="" />
            </div>
            
            <div className="container-fluid"> 
            
            {/* <video src="./video/space.mp4" controls></video> */}
            
                <div className="last-image">
                    <img src="./images/red.png" alt="" />
                </div>

                <div className="row">

                    <div className="col-md-3">
                        <div className="p-num">
                         <p className='count'><CountUp end={100} /></p>
                        <span>PROJECTS COMPLETE</span>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-num">
                        <p className='count'><CountUp end={175} /></p>
                        <span>HAPPY CUSTOMER</span>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-num">
                        <p className='count'><CountUp end={5} /></p>
                        <span>OUR PATNER</span>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-num">
                        <p className='count'><CountUp end={9} />/<CountUp end={10} /></p>
                        <span>AVARAGE RATING</span>  
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Projects