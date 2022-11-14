import { Box, Tab, Tabs, Typography, Divider, Chip } from '@mui/material';
import { useAppSelector } from '../../hook/useRedux'
import { PanelTab } from './PanelTab'
import { useTab } from '../../hook/useTab'
import { IMatcheoData } from '../../interface/match'
import { theme } from '../../styles/theme'

export const MatcheoTab = () => {
  const { matcheo } = useAppSelector((state) => state.match)

  const { active, valores, setActive, calcularLabel } = useTab(matcheo)

  if(!matcheo) return null

  const { data } = matcheo

  return (
    <Box>
      <Divider light={true} sx={{ py: 2 }} textAlign="center"><Chip sx={{ fontWeight: 'bold', backgroundColor: theme.colors.lighth, color: theme.colors.primary }} label="Resultados" /></Divider>
      <Tabs
        value={active}
        sx={{pb: 2}}
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
    {valores.length === 0 
      ? <Typography color={theme.colors.error}>No se han encontrado resultados</Typography>
      : active && <PanelTab value={valores} separator={matcheo.delimitador}/> 
    }
  </Box>  
  )
}
