import React, { Component, useState } from 'react';
import {Redirect,useHistory } from "react-router-dom";
import {
    Row,
    Col,
    Input,
    Card,
    Button,
}from "reactstrap";

import "./login.styles.scss"; 




const Login = () => {
    const [payload, setPayload] = useState({});
    const history = useHistory();

    const handleSetpayload = (e)=>{
        const{name, value} = e.target;
        setPayload(prev=>{
            return{
                ...prev,
                [name]:value
            }
        });   
    }

    const handleLogin = (e)=>{
        e.preventDefault();
        console.log(payload);
        let isPayload = true;
        if(payload.length === 2){
            Object.keys(payload).forEach(key => {
                if(payload[key] === ""){
                    isPayload = false
                }
            });
        }else{
            alert("User Name & Password Tidak Boleh Kosong");
            isPayload = false

        }
        if(isPayload === true){
            history.push("/register");
        }

    }
    const handleToregister = (e)=>{
        history.push("/register");
    }



    return (<div className="login-page">
        <form method="post">
        <Row>
            <Col xs="12">
                <Card>
                    <Row className="row-form">
                        <Col xs="4">
                            <Card className="card-form">
                                <Row className="form-header"> 
                                    <Col>
                                        Login 
                                    </Col>
                                </Row>
                                <Row className="body-header">
                                    <Col>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="form-control-input form-control"
                                            onChange={(e)=>handleSetpayload(e)}
                                        />
                                    </Col>
                                    <Col>
                                        <Input
                                            type="text"
                                            name="password"
                                            id="password"
                                            className="form-control-input form-control"
                                            onChange={(e)=>handleSetpayload(e)}

                                        />
                                    </Col>

                                    <Col>
                                        <Button
                                            type="button"
                                            name="password"
                                            id="password"
                                            className="form-control-input form-control"
                                            onClick={e=>handleLogin(e)}
                                        >Login</Button>
                                    </Col>
                                    <Col 
                                        className="text-to-register"
                                        onClick={(e)=>handleToregister(e)}>
                                        Register
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
        </form>
    
    </div>);
}
 
export default Login;