import { useMemo, useState } from 'react'
import { IMatcheoData, IMatcheoDto } from '../interface/match'

export const useTab = (matcheo: IMatcheoDto | null) => {
  const [active, setActive] = useState('totales')

  const buscarValores = () : string[] => {
    console.log(active)
    if(matcheo){

      const valores = matcheo.data[active as keyof IMatcheoData]

      return valores ? valores : ['']
    }
    return ['']
  }
  
  const calcularLabel = (label: string) => {
    const str = label.split(/(?=[A-Z])/)
    let response = ''

    for(const char in str){
      const index = parseInt(char)
      const string = str[index]
  
      if(index === 0) response += string;
      else response += ` ${string === 'Origen1' ? matcheo?.descrOrigen1 : string === 'Origen2' ? matcheo?.descrOrigen2 : string}`
    }
  
    return response
  }

  
  const valores = useMemo(() => buscarValores(), [matcheo, active])

  return { active, valores, setActive, calcularLabel }
}