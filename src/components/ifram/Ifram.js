import React from 'react'
import './Ifram.css'

const Ifram = () => {
  return (
    <>
        <div className="ifram">
          <div className="i-top">
                <h2>Our Customer Feedback</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam officia consequuntur illo <br /> fugiat deleniti ipsa laboriosam. Minus nulla sit ipsa?</p>
          </div>

            <iframe  id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" >
            </iframe> 

            <div className="i-wrap">
                <img src="./images/man-one.png" alt="" className='i-one' />
                <img src="./images/man-two.png" alt="" className='i-two' />
                <img src="./images/man-three.png" alt="" className='i-three' />
                <img src="./images/man-four.png" alt="" className='i-four' />
                <img src="./images/man-five.png" alt="" className='i-five' />
                <img src="./images/man-six.png" alt="" className='i-six' />
                <img src="./images/man-seven.png" alt="" className='i-seven' />
                <img src="./images/man-eight.png" alt="" className='i-eight' />
            </div>

            

              <div className="i-box">
                <div className='i-icon'><i className="fa-solid fa-arrow-rotate-left reload"></i></div>
                  <div className='c-text mt-2 mb-4'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem odio facilis soluta, exercitationem cum? Corrupti, beatae similique eius consectetur id voluptate aliquam architecto numquam vel harum iusto consequatur asperiores ea  </p>
                  </div>

              <div className='i-cus'>

                <div className="i-display">
                  <img src="./images/a.png" alt="" />
                  <h4>Rakib Hassan</h4>
                  <p className='i-cus-p'>Founder & CEO</p>
                  <div className="star-icon">
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  </div>
                </div>

                <div className="i-display">
                  <img src="./images/a.png" alt="" />
                  <h4>Rakib Hassan</h4>
                  <p className='i-cus-p'>Founder & CEO</p>
                  <div className="star-icon">
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  </div>
                </div>

                <div className="i-display">
                  <img src="./images/c.png" alt="" />
                  <h4>Rakib Hassan</h4>
                  <p className='i-cus-p'>Founder & CEO</p>
                  <div className="star-icon">
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  </div>
                </div>

              </div>
            </div>


        </div>
    </>
  )
}

export default Ifram


{/* <div className="mapouter"><div className="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies-online.net"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div> */}