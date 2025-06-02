import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchGameSearch=async(search:string|null)=>{
    const res = await axios.get(`${baseUrl}/api/gameSearch?search=${search}`)
    return res 
 
}

export const useGameSearch=(search:string|null)=>{
    return useQuery({
        queryKey:['gamesearch', search],
        queryFn : ()=>fetchGameSearch(search),
        select : (results) => results.data
    })

}