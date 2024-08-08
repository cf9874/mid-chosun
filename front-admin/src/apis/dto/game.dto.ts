import { Expose } from "class-transformer"
import { BaseDto } from "./base.dto"

export class OnlineUsersDto extends BaseDto {
  @Expose()
  inGameLists!: {
    name: string
    id: string
    ip: string
    money: number
    bank: number
    lastlogin: string
    guildname: string
    level: number
    rebirth: string
    rebirth_level: number
  }[]
  @Expose()
  inGameTotal!: number
}

export class CharactersDto extends BaseDto {
  @Expose()
  characterLists!: {
    uid: number
    id: string
    name: string
    job: string
    sex_nm: string
    guildname: string
    money: number
    bank: number
    level: number
    rebirth_nm: string
    rebirth_level: number
    hp: number
    mp: number
    lastlogin: string
  }[]
  @Expose()
  characterTotal!: number
}

export class CashItemHistoryDto extends BaseDto {
  @Expose()
  shopItemUseLogs!: {
    logdate: string
    log_id: number
    zoneserver_id: number
    map: number
    kind: number
    uid: number
    char_name: string
    item_object_id: number
    item_type: number
    grade: number
    life: number
    ip: string
    desc: string
    name: string
  }[]
  @Expose()
  total!: number
}

export class InGameNoticeDto extends BaseDto {
  @Expose()
  noticeList!: {
    num: number
    comment: string
    send_cnt: number
    startdate: string
    enddate: string
    regdate: string
    used: string
  }[]
  @Expose()
  noticeTotal!: number
}
