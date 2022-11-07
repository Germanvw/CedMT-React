import { Box, Tab, Tabs } from '@mui/material'
import { useAppSelector } from '../../hook/useRedux'
import { PanelTab } from './PanelTab'
import { useTab } from '../../hook/useTab'
import { IMatcheoData } from '../../interface/match'

export const MatcheoTab = () => {
  const { matcheo } = useAppSelector((state) => state.match)

  const { active, valores, setActive, calcularLabel } = useTab(matcheo)

  if(!matcheo) return null
  console.log(Object.keys(matcheo.data))
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
          Object.keys(matcheo.data).map((i) =>  <Tab key={i} value={i} label={calcularLabel(i)} disabled={matcheo.data[i as keyof IMatcheoData].length === 0} />)
        }
    </Tabs>
    {active && <PanelTab value={valores} separator={matcheo.delimitador}/> }
  </Box>  
  )
}
