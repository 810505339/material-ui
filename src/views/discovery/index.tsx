import React, {FC, memo, useEffect, useState} from 'react'
import MusicSwiper, {banner} from '@/components/swiper'
import {fetcher} from '@/api/server'
import useSWR from "swr";
import useBanner from '@/hooks/useBanner';


const Avatar: FC = memo(() => {
    const {data} = useSWR<any>('/personalized/newsong?limit=32', fetcher)
    return (
        <img src={data?.result[0].picUrl}/>
    )
})

function Example() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    console.count('渲染次数')

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>

        </div>
    );
}


const Discovery: FC = () => {

    // const {banners} = useBanner()


    return (<>
        <Example/>
    </>)
}

export default memo(Discovery)