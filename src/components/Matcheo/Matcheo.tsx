import { Box, Typography } from '@mui/material'
import { useAppSelector } from '../../hook/useRedux'
import { theme } from '../../styles/theme'
import { MatcheoTab } from '../Tabs/MatcheoTab'
import { Spinner } from '../UI/Spinner'

export const Matcheo = () => {
  const { error, loading } = useAppSelector((state) => state.match)

  return (
    <Box> 
      {loading 
        && 
        <Box sx={{ alignItems:'center', justifyContent: 'center', display: 'flex', height: 400}}>
          <Spinner />
        </Box>
      }
      {!loading 
        && <Box
          sx={{
            height: 'auto',
          }}
            >
            {!error
              ?
                <MatcheoTab />
              :
                <Typography color={theme.colors.error}>{error}</Typography>
            }
          </Box>
        }
    </Box>
  )
}
