import './App.css';
import {Box} from "@mui/material";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Home from '../src/Pages/Home'
import ExerciseDetail from '../src/components/Detail';
function App() {
  return (
      <BrowserRouter>
    <Box width='400px'  sx={ { width: { xl: '1488px' } } } m='auto'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>

    </Box>
      </BrowserRouter>
  );
}

export default App;
