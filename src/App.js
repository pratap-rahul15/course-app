import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Headers from './components/Headers';
import Menus from './components/Menus';
import AboutMe from './components/AboutMe'; 
import ReachMe from './components/ReachMe';


function App() {
  return (
    <Router>
      <ToastContainer />
      <Container>
        <Headers />
        <Row>
          <Col md={4}>
            <Menus />
          </Col>
          <Col md={8}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/view-courses" element={<AllCourses />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/reach-me" element={<ReachMe />} />
            </Routes>
          </Col>
        </Row>
   
      </Container>
    </Router>
  );
}

export default App;