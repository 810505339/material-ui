import {fetcher} from "@/api/server";
import useSWR from "swr";
import {banner} from "@/components/swiper";

export default function useBanner() {
    const {data, error} = useSWR<{ banners: banner[] }>(`/banner`, fetcher)

    return {
        banners: data?.banners,
        isLoading: !error && !data,
        isError: error,
    }
}