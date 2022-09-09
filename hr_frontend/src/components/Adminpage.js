import React ,{useState} from 'react';
import { Form } from "react-bootstrap";
import { Row , Card, Button } from 'react-bootstrap';
import axios from 'axios';

var fileDownload = require('js-file-download');


const Adminpage = () => {

  const [candidateid, setcandidateid] = useState(null);

  const [candidatesdata, setcandidatesdata ]= useState([])

  const displaydata = async (event) => {
    console.log("called display")
    const result = await axios.get('/getdata',
    
    {
      headers : {'X-ADMIN': '1'},
    }
    
    );

    console.log("result = ",result.data)
    setcandidatesdata(result.data)

  }

  function  downloadresumefun(id)
      {
      axios.get('/download?id='+id, 
      { 
        headers : {'X-ADMIN': '1'},
        responseType: 'blob',
      }).then(res => {
      if(res.data.size>0)
      {
        //console.log("zo ",res.headers['filetype'])
        fileDownload(res.data, 'resume'+res.headers['filetype']);


      }
        console.log("after request ** " ,res.data);
      }).catch(err => {
          console.log(err);
      })
    }
    
   
    return (

      <div className="container">
        <h1 className="text-uppercase text-center my-4">Admin</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">

              <Button onClick={displaydata} variant="primary" type="submit">
                Display Candidates Informations
              </Button>
                    <hr/>

              <Form.Group className="mb-3" >
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Candidate ID" onChange={(e) => setcandidateid(e.target.value)}  />
              
              </Form.Group>
              <Button onClick={() => { downloadresumefun(candidateid)}} variant="primary" type="submit">
                Download Resume by Candidate ID
              </Button>
              
            
                </div>
                <br/>

                <div className="">


                  <Row xs={1} md={1} className="g-4">
                    {
                      
                        candidatesdata.map((userdata, index) => (
                          
                            <Card  key={userdata.id} className="" >

                          

                            <Card.Body>

                                <Card.Title>{userdata.Candidate_Full_Name}</Card.Title>
                                <Card.Text>Birthday :  {userdata.Date_of_Birth} </Card.Text>
                                <Card.Text>Years of Experience : {userdata.Years_of_Experience} </Card.Text>
                                <Card.Text>Department_ID : {userdata.Department_ID} </Card.Text>
                              

                                <Button variant="primary" onClick={() => { downloadresumefun(userdata.id)}} >Download Resume</Button>
                        
                            </Card.Body>
                            </Card>
                            
                            
                        ))
                        

                    }
                    
                    </Row>
                    </div>
     
        
      
    </div>

    
    </div>

    
    </div>
    
    );
};

export default Adminpage;