import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Container,
    Input,
    FormGroup,
    Form,
} from "reactstrap";
import axios from "axios";
import base_url from "../course_api";

const Course = ({ course, updateCourse, update }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedCourse, setUpdatedCourse] = useState(course);

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                alert("Course deleted successfully!");
                update(id);
            },
            (error) => {
                alert("Server problem, course was not able to delete successfully!");
            }
        );
    };

    const handleUpdateClick = () => {
        updateCourse(updatedCourse);
        setIsEditing(false);
    };

    return (
        <Card>
            <CardBody>
                {isEditing ? (
                    <Form>
                        <FormGroup>
                            <Input
                                type="text"
                                value={updatedCourse.title}
                                onChange={(e) => setUpdatedCourse({ ...updatedCourse, title: e.target.value })}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="textarea"
                                value={updatedCourse.description}
                                onChange={(e) => setUpdatedCourse({ ...updatedCourse, description: e.target.value })}
                            />
                        </FormGroup>
                        <Container className="text-center">
                            <Button color="success" onClick={handleUpdateClick}>Save</Button>
                            <Button color="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
                        </Container>
                    </Form>
                ) : (
                    <>
                        <CardTitle className="font-weight-bold">{course.title}</CardTitle>
                        <CardText>{course.description}</CardText>
                        <Container className="text-center">
                            <Button color="warning" className="mr-3" onClick={() => setIsEditing(true)}>Update</Button>
                            <Button color="danger" onClick={() => deleteCourse(course.id)}>Delete</Button>
                        </Container>
                    </>
                )}
            </CardBody>
        </Card>
    );
}

export default Course;
