import { IApiResWrapper } from "../type"
import { AxiosController } from "apis/api.controller"
import { apiUtil } from "apis/api.util"
import { MemberDetailDto, MemberDto, MemberPayDto } from "apis/dto"
import { BaseDto } from "apis/dto/base.dto"
import { MEMBER_STATUS } from "const"

export class MemberApi {
  constructor(private controller: AxiosController) {}

  async getUserList({
    type,
    searchType,
    row,
    page,
    keyword,
  }: {
    type: string //'ALL' : 전체, 'NORMAL' : 일반, 'STOP' : 정지회원, 'OUT' : 탈퇴회
    searchType: string //'ID' : id검색 default, 'NICK' : 닉네임검색
    row: number
    page: number
    keyword: string
  }) {
    const response = await this.controller.get<IApiResWrapper<MemberDto>>({
      url: `/member/list?type=${type}&searchType=${searchType}&row=${row}&page=${page}&keyword=${keyword}`,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response
  }
  async getUserPayHistory({
    type,
    searchType,
    row,
    page,
    keyword,
  }: {
    type: string //'ALL' : 전체, 'BUY' : 구매, 'GIFT' : 선물
    searchType: string //'ID' : id검색 default, 'NICK' : 닉네임검색 "CHAR" : 캐릭터명
    row: number
    page: number
    keyword: string
  }) {
    const response = await this.controller.get<IApiResWrapper<MemberPayDto>>({
      url: `/member/payList?type=${type}&searchType=${searchType}&row=${row}&page=${page}&keyword=${keyword}`,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response
  }
  async getUserDetail(num: number) {
    const response = await this.controller.get<IApiResWrapper<MemberDetailDto>>({
      url: `/member/detail?num=${num}`,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response.data
  }
  async stopUser(body: { num: number; memOut: MEMBER_STATUS; stopCount: string }) {
    const response = await this.controller.put<IApiResWrapper<BaseDto>>({
      url: `/member/stop`,
      body,
    })
    if (apiUtil.isErrorResponse(response)) {
      return response
    }
    return response.data
  }
}
