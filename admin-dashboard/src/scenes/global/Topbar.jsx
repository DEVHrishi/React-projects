import { Box, IconButton, Paper, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import InputBase from '@mui/material/InputBase';
import Tooltip from '@mui/material/Tooltip';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'


const Topbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext)

  return (
    <div>
      <Box display='flex' justifyContent='space-between' p={2}>
        {/* Search Bar */}
        <Box
          backgroundColor={colors.primary[400]}
          sx={{ p: '2px 4px' , display: 'flex', alignItems: 'center', width: 200 }}
        >
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Topbar Icons */}
        <Box display='flex'>
          <Tooltip title="SetMode">
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === 'dark' ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
          </Tooltip>

          <Tooltip title="Notification">
            <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Settings">
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Profile">
            <IconButton>
              <PersonOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

    </div>
  )
}

export default Topbar