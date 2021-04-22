import { readFileSync } from "fs"

const BASE_PATH = "./src/inputFiles"

function readFile(inputFile){
  const fileData = 
    readFileSync(`${BASE_PATH}/${inputFile}`)
  
  const fileString = fileData.toString()

  return fileString
}

export { readFile }