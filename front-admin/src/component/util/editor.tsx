/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ContentBlock, ContentState, EditorState, convertToRaw } from "draft-js"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { EditorProps } from "react-draft-wysiwyg"
import draftToHtml from "draftjs-to-html"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { uploadFile } from "utils/file.util"

const Editor = dynamic<EditorProps>(() => import("react-draft-wysiwyg").then(mod => mod.Editor), {
  ssr: false,
})

const CustomEditor = (props: { onChange: (html: string) => void; content?: string; toggle: boolean }) => {
  let htmlToDraft = null
  if (typeof window === "object") {
    htmlToDraft = require("html-to-draftjs").default
  }
  console.log(htmlToDraft)
  const blocksFromHtml = htmlToDraft("<p>" + props.content + "</p>" ?? `<p></p>`)
  const { contentBlocks, entityMap } = blocksFromHtml
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap)

  // const initailState = props.content ? EditorState.createWithContent(contentState) : EditorState.createEmpty()

  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  useEffect(() => {
    setEditorState(props.content ? EditorState.createWithContent(contentState) : EditorState.createEmpty())
  }, [props.content, props.toggle])
  const editorToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()))
  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState)
  }

  const uploadCallback = (file: File) => {
    return new Promise(resolve => {
      const reader = new FileReader()

      reader.onloadend = () => {
        const formData = new FormData()
        formData.append("multipartFiles", file)
        try {
          uploadFile(file, file?.name)
        } catch (e) {
          alert("파일 전송에 실패했습니다.")
          return
        }
        setTimeout(() => {
          resolve({
            data: {
              link:
                (process.env.NEXT_PUBLIC_S3 as string) +
                process.env.NEXT_PUBLIC_AWS_S3_DEFAULT_FOLDER +
                "/" +
                file.name,
            },
          })
        }, 500)
      }

      reader.readAsDataURL(file)
    })
  }
  const toolbar = {
    options: [
      "inline",
      "blockType",
      "fontSize",
      "fontFamily",
      "list",
      "textAlign",
      "colorPicker",
      "link",
      "image",
      "emoji",
    ],
    inline: {
      options: ["bold", "italic", "underline", "strikethrough"],
    },
    fontSize: {
      options: [12, 14, 16, 18, 24, 30, 36, 48],
    },
    list: { inDropdown: true }, // list 드롭다운
    textAlign: { inDropdown: true }, // align 드롭다운
    link: { inDropdown: true }, // link 드롭다운
    history: { inDropdown: false }, // history 드롭다운
    image: {
      uploadCallback: uploadCallback,
      previewImage: true,
    }, // 이미지 커스텀 업로드
    remove: false,
  }

  function imageBlockRenderer(contentBlock: ContentBlock) {
    const type = contentBlock.getType()
    // Convert image type to mediaComponent
    if (type === "atomic") {
      return {
        component: MediaComponent,
        editable: true,
      }
    }
  }
  function MediaComponent({ block, contentState }: { block: ContentBlock; contentState: ContentState }) {
    console.log(115, contentState)
    console.log(116, block)
    const data = contentState.getEntity(block.getEntityAt(0)).getData()
    const emptyHtml = " "
    return (
      <p>
        <img
          src={data.src}
          alt={data.alt || ""}
          style={{ height: data.height || "auto", width: data.width || "auto", maxWidth: 800 }}
        />
        {emptyHtml}
      </p>
    )
  }
  return (
    <Editor
      editorState={editorState}
      // 에디터와 툴바 모두에 적용되는 클래스
      wrapperClassName="wrapper-class"
      // 에디터 주변에 적용된 클래스
      editorClassName="editor"
      // 툴바 주위에 적용된 클래스
      toolbarClassName="toolbar-class"
      onEditorStateChange={onEditorStateChange}
      toolbar={toolbar}
      localization={{
        locale: "ko",
      }}
      onChange={e => {
        console.log(e)
        props.onChange(editorToHtml)
      }}
      customBlockRenderFunc={imageBlockRenderer}
    />
  )
}

export default CustomEditor
