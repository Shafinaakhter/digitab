import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="container-fluid">
                <div className="f-wrap">
                    <div className="apple">
                        <p>Apple</p>
                        <p>&copy; Adobe XD Kit 2017</p>
                    </div>
                    <div className="terms ms-5">
                        <a href="#">About Us</a>
                        <a href="#">Contact</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                    <div className="site ms-5">
                    <i className="fa-brands fa-facebook-f me-3"></i>Facebook<br />
                    <i className="fa-brands fa-twitter me-3"></i>Twitter<br />
                    <i className="fa-brands fa-instagram me-3"></i>Instagram <br />
                    </div>
                    <div className="news ms-5">
                    <p>Subscribe to our newslatter</p>
                    <form className='form-controls'>
                    
                        <input type="email" name="email" id="email" placeholder='Email Address' />
                        <button type='submit' className='f-btn'>OK</button>
                    
                    </form> 
                    </div>
                    <div className="c-num ms-5">
                        <p>497 Evergreen Rd. Roseville,</p>
                        <p>+44 345 678 903</p>
                        <p>adobexd@mail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer