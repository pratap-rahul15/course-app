import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
    color: #333;
`;

const List = styled.ul`
    list-style-type: none;
`;

const ListItem = styled.li`
    margin-bottom: 5px;
`;

const AboutMe = () => {
    return (
        <Container>
            <Heading>About me</Heading>
            <p>
                This project is developed by <b>Rahul Pratap Singh.</b>
            </p>
            <p>
             Project has been developed using the following tech stack:
            </p>
            <List>
                <ListItem>React JS for the front-end.</ListItem>
                <ListItem>Spring Boot framework for the back-end.</ListItem>
                <ListItem>MySQL for the DB persistence.</ListItem>
            </List>

            <Heading>This web app is capable of</Heading>
                
                <List>

                    <ListItem>Adding a course. </ListItem>
                    <ListItem>Updating a Course.</ListItem>
                    <ListItem>Deleting a Course.</ListItem>

                </List>
                    
                
                
            
        </Container>
    );
};

const AddCourse = () => {
    useEffect(() => {
        document.title = "About Me";
    }, []);

    return <AboutMe />;
};

export default AddCourse;
