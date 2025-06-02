
import { create } from "zustand";

interface UserInfoState{
    login:boolean,
    setLogin:(login:boolean) => void
}

const useUserInfo = create<UserInfoState>((set)=>({
    login :true,
    setLogin:(login:boolean)=>set({login})
}))




export default useUserInfo