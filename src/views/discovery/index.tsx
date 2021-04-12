import React, {FC, useEffect} from 'react'
import MusicSwiper from '@/components/swiper'
import {fetcher} from '@/api/server'
import useSWR from "swr";

const Discovery: FC = () => {
    const {data, error} = useSWR('/banner', fetcher)

    console.log(data)

    return (<>
        <MusicSwiper banners={data?.banners}/>
    </>)
}

export default Discovery