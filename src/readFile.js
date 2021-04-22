import { readFileSync } from "fs"

const BASE_PATH = "./src/inputFiles"

function readFile(nameFile, formatFile){
  const fileData = 
    readFileSync(`${BASE_PATH}/${nameFile}.${formatFile}`)
  
  const fileString = fileData.toString()

  return fileString
}

export { readFile }