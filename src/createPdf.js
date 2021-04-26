import path from "path"
import { createWriteStream } from "fs"

import { fonts } from "./assets/fonts"

import PDFDocument from "pdfmake"
var printer = new PDFDocument(fonts)

const BASE_PATH = "./src/outputPdfs"

function createPdf(bodyPdf, outputFile){
  const docDefinition = {
    content: [
      {
        stack: [
          {
            image: path.join(__dirname, "assets", "images", "logo.png"),
			      height: 30,
            width: 64
          }
        ],
        style: "header"
      },
      {
        text: "Relatório de implemantação do sistema",
        fontSize: 18,
        bold: true,
        margin: [0, 20, 0, 0],
        alignment: "center"
      },
      {  
        text: bodyPdf,
        margin: [0, 20, 0, 0],
        alignment: "justify"
      }
    ],
    style: {
      header: {
        fontSize: 12,
        bold: true,
        alignment: "left",
        margin: [0, 190, 0, 80]
      },
    }
  }
  
  const newPdf = printer.createPdfKitDocument(docDefinition)

  newPdf.pipe(createWriteStream(`${BASE_PATH}/${outputFile}`))
  newPdf.end()
}

export { createPdf }