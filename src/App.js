import {Container, Grid} from '@mui/material'

import Portfolio from "./pages/Portfolio/Portfolio"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Resume from "./pages/Resume/Resume"
import Profile from "./components/Profile/Profile"

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3} style={{}}>
          <Profile/>
        </Grid>
        <Grid item style={{backgroundColor: "blue"}}>
          <Header/>
          <Router>
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
