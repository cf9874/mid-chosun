import { AxiosController } from "apis/api.controller"
import { apiUtil } from "apis/api.util"
import { BaseDto } from "apis/dto/base.dto"
import { CommentDto, CommunityDetailDto, CommunityDto } from "apis/dto/community.dto"
import { IApiResWrapper } from "apis/type"

export class CommunityApi {
  constructor(private controller: AxiosController) {}
  async getList({
    type, // 'FREE','IMG','MUNPA','IDEA'
    row,
    page,
    searchType,
    keyword,
  }: {
    type: string
    row: number
    page: number
    searchType: string
    keyword: string
  }) {
    const response = await this.controller.get<IApiResWrapper<CommunityDto>>({
      url: `community/?type=${type}&row=${row}&page=${page}&searchType=${searchType}&keyword=${keyword}`,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response.data
  }
  async getDetail(seq: number) {
    const response = await this.controller.get<IApiResWrapper<CommunityDetailDto>>({
      url: `/community/detail/${seq}`,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response.data
  }

  async deleteBoard(body: { contentSeq: number }) {
    const response = await this.controller.delete<IApiResWrapper<BaseDto>>({
      url: `/community`,
      options: {
        data: body,
      },
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response
  }

  async getCommentList({ row, page }: { row: number; page: number }) {
    const response = await this.controller.get<IApiResWrapper<CommentDto>>({
      url: `community/comment/?row=${row}&page=${page}`,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response.data
  }
  async deleteComment(body: { commentSeq: number }) {
    const response = await this.controller.delete<IApiResWrapper<BaseDto>>({
      url: `community/comment/`,
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
