import { Expose } from "class-transformer"
import { BaseDto } from "./base.dto"
import { REPORTTYPE } from "const"

export class CommunityDto extends BaseDto {
  @Expose()
  list!: {
    tbc_seq: number
    tbc_user_id: string
    tbc_ip: string
    tbc_title: string
    tbc_content: string
    tbc_file_urls: string
    tbc_type: string
    tbc_count: number
    tbc_update: string | null
    tbc_enable: number
    tbc_reg_date: string
    tbc_iamges: string | null
    nick: string
    commentCount: number
    id: string
  }[]
  @Expose()
  total!: number
}
export class CommunityDetailDto extends BaseDto {
  @Expose()
  tbc_seq!: number
  @Expose()
  tbc_user_id!: string
  @Expose()
  tbc_ip!: string
  @Expose()
  tbc_title!: string
  @Expose()
  tbc_content!: string
  @Expose()
  tbc_file_urls!: string
  @Expose()
  tbc_type!: string
  @Expose()
  tbc_count!: number
  @Expose()
  tbc_update!: string | null
  @Expose()
  tbc_enable!: number
  @Expose()
  tbc_reg_date!: string
  @Expose()
  tbc_iamges!: string | null
  @Expose()
  nick!: string
}
export class CommentDto extends BaseDto {
  @Expose()
  reportCommentList!: {
    c_seq: number
    c_user_id: string
    c_post_seq: number
    c_post_type: string
    c_re_seq: null | number
    c_content: string
    c_ip: string
    c_reported: number
    c_reported_type: keyof typeof REPORTTYPE
    c_enable: number
    c_re_enable: number
    c_update: string
    c_reg_date: string
    cr_seq: number
    cr_c_seq: number
    cr_user_id: string
    cr_reported_id: string
    cr_reported_content: string
    cr_reported_type: keyof typeof REPORTTYPE
    reg_date: string
  }[]
  @Expose()
  total!: number
}
