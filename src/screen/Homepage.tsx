import { Container, Grid } from '@mui/material';
import { Matcheo } from '../components/Matcheo/Matcheo'
import { EntidadSelector } from '../components/Select/EntidadSelector'
import { SectorSelector } from '../components/Select/SectorSelector'

export const Homepage = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <SectorSelector />
        </Grid>
        <Grid item xs={6}>
          <EntidadSelector />
        </Grid>
      </Grid>
      <Matcheo />
    </Container>
  )
}
