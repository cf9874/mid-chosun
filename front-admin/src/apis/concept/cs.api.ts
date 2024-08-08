import { AxiosController } from "apis/api.controller"
import { apiUtil } from "apis/api.util"
import { QnaDto } from "apis/dto/cs.dto"
import { IApiResWrapper } from "apis/type"
import { plainToInstance } from "class-transformer"
import { CS_STATUS } from "const/cs.const"

export class CsApi {
  constructor(private controller: AxiosController) {}
  async getList({
    row,
    page,
    status,
    keyword,
    searchType,
  }: {
    row: number
    page: number
    status: CS_STATUS
    keyword: string
    searchType: "ID" | "NICK" | "CONTENT"
  }) {
    const response = await this.controller.get<IApiResWrapper<QnaDto>>({
      url: `center/qna?row=${row}&page=${page}&status=${status}&searchType=${searchType}&keyword=${keyword ?? ""}`,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return plainToInstance(QnaDto, response.data).toJson<QnaDto>()
  }
  async registAnswer(body: { num: number; proc: CS_STATUS; reContent: string }) {
    const response = await this.controller.put<IApiResWrapper<QnaDto>>({
      url: `center/qna`,
      body,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response.data
  }
}
