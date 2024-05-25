import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Form, FormGroup, Label, Input, Container, Button } from 'reactstrap';
import base_url from '../course_api';

const AddCourse = () => {
    useEffect(() => {
        document.title = "Add Course";
    }, []);

    const [course, setCourse] = useState({});
    const navigate = useNavigate(); 

    const handleForm = (e) => {
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    };

    const postDatatoServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                setCourse({ id: "", title: "", description: "" });

                // Redirecting to Home page after successful course addition by the user.
                navigate('/');
            },
            (error) => {
                console.log(error);
                console.log("error");
            }
        );
    };

    return (
        <Fragment>
            <h1 className="text-center my-3">Furnish your course details here.</h1>
            <Form onSubmit={handleForm}>

                <FormGroup>
                    <Label for="userId">Course ID</Label>
                    <Input
                        type="text"
                        placeholder="Enter the course id"
                        name="userId"
                        id="userId"
                        onChange={(e) => {
                            setCourse({ ...course, id: e.target.value })
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input
                        type="text"
                        placeholder="Enter your title here."
                        id="title"
                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value })
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="description"> Course Description</Label>
                    <Input
                        type="textarea"
                        placeholder="Enter your description here."
                        id="description"
                        style={{ height: 200 }}
                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value })
                        }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button
                        type="reset"
                        onClick={() => {
                            setCourse({ id: "", title: "", description: "" });
                        }}
                        color="warning ml-2">Clear</Button>
                </Container>

            </Form>
        </Fragment>
    );
};

export default AddCourse;