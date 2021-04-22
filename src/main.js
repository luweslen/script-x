import { readFile } from "./readFile"
import { createFile } from "./createFile"

import { getStringBeetwenTags } from "./getStringBeetwenTags"

function main(){
  const [ , , inFileName, inFileFormat, outFileName, outFileFormat] = process.argv

  if(!inFileName && !inFileFormat && !outFileName && !outFileFormat){
    console.log("Some data not found")
    return
  }

  const string = readFile(inFileName, inFileFormat)
  
  const bodyFile = getStringBeetwenTags(string, "component")
  
  createFile(outFileName, outFileFormat, bodyFile)
}

main()