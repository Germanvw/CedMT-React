export const parseArrayByDelimitador = (array: string[], delimitador: string) => {
  return array.map((i) => i?.split(delimitador))
}

export const parseToTable =(
 data: string[],
 delimitador: string
) =>  {
  const header = data[1]
  const tiposVariable = data[0]
  const rows = data.length > 0 ? data?.slice(2) : []

  return { 
    header: parseArrayByDelimitador([header], delimitador)[0],
    rows: parseArrayByDelimitador(rows, delimitador),
    tiposVariable: parseArrayByDelimitador([tiposVariable], delimitador)[0]
   };
}