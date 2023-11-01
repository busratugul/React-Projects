import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Stack, Typography } from '@mui/material';

export const Header = () => {
  return (
    <Stack className='text-center' bgcolor='#e91e63' color="#fce4ec"
    sx={{
      display:"flex",
      justifyContent: "space-between"
    }}>
      <Typography p={2} variant={"subtitle2"} component={"span"} sx={{fontWeight:"bold"}}>
        <AssignmentIcon sx={{fontSize:"2rem"}}/>
        ToDo App 
      </Typography>
    </Stack>
  )
}
