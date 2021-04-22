import { readFile } from "./readFile"
import { createFile } from "./createFile"
import { createPdf } from "./createPdf"

import { getStringBeetwenTags } from "./getStringBeetwenTags"

function main(){
  const [ , , inFileName, inFileFormat, outFileName, outFileFormat ] = process.argv

  const inputFile = `${inFileName}.${inFileFormat}`
  const outputFile = `${outFileName}.${outFileFormat}`

  if(!inFileName && !inFileFormat && !outFileName && !outFileFormat){
    console.log("Some data not found")
    return
  }

  const stringResult = readFile(inputFile)
  
  const bodyFile = getStringBeetwenTags(stringResult, "component")
  
  createFile(outputFile, bodyFile)

  const outputPdfFile = `${outFileName}.pdf`

  createPdf(bodyFile, outputPdfFile)
}

main()