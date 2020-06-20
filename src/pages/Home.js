import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactCountryFlag from "react-country-flag"
import Axios from 'axios'
import LiveGraph from '../components/LiveGraph.js'
import SearchState from '../components/SearchState.js'
import TestedGraph from '../components/TestedGraph.js'

class Home extends React.Component {
  state = {  
    total: {},
    states: [],
    times: [],
    tested: []
  }
  componentDidMount() {
  
  Axios.get(`https://api.covid19india.org/data.json`).then(
    res => { 
     let tests= res.data.tested;
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
      this.setState({tested:tests});
    }
    );
  }
 
  render() {
  return (
    <div className="App">
    <div className="row" >
      <div className="col"  className='text-center' style={{margin:"15px"}}>
          <br/>
      <h4>COVID-19 INDIA
    <ReactCountryFlag  countryCode="IN"
                svg
                style={{
                    width: '1.5em',
                    height: '1.5em',
                }}
                title="IN"/></h4>
      </div>
     
      <div className="col">
                <h6>(Last updated on {this.state.total.time})</h6>
      </div>
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
      <Card.Title>Total Deaths</Card.Title>
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
<div className="row" >
<div  className="col">
  <h4>New cases, Recovered, Deaths overtime</h4>
  <LiveGraph times={this.state.times} /></div>
  <div  className="col">
    <h4>Rate of growth of Corona Positively Tested</h4>
  <TestedGraph tested={this.state.tested} />
  </div>
  </div>
  <h3>State-wise Count of Corona Cases
</h3>
  <SearchState states={this.state.states} />
  </div>

  );
}
}
export default Home;
