import {Box} from "@mui/material"
import {useDropzone} from "react-dropzone"

export const ProcessEstimateSheetPage = () => {
  const {getRootProps, getInputProps, isDragActive} = useDropzone()

  return <Box>
    <Box {...getRootProps()} sx={{
      border: "1px dashed darkgray",
      borderRadius: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 200,
      mx: 3
    }}>
      <Box>
        <input {...getInputProps()}/>
        {isDragActive ?
          "ここにファイルをドロップしてください" :
          <p>
            ここにファイルをドラッグ＆ドロップしてください。<br/>あるいはクリックしてファイルを選択してください。
          </p>
        }
      </Box>
    </Box>
  </Box>
}
