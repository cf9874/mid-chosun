import React, { useState } from "react"
import { useRouter } from "next/router"
import { useAppSelector, useAsyncEffect } from "hooks"
import { shallowEqual } from "react-redux"
import { apiUtil } from "apis/api.util"
import { apiManager } from "apis/api.manager"

const AuthHoc = (Component: React.FC) => {
  const AuthenticateCheck = () => {
    const router = useRouter()
    const { profile } = useAppSelector(state => state.profileReducer, shallowEqual)
    const [isLogin, setisLogin] = useState(false)

    useAsyncEffect(async () => {
      const result = await apiManager.userApi.getUserInfo()
      if (apiUtil.isErrorResponse(result) || profile.id === "") {
        alert("다시 로그인해주세요.")
        apiUtil.removeUserData()
        void router.replace("/")
      } else {
        setisLogin(true)
      }
    }, [])

    if (isLogin) return <Component />
    else return null
  }

  return AuthenticateCheck
}

export default AuthHoc
