export const parseStringToSpaceUppercase = (str: string): string => {
  let string = ''
  const uppercase = str?.match(/([A-Z]?[^A-Z]*)/g)?.slice(0,-1)
  uppercase?.forEach((i, index) => index !== 0 ? string += ` ${i}` : string += parseFirstLetterToUppercase(i) )


  return string
}

const parseFirstLetterToUppercase = (str:string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}