import { useAppSelector } from "hooks"
// import Image from "next/image"
import React from "react"
import { shallowEqual } from "react-redux"

export const BasicLoading = () => {
  const { isLoading } = useAppSelector(state => state.configReducer, shallowEqual)

  return (
    <div className={`loading ${isLoading && `open`}`}>
      <div onClick={e => e.stopPropagation()}>
        {/* <Image src={imgAsset.loadingImage} width={150} height={150} alt="loading" /> */}
      </div>
    </div>
  )
}
