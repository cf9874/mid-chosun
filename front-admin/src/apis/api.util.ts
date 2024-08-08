/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { COOKIE_KEY } from "const/cookie.const"
import { GetServerSidePropsContext, PreviewData } from "next"
import { destroyCookie } from "nookies"
import { ParsedUrlQuery } from "querystring"

export const apiUtil = {
  isErrorResponse(obj: any): obj is { message: string | undefined } {
    return "message" in obj && obj.message !== "success"
  },

  removeUserData: (ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData> | null = null) => {
    destroyCookie(ctx, COOKIE_KEY.ACCESSTOKEN)
    destroyCookie(ctx, COOKIE_KEY.REFRESHETOKEN)
    destroyCookie(ctx, COOKIE_KEY.EXPIRETIME)
  },
}
