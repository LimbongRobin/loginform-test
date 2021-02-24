import React, { Component, useState, useEffect } from 'react';
import {useHistory } from "react-router-dom";

import Select from "react-select";
import {
    Row,
    Col,
    Input,
    Card,
    Button,
    Label
}from "reactstrap";
import "./register.styles.scss"; 




const Register = () => {
    const [payload, setPayload] = useState({});
    const history = useHistory();
    const [kotaByProv, setkotaByProv] = useState([]);
    const [provinsi, setprovinsi] = useState(
        [
        {
            name:"provinsi",
            kd_kota: 1,
            label:"Jakarta",
            value:"jkt"
        },
        {
            name:"provinsi",
            kd_kota: 2,
            label:"Jambi",
            value:"jmb"
        },{
            name:"provinsi",
            kd_kota: 3,
            label:"Jawa Barat",
            value:"jb"
        },{
            name:"provinsi",
            kd_kota: 4,
            label:"Bali",
            value:"bl"
        },
    ]
    )
    const [jenisKelamin, setjenisKelamin] = useState(
        [
            {name:"jenis_kelamian", value:0, label:"Perempuan"},
            {name:"jenis_kelamian", value:1, label:"Laki-Laki"},
        ])

    const kota =[
        {
            name:"kota",
            kd_provinsi: 1,
            label:"Jakrta Pusat",
            value:"kjkt"
        },
        {
            name:"kota",
            kd_provinsi: 2,
            label:"Jambi",
            value:"kjmb"
        },{
            name:"kota",
            kd_provinsi: 3,
            label:"Bandung",
            value:"kbd"
        },{
            name:"kota",
            kd_provinsi: 4,
            label:"Ubud",
            value:"kbl"
        },
    ];
    const handleSetpayload = (e)=>{
        const{name, value} = e.target;
        setPayload(prev=>{
            return{
                ...prev,
                [name]:value
            }
        });   
    }
    const hadleProvinsiChange =(e)=>{
        const {name, value, kd_kota} = e;
        let dataKota = kota.filter(datas=> datas.kd_provinsi === kd_kota);
        setkotaByProv(dataKota);
        setPayload(prev=>{
            return{
                ...prev,
                [name]:value
            }
        });   
    }
    const hadleKotaChange =(e)=>{
        const {name, value, kd_kota} = e;
        setPayload(prev=>{
            return{
                ...prev,
                [name]:value
            }
        });   
    }
    const hadleJenisKelaminChange =(e)=>{
        const {name, value, kd_kota} = e;
        setPayload(prev=>{
            return{
                ...prev,
                [name]:value
            }
        });   
    }

    const handleRegister = (e)=>{
        e.preventDefault();
        let isPayload = true;
        if(payload.length === 7){
            Object.keys(payload).forEach(key => {
                if(payload[key] === ""){
                    isPayload = false
                    alert("Data "+ key+" Harus Diisi");
                }
            });
        }else{
            isPayload = false
            alert("Pastikan Semua Field Sudah Terisi Dengan Benar");
        }
        if(isPayload === true){
            alert("Registrasi Berhasil");
            history.push("/login");
        }
    }

    useEffect(()=>{
        console.log(payload);
    },[payload])

    return (<div className="register-page">
        <form method="post">
        <Row>
            <Col xs="12">
                <Card>
                    <Row className="row-form">
                        <Col xs="4">
                            <Card className="card-form">
                                <Row className="form-header"> 
                                    <h1>Register</h1> 
                                </Row>
                                <Row className="body-header">
                                    <Col>
                                        <Label htmlFor="first_name"> First Name</Label>
                                        <Input
                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            className="form-control-input form-control"
                                            onChange={e=>handleSetpayload(e)}
                                        />
                                    </Col>
                                    <Col>
                                        <Label htmlFor="last_name"> last Name</Label>
                                        <Input
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            className="form-control-input form-control"
                                            onChange={e=>handleSetpayload(e)}

                                        />
                                    </Col>
                                    <Col>
                                        <Label htmlFor="email"> email</Label>
                                        <Input
                                            type="text"
                                            name="email"
                                            id="email"
                                            className="form-control-input form-control"
                                            onChange={e=>handleSetpayload(e)}

                                        />
                                    </Col>
                                    <Col>
                                        <Label htmlFor="password"> password</Label>
                                        <Input
                                            type="text"
                                            name="password"
                                            id="password"
                                            className="form-control-input form-control"
                                            onChange={e=>handleSetpayload(e)}

                                        />
                                    </Col>
                                    <Col className="kota">
                                        <Label htmlFor="kota"> Jenis Kelamin</Label>
                                        <Select 
                                            options={jenisKelamin}
                                            className="form-control"
                                            onChange={(e)=>hadleJenisKelaminChange(e)}
                                            
                                        ></Select>
                                    </Col>
                                    <Col className="provinsi">
                                        <Label htmlFor="provinsi"> Provinsi</Label>
                                        <Select 
                                            options={provinsi}
                                            className="form-control"
                                            onChange={(e)=>hadleProvinsiChange(e)}
                                        ></Select>
                                    </Col>
                                            
                                    <Col className="kota">
                                        <Label htmlFor="kota"> Kota</Label>
                                        <Select 
                                            options={kotaByProv}
                                            className="form-control"
                                            onChange={(e)=>hadleKotaChange(e)}
                                        ></Select>
                                    </Col>

                                    <Col>
                                        <Button
                                            type="button"
                                            name="password"
                                            id="password"
                                            className="form-control-input form-control"
                                            onClick={(e)=>handleRegister(e)}
                                        >Register</Button>
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
 
export default Register;