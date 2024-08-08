import { BasicMenu } from "component/util"
import { useState } from "react"

const Test = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <div style={{ marginTop: "10px", padding: "10px" }}>
      <BasicMenu
        menuList={Array(15)
          .fill(0)
          .map((_, i) => ({ id: i + 1, name: `${i + 1}번째` }))}
        selectedValue={selectedId}
        setSelectedId={setSelectedId}
      />
    </div>
  )
}

export default Test
