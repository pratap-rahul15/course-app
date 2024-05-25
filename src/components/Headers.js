import React from "react"
import { Card, CardBody } from "reactstrap";

function Headers({ name }) 
{
    return (
        <div>
            <Card className="my-2" style={{ backgroundColor: "#C70039" }}>
                <CardBody>
                    <h1 className="text-center my-3">Welcome To My Courses Web Application.</h1>
                </CardBody>
            </Card>
        </div>
    );
    
}

export default Headers;

// In React JS a component in nothing but a simple JS function which return the HTML code.
