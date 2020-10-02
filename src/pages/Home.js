import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactCountryFlag from "react-country-flag"
import Axios from 'axios'
import LiveGraph from '../components/LiveGraph.js'
import SearchState from '../components/SearchState.js'
import TestedGraph from '../components/TestedGraph.js'
import IndiaMap from '../components/IndiaMap.js'
import About from '../components/About.js'
import CardsIndia from '../components/CardsIndia'
import ScaleLoader from "react-spinners/ScaleLoader"

class Home extends React.Component {
  state = {  
    total: {},
    states: [],
    times: [],
    tested: [],
    load: "true"
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
      this.setState({load:false})
    }
    );
  }
 
  render() {
  return (
    <div className="App">
      <div className="wrap">
        <div  id="home" >
          <div className="row headerarea">
            <div className="col"  class="logo">
              <h3>LIVE : Corona-Virus in INDIA
                <ReactCountryFlag countryCode="IN"
                  svg
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                  }}
                  title="IN" />
              </h3>
            </div>

            <div className="col">
              <h6>(Last updated on {this.state.total.time})</h6>
            </div>
          </div>
          <hr/>
          <br/>
            <div style={{justifyContent:"center",display:"flex"}}>
              <ScaleLoader
           
                size={80}
                color={"#004D40"}
                loading={this.state.load}
              />
            </div>
            
          <div className=" homearea">
            <CardsIndia tot={this.state.total} />
          </div>
          </div>
          <div className="row chartsarea" id="charts">
            <div className="col-sm-6">
              <h4>New cases, Recovered, Deaths overtime</h4>
              <LiveGraph times={this.state.times} /></div>
            <div className="col-sm-6">
              <h4>Rate of growth of Corona Positively Tested</h4>
              <TestedGraph tested={this.state.tested} />
            </div>
          </div >
          
         
            <div className= "distrarea " id="distr"><SearchState states={this.state.states} /></div>
            <div className="mapsarea" id="maps">
              <br /><IndiaMap states={this.state.states} /></div>
         
          <hr />
          <div className="aboutarea" id="about">
            <About />
          </div>
        
      </div>
      </div>
  );
}
}
export default Home;
