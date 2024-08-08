import { AxiosController } from "apis/api.controller"
import { apiUtil } from "apis/api.util"
import { BaseDto } from "apis/dto/base.dto"
import { NoticeDetailDto, NoticeDto } from "apis/dto/news.dto"
import { IApiResWrapper } from "apis/type"

export class NewsApi {
  constructor(private controller: AxiosController) {}
  async getList({ type, row, page }: { type: string; row: number; page: number }) {
    // 'NOTICE', 'EVENT', 'UPDATE'
    const response = await this.controller.get<IApiResWrapper<NoticeDto>>({
      url: `/news/?type=${type}&row=${row}&page=${page}`,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response.data
  }
  async getDetail(seq: number) {
    const response = await this.controller.get<IApiResWrapper<NoticeDetailDto>>({
      url: `/news/detail/${seq}`,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response.data
  }
  async registNews(body: { title: string; content: string; type: string }) {
    const response = await this.controller.post<IApiResWrapper<BaseDto>>({
      url: `/news`,
      body,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response
  }
  async editNews(body: { seq: number; title: string; content: string; type: string }) {
    const response = await this.controller.put<IApiResWrapper<BaseDto>>({
      url: `/news`,
      body,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response.data
  }
  async deleteNews(body: { seq: number }) {
    const response = await this.controller.delete<IApiResWrapper<BaseDto>>({
      url: `/news`,
      options: {
        data: body,
      },
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response.data
  }
}
