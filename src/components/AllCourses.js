import React, { useState, useEffect } from "react";
import Course from "./Course";
import axios from "axios";
import base_url from "../course_api";

const AllCourses = () => {
    useEffect(() => {
        document.title = "All Courses";
    }, []);

    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                const filteredCourses = response.data.filter(course => course.title !== null && course.description !== null);  // Filtering course to avoid a null value from the DB on the UI.
                setCourses(filteredCourses);
            },
            (error) => {
                console.log(error);
                alert("Failed to load courses from the server.");
            }
        );
    };

    useEffect(() => {
        getAllCoursesFromServer();
    }, []);

    const [courses, setCourses] = useState([]);

    const updateCourse = (updatedCourse) => {
        axios.put(`${base_url}/courses`, updatedCourse).then(
            (response) => {
                alert("Course updated successfully!");
                setCourses(courses.map(course => course.id === updatedCourse.id ? updatedCourse : course));
            },
            (error) => {
                console.log(error);
                alert("Failed to update course.");
            }
        );
    };

    const updateCourses = (id) => {
        setCourses(courses.filter((c) => c.id !== id));
    }

    return (
        <div>
            <h1>All Courses</h1>
            <p>Courses That Can Boost Up Your Career</p>

            {courses.length > 0
                ? courses.map((item) => (
                    <Course key={item.id} course={item} updateCourse={updateCourse} update={updateCourses} />
                ))
                : "No course available at this moment."
            }
        </div>
    )
}

export default AllCourses;