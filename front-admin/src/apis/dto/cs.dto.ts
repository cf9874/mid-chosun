import { Expose } from "class-transformer"
import { BaseDto } from "./base.dto"

export class QnaDto extends BaseDto {
  @Expose()
  qnaList!: {
    num: number
    id: string
    ip: string
    nick_name: string
    select_type: string
    char_name: string
    input_date: string
    proc: "0" | "1" | "2" | "3"
    title: string
    content: string
    re_content: string | null
    user_file: string | null
    file_size: number | null
    mail: string
    phone: string
    GM: string | null
    update_date: string | null
    deleted: number
    reg_date: string
  }[]
  @Expose()
  total!: number
}
