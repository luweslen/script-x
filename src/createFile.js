import { writeFileSync } from "fs"

const BASE_PATH = "./src/outputFiles"

function createFile(nameFile, formatFile, bodyFile){
  writeFileSync(`${BASE_PATH}/${nameFile}.${formatFile}`, bodyFile)
}

export { createFile }