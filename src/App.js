import {Container, Grid} from '@mui/material'

import Portfolio from "./pages/Portfolio/Portfolio.js"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Resume from "./pages/Resume/Resume.js"
import Profile from "./components/Profile/Profile"

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} lg={4}>
          <Profile/>
        </Grid>
        <Grid item xs={12} sm={12} lg={8} >
          <Router>
          <Header/>
            <Routes>
              <Route exact path='/portfolio' element={<Portfolio/>}/>
              <Route exact path="/" element={<Resume/>}/>
            </Routes>
          </Router>
          <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
