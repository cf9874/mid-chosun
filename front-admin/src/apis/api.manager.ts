import { AxiosController } from "./api.controller"

import { createStaticClass } from "utils"
import { GetServerSidePropsContext, PreviewData } from "next"
import { ParsedUrlQuery } from "querystring"
import { UserApi } from "./concept/user.api"
import { MemberApi } from "./concept/member.api"
import { GameApi } from "./concept/game.api"
import { GameTestApi } from "./concept/gameTest.api"
import { NewsApi } from "./concept/news.api"
import { CsApi } from "./concept/cs.api"
import { CommunityApi } from "./concept/community.api"

class ApiManager extends createStaticClass<ApiManager>() {
  private controller = new AxiosController()

  private context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData> | null = null

  private userApiInstance: UserApi | null = null
  private memberApiInstance: MemberApi | null = null
  private gameApiInstance: GameApi | null = null
  private gameTestApiInstance: GameTestApi | null = null
  private newsApiInstance: NewsApi | null = null
  private csApiInstance: CsApi | null = null
  private communityApiInstance: CommunityApi | null = null

  updateContext(ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData> | null = null) {
    this.context = ctx

    this.controller.updateAxios(ctx)

    this.resetApiInstances()

    return this
  }

  private resetApiInstances() {
    this.userApiInstance = null
    this.memberApiInstance = null
    this.gameApiInstance = null
    this.gameTestApiInstance = null
    this.newsApiInstance = null
    this.csApiInstance = null
    this.communityApiInstance = null
  }

  getContext() {
    return this.context
  }

  resetContext() {
    this.context = null

    return this.controller
  }

  getController() {
    return this.controller
  }

  get userApi() {
    if (!this.userApiInstance) {
      this.userApiInstance = new UserApi(this.controller)
    }
    return this.userApiInstance
  }
  get memberApi() {
    if (!this.memberApiInstance) {
      this.memberApiInstance = new MemberApi(this.controller)
    }
    return this.memberApiInstance
  }
  get gameApi() {
    if (!this.gameApiInstance) {
      this.gameApiInstance = new GameApi(this.controller)
    }
    return this.gameApiInstance
  }
  get gameTestApi() {
    if (!this.gameTestApiInstance) {
      this.gameTestApiInstance = new GameTestApi(this.controller)
    }
    return this.gameTestApiInstance
  }
  get newsApi() {
    if (!this.newsApiInstance) {
      this.newsApiInstance = new NewsApi(this.controller)
    }
    return this.newsApiInstance
  }
  get csApi() {
    if (!this.csApiInstance) {
      this.csApiInstance = new CsApi(this.controller)
    }
    return this.csApiInstance
  }
  get communityApi() {
    if (!this.communityApiInstance) {
      this.communityApiInstance = new CommunityApi(this.controller)
    }
    return this.communityApiInstance
  }
}

export const apiManager = ApiManager.instance
