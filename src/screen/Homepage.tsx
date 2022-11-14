import { Container, Grid } from '@mui/material';
import { Matcheo } from '../components/Matcheo/Matcheo'
import { GrillaParametro } from '../components/Parametros/GrillaParametro'
import { EntidadSelector } from '../components/Select/EntidadSelector'
import { SectorSelector } from '../components/Select/SectorSelector'

export const Homepage = () => {
  return (
    <Container maxWidth='xl'>
      <Grid container justifyContent='center' display='flex' alignItems='center'>
        <Grid item md={12} lg={4} justifyContent='center' display='flex' alignItems='center'>
          <Grid container justifyContent='center' display='flex' alignItems='center'>
            <Grid item md={6}>
              <SectorSelector />
            </Grid>
            <Grid item md={6}>
              <EntidadSelector />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12} lg={8} >
          <GrillaParametro />
        </Grid>
      </Grid>
      <Matcheo />
    </Container>
  )
}
