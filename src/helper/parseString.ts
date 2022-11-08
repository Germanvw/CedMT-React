export const parseStringToSpaceUppercase = (str: string): string => {
  let string = ''
  const uppercase = str?.match(/([A-Z]?[^A-Z]*)/g)?.slice(0,-1)
  uppercase?.forEach((i, index) => index !== 0 ? string += ` ${i}` : string += i)

  return string
}