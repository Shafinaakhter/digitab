import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <>
      <div className="sevices" id='features'>

        <div className="s-top">
          <h2>Our Great Services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur at pariatur commodi <br /> voluptatem, laboriosam ullam corporis animi maxime ipsa harum?</p>
        </div>

        <div className="container-fluid"> 
          <div className="row">

            <div className="col-md-6">
              <div className="s-wrap">
                <span><img src="./images/services-one.png" alt="not foune" /></span>
                <h4>Web Design</h4>
                <p className='s-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit <br />. Quis dolor laborum, vitae labore incidunt aliquam illo <br /> molestiae ipsa nostrum quasi.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="s-wrap">
                <span><img src="./images/services-two.png" alt="not foune" /></span>
                <h4>Web Design</h4>
                <p className='s-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit <br />. Quis dolor laborum, vitae labore incidunt aliquam illo <br /> molestiae ipsa nostrum quasi.
                </p>
              </div>
            </div>
            
          </div>


          <div className="row s-last">

            <div className="col-md-6">
              <div className="s-wrap">
                <span><img src="./images/services-three.png" alt="not foune" /></span>
                <h4>Web Design</h4>
                <p className='s-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit <br />. Quis dolor laborum, vitae labore incidunt aliquam illo <br /> molestiae ipsa nostrum quasi.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="s-wrap">
                <span><img src="./images/services-four.png" alt="not foune" /></span>
                <h4>Web Design</h4>
                <p className='s-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit <br />. Quis dolor laborum, vitae labore incidunt aliquam illo <br /> molestiae ipsa nostrum quasi.
                </p>
              </div>
            </div>
            
          </div>
          
            <button className='btn s-btn'> <a href="https://colorlib.com/wp/templates/" target="blank"> See More</a></button>
        </div>
      </div>
    </>
  )
}

export default Services