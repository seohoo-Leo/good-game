import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchPlatforms=async()=>{
    const res = await axios.get(`${baseUrl}/api/platforms`)
    return res 
 
}

export const usePlatforms=()=>{
    return useQuery({
        queryKey:['platforms'],
        queryFn : ()=>fetchPlatforms(),
        select : (results) => results.data
    })

}