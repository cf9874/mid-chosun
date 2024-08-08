import { BasicDropDown } from "component/util"
import { useState } from "react"

const Test = () => {
  const [testId, setTestId] = useState(1)
  const [, setTestId2] = useState(1)

  console.log(testId)

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <BasicDropDown
          id={"test1"}
          defaultValue={testId}
          menuList={Array(15)
            .fill(0)
            .map((_, i) => ({ id: i + 1, content: `${i + 1}번째` }))}
          setSelectedId={setTestId}
        />
        <br />
        <br />
        <BasicDropDown
          id={"test2"}
          defaultValue={1}
          menuList={Array(15)
            .fill(0)
            .map((_, i) => ({ id: i + 1, content: `${i + 1}번째` }))}
          setSelectedId={setTestId2}
        />
      </div>

      {/* none custom */}
      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <select name="data" id="lang">
          {Array(15)
            .fill(0)
            .map((_, i) => (
              <option key={i} value={`${_}`}>
                {i + 1}번째{" "}
              </option>
            ))}
        </select>
        <select name="languages" id="lang">
          {Array(15)
            .fill(0)
            .map((_, i) => (
              <option key={i} value={`${_}`}>
                {i + 1}번째{" "}
              </option>
            ))}
        </select>
      </div> */}
    </div>
  )
}

export default Test
