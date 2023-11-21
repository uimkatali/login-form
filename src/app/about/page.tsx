'use client'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { getAllUsers } from '../api/users'
import { UserData } from '../types/user'

const About = () => {
  const [usersList, setUsersList] = useState<UserData[]>([])

  useEffect(() => {
    getAllUsers().then(response => {
      setUsersList(
        response.sort((a, b) => {
          return a.role.localeCompare(b.role)
        })
      )
    })
  }, [])

  return (
    <Grid container spacing={2} padding={2}>
      {usersList ? (
        usersList.map(user => (
          <Grid item key={user._id} xs={3}>
            <Card
              sx={{
                color: '#F8F1E5',
                background: '#E4D183',
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {user.name}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="128"
                // image="../images/candle.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Descrierea produsului: {user.age}. asdasdasdasdasdasdasas
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={{ color: '#9F609C' }} size="small" variant="text">
                  Buy Now
                </Button>
                <Button sx={{ color: '#9F609C' }} size="small" variant="text">
                  Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography sx={{ color: '#F8F1E5' }}> Loading... </Typography>
      )}
    </Grid>
  )
}

export default About
