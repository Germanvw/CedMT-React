import { Box, Tab, Tabs, Typography } from '@mui/material'
import { useAppSelector } from '../../hook/useRedux'
import { PanelTab } from './PanelTab'
import { useTab } from '../../hook/useTab'
import { IMatcheoData } from '../../interface/match'

export const MatcheoTab = () => {
  const { matcheo } = useAppSelector((state) => state.match)

  const { active, valores, setActive, calcularLabel } = useTab(matcheo)

  if(!matcheo) return null

  const { data } = matcheo

  return (
    <Box>
      <Tabs
      sx={{my: 5}}
      value={active}
      onChange={(_,value) => setActive(value)}
      textColor="primary"
      indicatorColor="primary"
      aria-label="primary tabs example"
      >
        {
          Object.keys(data).map((i) => (
            data[i as keyof IMatcheoData].length > 2 
            ?
              <Tab key={i} value={i} label={calcularLabel(i)} disabled={data[i as keyof IMatcheoData].length < 2} />
            :
              null
          ))
        }
    </Tabs>
    {valores.length === 0 ? 
      <Typography color='red'>No se han encontrado resultados</Typography>
      : active && <PanelTab value={valores} separator={matcheo.delimitador}/> 
    }
  </Box>  
  )
}
