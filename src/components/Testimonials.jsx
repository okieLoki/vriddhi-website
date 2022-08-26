import React from 'react'
import './Testimonials.css'



import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'



import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const Testimonials = () => {

    return (
        <div className='testimonials'>
            <div className='container'>

                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='card-test'>

                        <div className='card-interior'>
                            <p>We were not aware that school’s exist for specially abled. Also, we need an app where we can communicate with other parents in similar situations so that it can be easier for us.</p>
                            <br />
                            <h4 className='writer'>~ Ms. Sonia Talwar</h4>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide className='card-test'>

                        <div className='card-interior'>
                            <p>We really need an app where parents with common problems can interact with one another.</p>
                            <br />
                            <h4 className='writer'>~ Ms. Natalya Sood</h4>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide className='card-test'>

                        <div className='card-interior'>
                            <p>A tour program to help non-tech parents to use to app much efficiently. </p>
                            <br />
                            <h4 className='writer'>~ Ms. Rita Das</h4>
                        </div>

                    </SwiperSlide>
                </Swiper>

            </div>

        </div>
    )
}

export default Testimonials