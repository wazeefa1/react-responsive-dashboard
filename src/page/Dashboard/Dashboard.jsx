import React from 'react'
import {Container, Stack, Grid, Typography} from '@mui/material'

//components 
import DataTable from '../../components/DataTabel/DataTable'
import DashboardBox from '../../components/DashboardBox/DashboardBox'

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

      
        
     <Grid item md ={12}>
      <DashboardBox/>
     </Grid>

    <Grid item md={12}>
      <Typography variant="h5">
        July 4, 2023
      </Typography>
    </Grid>
    <Grid item md={12}>
      <DataTable rows={bookings} columns={bookingsTableHead}  />
    </Grid>
      

    </Grid>
  )
}

export default Dashboard