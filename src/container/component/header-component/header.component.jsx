import React, { Fragment } from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "./header.styles.scss";

import{
  Row,
  Col,
  Img
}from "reactstrap";



const Header = () => {
  return (
    <Fragment>
      <Row className="header">
        <Col xs="12" className="colum-header"> 
          <Row className="row-header">
            <div className="logo">
              <div className="logoImage">
              </div>
            </div>
            <div className="menu">
              <Navbar className="main-header" expand="md">
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink>
                      <Link className="header-link" to="/login">
                        Login
                      </Link>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Navbar>
            </div>
           
          </Row>
         
        </Col>
        
      </Row>
      
    </Fragment>
  );
};

export default Header;
