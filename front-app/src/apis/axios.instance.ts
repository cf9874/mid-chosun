import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { setCookie } from "nookies"
import createAuthRefreshInterceptor from "axios-auth-refresh"
import router from "next/router"
import nookies from "nookies"
import { API_ERROR } from "const"
import { IApiResWrapper } from "./type"
import { apiUtils } from "utils"

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "content-type": "application/json",
    "Cache-Control": "no-cache, must-revalidate",
  },
})

const shouldRefresh = (error: AxiosError<{ message: API_ERROR }>) => {
  return error.response?.status === 401 && error.response?.data.message === API_ERROR.LOGOUT
}

const refreshAuthLogic = (failedRequest: { response: AxiosResponse } & AxiosRequestConfig) => {
  const cookies = nookies.get()

  return axiosInstance
    .post<IApiResWrapper<{ access_token: string }>>(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/access-token`, {
      token: cookies[process.env.NEXT_PUBLIC_REFRESHE_TOKEN_ID ?? ""],
    })
    .then(res => {
      setCookie(null, process.env.NEXT_PUBLIC_ACCESS_TOKEN_ID ?? "", res.data.data.access_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      })

      failedRequest.response.config.headers["Authorization"] = "Bearer " + res.data.data.access_token

      return Promise.resolve()
    })
    .catch(error => {
      console.error(error)

      apiUtils.removeUserData()
      void router.push("/member/signin")

      return Promise.reject(new CustomAxiosError(API_ERROR.LOGOUT))
    })
}

createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic, {
  // statusCodes: [401],
  shouldRefresh: shouldRefresh,
})

axiosInstance.interceptors.request.use(request => {
  return request
})

axiosInstance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
)

export { axiosInstance }

class CustomAxiosError extends Error {
  response: { data: { message: string } }
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
    this.response = { data: { message } }
  }
}
