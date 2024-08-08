import { Expose } from "class-transformer"
import { BaseDto } from "./base.dto"

export class MemberDto extends BaseDto {
  @Expose()
  userLists!: {
    id: string
    nick: string
    jumin1: string
    mail: string
    status: string
    reg_date: string
    address: string
    phone: string
    num: number
    cash: number
    name: string
    charName: string
    stop_date: string | null
  }[]
  @Expose()
  total!: number
}

export class MemberPayDto extends BaseDto {
  @Expose()
  userPayLists!: {
    sender_id: string
    nick: string
    receiver_id: string
    item_type: number
    itemName: string
    payType: string
    regdate: string
    item_life: number
    bnschk: string
  }[]
  @Expose()
  userpayTotal!: number
}
export class MemberDetailDto extends BaseDto {
  @Expose()
  userDetail!: {
    num: number
    id: string
    nick: string
    name: string
    jumin1: string
    jumin2: string
    year: string
    month: string
    day: string
    sex: string
    mail: string
    pcs1: string | null
    pcs2: string | null
    pcs3: string | null
    off_tel1: string | null
    off_tel2: string | null
    off_tel3: string | null
    zip1: string | null
    zip2: string | null
    addr1: string | null
    addr2: string
    qna: string
    qna_value: string
    date: string | null
    stop_date: string
    stop_count: string
    stop_reason: string
    out_date: string
    agree_date: string
    level: string
    mem_out: string
    mem_type: string
    parent_name: null
    parent_year: null
    parent_month: null
    parent_day: null
    consenter_way: string
    state: string
    cash: number
    bonus: number
    sanction: number
    phone_verified: number
    u_code: string
    nice_req_number: string
    nice_res_number: string
    nice_auth_type: string
    nice_name: string
    nice_birth_date: string
    nice_gender: string
    nice_national_info: string
    nice_di: string
    nice_ci: null
    nice_mobile_no: string
    nice_mobile_co: string
    reg_date: string
  }
}
