import { Box } from '@mui/material'
import { IParamMatcheo, IParamOrigenes } from '../../interface/param'
import { ParametroOrigenTable } from '../Table/ParametroOrigenTable'

interface Props {
  params: IParamMatcheo
  origenes: IParamOrigenes
  loading: boolean
  handleChange: ({ target }: { target: HTMLInputElement }) => void
}

export const GrillaParametroOrigen = ({ params, origenes, loading, handleChange }: Props) => {
  return (
    <Box sx={{ px: 3, py: 1 }}>
      <ParametroOrigenTable params={params} origenes={origenes} disabled={loading} handleChange={handleChange} />
    </Box>
  )
}
