function getStringBeetwenTags(string, tag){
  const expression = `<${tag}>(.*?)<\/${tag}>`

  const regex =  new RegExp(expression,'g');

  const stringBetweenTags = string.match(regex)

  const result = stringBetweenTags.map((item) => {
    return item.replace(/<\/?component>/g, '')
  })
  
  let outputArrayStrings = ""
  
  result.map(item => outputArrayStrings += `${item}\n`)

  return outputArrayStrings
}

export { getStringBeetwenTags }