import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Jumbotron, Container, Button } from 'reactstrap';

const Home = () => {
  useEffect(() => {
    document.title = "Home || Developed By RPS";
  }, []);

  const navigate = useNavigate(); 

  const handleStartUsingApp = () => {
    navigate('/add-course'); 
  };

  return (
    <div className="jumbotron" style={{ backgroundColor: '#C70039', textAlign: 'center' }}>
      <h1>Courses Web Application</h1>
      <p>This Project is developed by RPS which is using React JS for the front-end & Spring Boot for the backend. </p>
      <Container>
        <Button color='primary' outline onClick={handleStartUsingApp}>Start using this App</Button>
      </Container>
    </div>
  );
};

export default Home;
