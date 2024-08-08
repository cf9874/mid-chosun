// import { AxiosInstance } from "axios"
import { IApiResWrapper } from "./type"
import { axiosInstance } from "./axios.instance"
import { UserDto } from "./dto/user.dto"
import { plainToInstance } from "class-transformer"
import { AxiosError } from "axios"
import { apiUtils } from "utils"

const getUserData = async () => {
  try {
    const { data } = await axiosInstance.get<IApiResWrapper<UserDto>>("/userData")
    return plainToInstance(UserDto, data.data)
  } catch (error) {
    // return apiUtil.onError(error)
  }
}
// const getUserData = (apiInstance: AxiosInstance) => async () => {
//   try {
//     const { data } = await apiInstance.get<IApiResWrapper<UserDto>>("/userData")
//     return plainToInstance(UserDto, data.data)
//   } catch (error) {
//     // apiUtil.onError(error)
//   }
// }
const login = async (body: { id: string; pass: string }) => {
  try {
    const { data } = await axiosInstance.post<IApiResWrapper<UserDto>>("/member/login", body)
    return plainToInstance(UserDto, data.data)
  } catch (error) {
    const { response } = error as AxiosError<{
      data: {
        message: string
      }
    }>
    return response?.data.data
  }
}

const signup = async (body: {
  id: string
  pass: string
  name: string
  nick: string
  jumin1: string
  jumin2: string
  mail: string
  pcs1: string
  pcs2: string
  pcs3: string
  zip1: string
  addr1: string
  addr2: string
  qna: string
  qna_value: string
}) => {
  try {
    const { data } = await axiosInstance.post<IApiResWrapper<UserDto>>("/member/join_up", body)
    return data.data
  } catch (error) {
    const { response } = error as AxiosError<{
      data: {
        message: string
      }
    }>
    return response?.data.data
  }
}

const signOut = () => {
  apiUtils.removeUserData(null)
}

export const userApi = {
  getUserData,
  login,
  signup,
  signOut,
}
