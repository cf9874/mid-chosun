import { AxiosRequestConfig } from "axios"

export interface IAxiosParams {
  url?: string
  options?: AxiosRequestConfig
  body?: unknown
}

export interface IApiResWrapper<T> {
  data: T
  now: number
}
