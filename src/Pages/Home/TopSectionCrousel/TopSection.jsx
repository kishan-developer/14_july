import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { GrFavorite } from "react-icons/gr";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function TopSection() {

    const data = [
        { id: 1, image: "https://t3.ftcdn.net/jpg/03/97/69/26/360_F_397692663_13eOSvqWVuwpIjT7UDQGUzdvrTd0y5dq.jpg"}, 
    ]

    console.log("data images : ", data)

    return (
        <>
            <div className="parent w-full lg:h-[550px] md:h-[400px] sm:h-[300px] h-[130px] flex items-center justify-center  pb-5">
                { data.map((item, index)=> (
                    <img  key={index} className="w-full h-full" src={item.image} alt="images" />
                ))}
                
            </div>

        </>
    )
}

export default TopSection;
