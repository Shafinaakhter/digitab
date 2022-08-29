import React from 'react'
import './Customer.css'

const Customer = () => {
  return (
    <>
        <div className="customer"> 

            <div className="c-top">
                <h2>Our Customer Feedback</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam officia consequuntur illo <br /> fugiat deleniti ipsa laboriosam. Minus nulla sit ipsa?</p>
            </div>

            <div className="c-wrap">
                <img src="./images/cus-image.png" alt="" className='c-first' />
                <img src="./images/man-one.png" alt="" className='c-one' />
                <img src="./images/man-two.png" alt="" className='c-two' />
                <img src="./images/man-three.png" alt="" className='c-three' />
                <img src="./images/man-four.png" alt="" className='c-four' />
                <img src="./images/man-five.png" alt="" className='c-five' />
                <img src="./images/man-six.png" alt="" className='c-six' />
                <img src="./images/man-seven.png" alt="" className='c-seven' />
                <img src="./images/man-eight.png" alt="" className='c-eight' />
            </div>





            <div className="c-box">
              <div className='c-icon'><i className="fa-solid fa-arrow-rotate-left left"></i></div>
              <div className='c-text mt-2 mb-4'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem odio facilis soluta, exercitationem cum? Corrupti, beatae similique eius consectetur id voluptate aliquam architecto numquam vel harum iusto consequatur asperiores ea  </p>
              </div>

              <div className='c-cus'>

                <div className="c-display">
                  <img src="./images/a.png" alt="" />
                  <h4>Rakib Hassan</h4>
                  <p className='c-cus-p'>Founder & CEO</p>
                  <div className="star-icon">
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  </div>
                </div>

                <div className="c-display">
                  <img src="./images/a.png" alt="" />
                  <h4>Rakib Hassan</h4>
                  <p className='c-cus-p'>Founder & CEO</p>
                  <div className="star-icon">
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  <i className="fa-solid fa-star star"></i>
                  </div>
                </div>

                <div className="c-display">
                  <img src="./images/c.png" alt="" />
                  <h4>Rakib Hassan</h4>
                  <p className='c-cus-p'>Founder & CEO</p>
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

export default Customer