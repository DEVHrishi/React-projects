import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { Tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme()
  const colors = Tokens(theme.palette.mode)

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title="DASHBOARD" subtitle="Welcome to the admin dashboard" />
      </Box>

      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: '12px',
            fontWeight: 'bold',
            padding: '10px 20px',
          }}
        >
          <DownloadOutlinedIcon sx={{mr: '10px' }} />
          Download Report
        </Button>
      </Box>

      {/* GRID AND CHARTS */}
      
    </Box>
  )
}

export default Dashboard;