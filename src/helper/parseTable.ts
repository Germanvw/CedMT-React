export const parseArrayByDelimitador = (delimitador: string, array: string[]) => {
  return array.map((i) => i?.split(delimitador))
}

export const parseToTable =(
 data: string[],
 delimitador: string
) =>  {
  const header = data[0]
  const rows = data.length > 0 ? data?.slice(1) : []
  
  return { 
    header: parseArrayByDelimitador(delimitador,[header])[0],
    rows: parseArrayByDelimitador(delimitador,rows)
   };
}