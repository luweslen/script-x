import { writeFileSync } from "fs"

const BASE_PATH = "./src/outputFiles"

function createFile(outputFile, bodyFile){
  writeFileSync(`${BASE_PATH}/${outputFile}`, bodyFile)
}

export { createFile }