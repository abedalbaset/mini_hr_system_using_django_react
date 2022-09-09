
import React , {useState} from 'react';
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Formpage = () => {

const [name, setName] = useState(null);
const [birthday, setbirthday] = useState(null);
const [yearsofexperience, setyearsofexperience] = useState(null);
const [department, setdepartment] = useState(null);
const [resumefile, setresumefile] = useState(null);


const addnewdata = async (event) => {
  event.preventDefault();
    let formField = new FormData()
    formField.append('Candidate_Full_Name',name)
    formField.append('Date_of_Birth',birthday)
    formField.append('Years_of_Experience',yearsofexperience)
    formField.append('Department_ID',document.getElementById("departmentid").value)
    
    

    if(resumefile !== null && name !== null) {
      formField.append('Resume', resumefile)

  
    //upload form to database
   axios
    .post("storedata/", formField).catch(err => {
      console.log(err);
     }).then (function (response) {
      
      console.log("successfully upload storedata")
      window.location.href = "/success";
       
    }
      
      //console.log("respost = ",respost)
     
     );



    


    }else{
      alert("make sure to fill all fields")
    }



    
    


}
    return (
      <div className="container">
        <h1 className="text-uppercase text-center my-4">Apply page</h1>
        <div className="row" id='formapply'>
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
                    <Form>
                    <Form.Group className="mb-3" >
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)}  required />
                      
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control type="date" placeholder="Date of Birth" onChange={(e) => setbirthday(e.target.value)} required  />
                      
                    </Form.Group>

                    

                    <Form.Group className="mb-3" >
                      <Form.Label>Years of Experience</Form.Label>
                      <Form.Control type="number" placeholder="Years of Experience" onChange={(e) => setyearsofexperience(e.target.value)} required />
                      
                    </Form.Group>

              
                    <Form.Group>
                  <Form.Label>Department ID</Form.Label>
                  <Form.Control as="select" id='departmentid' >
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>

                    </Form.Control>
                  </Form.Group>

        
                  <br/>

                  <Form.Group  className="mb-3">
                      <Form.Label>Resume  (only  PDF or DOCX files)</Form.Label>
                      <Form.Control type="file" accept="application/pdf,.docx" onChange={(e)=>setresumefile(e.target.files[0])} required />
                    </Form.Group>
                    
                    <Button onClick={addnewdata} variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>


    </div>
    </div>
    </div>
    </div>
    );
};

export default Formpage;