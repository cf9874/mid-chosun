import { IApiResWrapper } from "../type"
import { UserDto, UserInfoDto } from "../dto/user.dto"
import { AxiosController } from "apis/api.controller"
import { apiUtil } from "apis/api.util"
import { plainToInstance } from "class-transformer"
import { BaseDto } from "apis/dto/base.dto"

export class UserApi {
  constructor(private controller: AxiosController) {}

  async signIn(body: { id: string; pass: string }) {
    const response = await this.controller.post<IApiResWrapper<UserDto>>({ url: "/admin/login", body })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return plainToInstance(UserDto, response.data).toJson<UserDto>()
  }
  signOut = () => {
    apiUtil.removeUserData(null)
  }
  async getUserInfo() {
    const response = await this.controller.get<IApiResWrapper<UserInfoDto>>({
      url: "/admin",
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response
  }
  async changePassword(body: { resetPassword: string; confirmPassword: string }) {
    const response = await this.controller.put<IApiResWrapper<BaseDto>>({
      url: "/admin",
      body,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response
  }
}
