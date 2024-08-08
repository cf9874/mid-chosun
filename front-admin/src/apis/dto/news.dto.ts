import { Expose } from "class-transformer"
import { BaseDto } from "./base.dto"

export class NoticeDto extends BaseDto {
  @Expose()
  list!: {
    seq: number
    title: string
    count: number
    reg_date: string
    content: string
    enable: number
  }[]
  @Expose()
  total!: number
}
export class NoticeDetailDto extends BaseDto {
  @Expose()
  seq!: number
  @Expose()
  title!: string
  @Expose()
  content!: string
  @Expose()
  type!: string
  @Expose()
  count!: number
  @Expose()
  enable!: number
  @Expose()
  reg_date!: string
}
