import SwiperCore, {
    Navigation,
    Pagination,
    EffectCoverflow,
    Autoplay
} from "swiper";

import {SwiperOptions} from "swiper/types/swiper-options";
import "swiper/swiper-bundle.css";
import {Theme, useMediaQuery} from "@material-ui/core";
import {Swiper, SwiperSlide} from "swiper/react";
import React, {FC} from "react";
import Image from 'material-ui-image'
import useSWR from "swr";
import {fetcher} from "@/api/server";


export interface banner {
    imageUrl: string
}

export interface IMusicSwiper {
    banners: banner[] | undefined,
    params?: SwiperOptions
}

SwiperCore.use([Pagination, EffectCoverflow, Autoplay]);

const MusicSwiper: FC<IMusicSwiper> = ({banners, params: SwiperOptions}) => {
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
    const params: SwiperOptions = {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: matches ? 2 : 1,
        autoplay: true,
        navigation: false,
        pagination: true,
        loop: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 1.5,
            slideShadows: false
        }
    };
    return (<>
        <Swiper {...params}>
            {banners?.map((item, index) => (
                <SwiperSlide key={index}>
                    <Image aspectRatio={2} src={item.imageUrl} height={`100%`} width={`100%`} alt={''}/>
                </SwiperSlide>
            ))}
        </Swiper>
    </>)
}
export default MusicSwiper

