import Head from 'next/head'
import Image from 'next/image'

import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import NavBar from '../components/NavBar'
import Title from '../components/Title'
import FavouriteBooks from '../components/FavouriteBooks'

const FAVOURITE_BOOKS = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    rating: 9
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 8
  }
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Library App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar title={"Our Library"} />
      <main>
        <Container sx={{paddingTop: '2rem'}} maxWidth="md">
           <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', marginBottom: "2rem"}}>
              <Title>Add a New Favourite</Title>
              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="title"
                      name="title"
                      label="Book Title"
                      fullWidth
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={10} sm={4}>
                    <TextField
                      required
                      id="author"
                      name="author"
                      label="Author"
                      fullWidth
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={2} sm={2}>
                    <Button variant="contained" sx={{ mt: 1.5, ml: 1 }}>Add</Button>
                  </Grid>
                </Grid>
              </form>
           </Paper>
          <FavouriteBooks books={FAVOURITE_BOOKS} />
        </Container>
      </main>
    </div>
  )
}