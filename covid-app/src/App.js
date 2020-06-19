import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactCountryFlag from "react-country-flag"
import Axios from 'axios'
import LiveGraph from './components/LiveGraph.js'
import StateList from './components/StateList.js'

class App extends React.Component {
  state = {  
    total: {},
    states: [],
    times: []
  }
  componentDidMount() {
  
  Axios.get(`https://api.covid19india.org/data.json`).then(
    res => { 
     
     let tot = {
        deaths: res.data.statewise[0].deaths,
        confirmed: res.data.statewise[0].confirmed,
        recovered: res.data.statewise[0].recovered,
        time: res.data.statewise[0].lastupdatedtime,
        
      };  
      let statess=res.data.statewise;
      let timeseries=res.data.cases_time_series;
      this.setState({total:tot});
      this.setState({states:statess});
      this.setState({times:timeseries});
    }
    );
  }
 
  render() {
  return (
    <div className="App">
    <div className='text-center' >
      <h1>COVID-19 Tracker for INDIA 
    <ReactCountryFlag  countryCode="IN"
                svg
                style={{
                    width: '1.5em',
                    height: '1.5em',
                }}
                title="IN"/></h1>
                </div>
                <div className='text-center'>
                <small>(Last updated on {this.state.total.time})</small>
                </div>
    <CardDeck>
  <Card bg='secondary' text='white' className='text-center' style={{margin:"5px"}}>
    <Card.Body>
      <Card.Title>Total Confirmed Cases</Card.Title>
      <Card.Text>
        {this.state.total.confirmed}
      </Card.Text>
    </Card.Body> 
  </Card>
  <Card bg='danger' text='white' className='text-center' style={{margin:"5px"}}>
    <Card.Body>
      <Card.Title>Total Deceased</Card.Title>
      <Card.Text>
        {this.state.total.deaths}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg='success' text='white' className='text-center' style={{margin:"5px"}}>
    <Card.Body>
      <Card.Title>Total Recovered</Card.Title>
      <Card.Text>
     {this.state.total.recovered}
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
<div className="container">
  <LiveGraph times={this.state.times} />
  </div>
<h3>State-wise Count of Corona Cases
</h3>

  <div className="container">
  <StateList states={this.state.states} />
  </div>

    </div>
  );
}
}
export default App;
