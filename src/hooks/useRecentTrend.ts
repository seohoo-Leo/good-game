import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchRecentTrend=async({startDate, endDate})=>{
    const res = await axios.get(`${baseUrl}/api/recentTrend?startDate=${startDate}&endDate=${endDate}`)
    return res 
 
}

export const useRecentTrend=({startDate, endDate})=>{
    return useQuery({
        queryKey:['recentTrend',startDate, endDate],
        queryFn : ()=>fetchRecentTrend({startDate, endDate}),
        select : (results) => results.data
    })

}