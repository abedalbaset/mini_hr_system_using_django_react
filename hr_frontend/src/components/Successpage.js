import React from 'react';
import {  Alert } from 'react-bootstrap';
import axios from 'axios';


const Successpage = () => {

   

    return (
     
              <div className="container">
                    <div>
                  
                    <br/>
                    <br/>
                        <Alert variant="success">
                        <Alert.Heading>Successfully uploaded your application</Alert.Heading>
                        <p>
                          Thank you for your time and your interest 
                        </p>
                        <hr />
                        
                      </Alert>
                      </div>
                </div>
    );
};

export default Successpage;