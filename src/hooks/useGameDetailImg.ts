import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchGameDetailImg=async(id:string)=>{
    const res = await axios.get(`${baseUrl}/api/gameDetailImg?id=${id}`)
    return res 
 
}

export const useGameDetailImg=(id:string)=>{
    return useQuery({
        queryKey:['gamedetailImg', id],
        queryFn : ()=>fetchGameDetailImg(id),
        select : (results) => results.data
    })

}