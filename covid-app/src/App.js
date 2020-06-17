import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
    <CardDeck>
  <Card bg='secondary' text='white' className='text-center' style={{margin:"10px"}}>
    <Card.Body>
      <Card.Title>Total Confirmed Cases</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg='danger' text='white' className='text-center' style={{margin:"10px"}}>
    <Card.Body>
      <Card.Title>Total Deceased</Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg='success' text='white' className='text-center' style={{margin:"10px"}}>
    <Card.Body>
      <Card.Title>Total Recovered</Card.Title>
      <Card.Text>
     
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
    </div>
  );
}

export default App;
