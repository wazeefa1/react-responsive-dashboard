import React from 'react'
import {Stack, Grid, Typography} from '@mui/material'

//components 
import DataTable from '../../components/DataTabel/DataTable'
import DashboardBox from '../../components/DashboardBox/DashboardBox'
import Box from '../../components/BoxComponent/BoxComponent'
import PieChart from '../../components/Charts/PieChart'

// mock datas
import {bookings} from '../../mocks/dashboard'

const bookingsTableHead = [
  {
    field: 'id', headerName: 'ID',
  },
  {
    field:'product', headerName: 'Product',
  },
  {
    field:'customer', headerName: 'Customer'
  },
  {
    field:'status', headerName: 'Status'
  }
]

function Dashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
      <Typography variant="h5">
        July 4, 2023
      </Typography>
    </Grid>
     <Grid item xs={12} sm={12} md={12}>
      <DashboardBox/>
     </Grid>
    
    <Grid item xs={12} sm={12} md={6}>
      <DataTable rows={bookings} columns={bookingsTableHead}  />
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <Box height={400} childComponent={<PieChart/>} />
    </Grid>
    </Grid>
  )
}

export default Dashboard