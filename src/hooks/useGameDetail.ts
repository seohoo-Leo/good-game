import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchGameDetail=async(id:string)=>{
    const res = await axios.get(`${baseUrl}/api/gameDetail?id=${id}`)
    return res 
 
}

export const useGameDetail=(id:string)=>{
    return useQuery({
        queryKey:['gamedetail', id],
        queryFn : ()=>fetchGameDetail(id),
        select : (results) => results.data,
    })

}