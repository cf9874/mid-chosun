import { Expose } from "class-transformer"
import { BaseDto } from "./base.dto"

export class UserDto extends BaseDto {
  @Expose()
  loginCheck!: {
    num: number
    id: string
    level: string
    name: string
  }
  @Expose()
  token!: string
}

export class UserInfoDto extends BaseDto {
  @Expose()
  userStatus!: {
    id: string
    level: string
    num: number
    name: string
  }
}
