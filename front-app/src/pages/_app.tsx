import "globals.css"
import "swiper/swiper-bundle.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/effect-fade"
import "swiper/css/autoplay"

import type { AppProps } from "next/app"
import { persistor, default as store } from "store/redux"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { BasicLoading, ModalWrapper } from "component/common"

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
        <ModalWrapper />
        <BasicLoading />
      </PersistGate>
    </Provider>
  )
}
