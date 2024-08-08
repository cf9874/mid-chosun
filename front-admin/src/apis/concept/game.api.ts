import { AxiosController } from "apis/api.controller"
import { apiUtil } from "apis/api.util"
import { BaseDto } from "apis/dto/base.dto"
import { CashItemHistoryDto, CharactersDto, InGameNoticeDto, OnlineUsersDto } from "apis/dto/game.dto"
import { IApiResWrapper } from "apis/type"

export class GameApi {
  constructor(private controller: AxiosController) {}
  async getOnlineUsers({
    searchType,
    row,
    page,
    keyword,
  }: {
    searchType: string
    row: number
    page: number
    keyword: string
  }) {
    const response = await this.controller.get<IApiResWrapper<OnlineUsersDto>>({
      url: `/data/ingame?row=${row}&page=${page}&searchType=${searchType}&keyword=${keyword}`,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response.data
  }
  async getCharacters({
    searchType,
    row,
    page,
    keyword,
  }: {
    searchType: string
    row: number
    page: number
    keyword: string
  }) {
    const response = await this.controller.get<IApiResWrapper<CharactersDto>>({
      url: `/data/char?row=${row}&page=${page}&searchType=${searchType}&keyword=${keyword}`,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response.data
  }
  async getCashItemHistory({
    searchType,
    row,
    page,
    keyword,
    date,
  }: {
    searchType: string
    row: number
    page: number
    keyword: string
    date: string
  }) {
    const response = await this.controller.get<IApiResWrapper<CashItemHistoryDto>>({
      url: `/data/useitem?row=${row}&page=${page}&searchType=${searchType}&keyword=${keyword}&date=${date}`,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response.data
  }
  async getNoticeList({
    searchType,
    row,
    page,
    keyword,
  }: {
    searchType: string
    row: number
    page: number
    keyword: string
  }) {
    const response = await this.controller.get<IApiResWrapper<InGameNoticeDto>>({
      url: `/data/noticeIngame?row=${row}&page=${page}&searchType=${searchType}&keyword=${keyword}`,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response.data
  }
  async registNotice(body: { comment: string; sendCnt: number; startDate: string; endDate: string }) {
    const response = await this.controller.post<IApiResWrapper<BaseDto>>({
      url: `/data/noticeIngame`,
      body,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response.data
  }
  async editNotice(body: { num: number; comment: string; sendCnt: number; startDate: string; endDate: string }) {
    const response = await this.controller.put<IApiResWrapper<BaseDto>>({
      url: `/data/noticeIngame`,
      body,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response.data
  }
  async deleteNotice(body: { num: number }) {
    const response = await this.controller.delete<IApiResWrapper<BaseDto>>({
      url: `/data/noticeIngame`,
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
