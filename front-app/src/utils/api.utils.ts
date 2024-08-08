// import { AxiosError } from "axios"
import { GetServerSidePropsContext, PreviewData } from "next"
import { destroyCookie } from "nookies"
import { ParsedUrlQuery } from "querystring"

export const apiUtils = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isErrorResponse(obj: any): obj is { message: string | undefined } {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return "message" in obj && obj.message !== "success"
  },

  removeUserData: (ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData> | null = null) => {
    destroyCookie(ctx, process.env.NEXT_PUBLIC_ACCESS_TOKEN ?? "")
  },

  // onError(error: unknown) {
  //   const { response } = error as { response: AxiosError<{ message: string }> }

  //   console.error(`status ${response?.status}\nmessage ${response?.data?.message}`)
  //   if (typeof response?.data.message === "object") {
  //     console.error(response?.data?.message)
  //   }
  //   return { message: response?.data?.message }
  // },
}
