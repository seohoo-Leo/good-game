import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchGameInfo=async({startDate, endDate, mode})=>{
    const res = await axios.get(`${baseUrl}/api/gameInfo?startDate=${startDate}&endDate=${endDate}&mode=${mode}`)
    return res 
 
}

export const useGameInfo=({startDate, endDate, mode})=>{
    return useQuery({
        queryKey:['gameinfo',startDate, endDate, mode],
        queryFn : ()=>fetchGameInfo({startDate, endDate, mode}),
        select : (results) => results.data
    })

}