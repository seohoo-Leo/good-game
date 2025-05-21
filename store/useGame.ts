
import { create } from "zustand";


const useGame = create((set,get)=>({
    id : 0,
    setId : (id:number) => set({id})
}))




export default useGame