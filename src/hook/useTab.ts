import { useMemo, useState, useEffect } from 'react';
import { IMatcheoData, IMatcheoDto } from '../interface/match'

export const useTab = (matcheo: IMatcheoDto | null) => {
  const [active, setActive] = useState('')

  const buscarValores = () : string[] => {
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
      else response += ` ${string === 'Origen1' ? matcheo?.origen1.descr : string === 'Origen2' ? matcheo?.origen2.descr : string}`
    }
  
    return response
  }

  
  const valores = useMemo(() => buscarValores(), [matcheo, active])

  useEffect(() => {
    if(matcheo){
      const found = Object.keys(matcheo.data).find((i) => matcheo.data[i as keyof IMatcheoData].length > 0)
      if(found) setActive(found)
    }
  },[matcheo])

  return { active, valores, setActive, calcularLabel }
}