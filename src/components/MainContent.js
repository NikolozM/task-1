import React from 'react'
import {
    Stack,
    Typography,
    TextField,
    Box,
    Grid
  } from "@mui/material";

const MainContent = () => {

    const content = ['თანამშრომელთა გვერდი','ჩემი გვერდი','მარკეტინგი','გარემოსდაცვითი მენეჯმენტი','ტრენინგები და განვითარება','თანამშრომელთა კონტაქტები']

  return (
    <Grid container spacing={2}>
        {content.map((item)=> {
            return(
                <Grid item xs={4}>
                <Box>{item}</Box>
              </Grid>
            )
        })}
</Grid>
  )
}

export default MainContent