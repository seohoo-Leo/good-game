
import { create } from "zustand";


const useUserInfo = create((set,get)=>({
    login :true,
    setLogin:(login:boolean)=>set({login})
}))




export default useUserInfo