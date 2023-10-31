import React from "react"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { Course } from "./Course";
import Angular from '../images/Angular.jpg'
import Bootstrap from '../images/bootstrap5.png'
import Csharp from '../images/ccsharp.png'
import Web from '../images/kompleweb.jpg'

function App() {

  return (
    <div className="App">
      <AppBar>
        <Toolbar sx={{
          fontSize: 20
        }}>
          Courses With MUI
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
  <Grid container spacing={2}  sx={{marginTop: 10}}>
  <Grid xs={12} md={6} lg={3}>
  <Course
    image={Angular}
    title= "Angular"
    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, ullam?" />
  </Grid>
  <Grid xs={12} md={6} lg={3}>
  <Course
    image={Bootstrap}
    title= "Bootstrap"
    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, ullam?" />
  </Grid>
  <Grid xs={12} md={6} lg={3}>
  <Course
    image={Csharp}
    title= "C#"
    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, ullam?" />
  </Grid>
  <Grid xs={12} md={6} lg={3}>
  <Course
    image={Web}
    title= "Komple WEB"
    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, ullam?" />
  </Grid>
</Grid>
</Container>
  
    </div>
  )
}

export default App
