import { AxiosController } from "apis/api.controller"
import { apiUtil } from "apis/api.util"
import { BaseDto } from "apis/dto/base.dto"
import { IApiResWrapper } from "apis/type"

export class GameTestApi {
  constructor(private controller: AxiosController) {}

  async chargeCashForTest(body: { cash: string; receiverId: string; ipAddress: string }) {
    const response = await this.controller.post<IApiResWrapper<BaseDto>>({
      url: `/admin/test`,
      body,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response.data
  }
}
