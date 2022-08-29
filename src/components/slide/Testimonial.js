import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonial = () => {

    const clients = [
        {
            image : './images/group.png',
            
        },
        {
            image : './images/group.png',
            
        }
    ]


  return (
    <>
    <div className="testimonials" id='testimonials'>
        <div className="t-wrapper">
            
 
            {/* slider  */} 

            
            <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}
            >
                {clients.map((client, index)=>{
                    return(
                        <SwiperSlide key={index}>
                            
                            <div className="testimonial">
                                <img src={client.image} alt="" />
                            </div>
                            
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </div>
    </div>
    </>
  )
}

export default Testimonial