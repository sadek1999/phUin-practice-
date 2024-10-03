import { baseApi } from "../../api/baseApi";


export const authApi=baseApi.injectEndpoints({
    endpoints:(build)=>({
       setUser:build.mutation({
        query:(userInfo)=>({
            url:"/auth/login",
            method:"POST",
            body:userInfo
        })
       })
    })
})

export default {useSetUserMutation}=authApi