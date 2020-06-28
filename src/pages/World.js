import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'

import About from '../components/About.js'
import CardsWorld from '../components/CardsWorld'
import CountriesTable from '../components/CountriesTable'
import WorldMap from '../components/WorldMap'

class World extends React.Component {
  state = {  
    total: [],
    newcases: [],
    countries: [],
    date: [],
  }
  /*"NewConfirmed": 191909,
"TotalConfirmed": 9905480,
"NewDeaths": 4873,
"TotalDeaths": 502735,
"NewRecovered": 106636,
"TotalRecovered": 4944906*/
  componentDidMount() {
  
  Axios.get(`https://api.covid19api.com/summary`).then(
    res => { 
     console.log(res);
    let tot = {
     confirmed: res.data.Global.TotalConfirmed,
     deaths: res.data.Global.TotalDeaths,
     recovered: res.data.Global.TotalRecovered,  
    date: res.data.Date,
       
      todconfirmed: res.data.Global.NewConfirmed,
      toddeaths: res.data.Global.NewDeaths,
      todrecovered: res.data.Global.NewRecovered, 
       };  
       let today ={
        confirmed: res.data.Global.NewConfirmed,
        deaths: res.data.Global.NewDeaths,
        recovered: res.data.Global.NewRecovered,  
       }
       this.setState({total:tot});
    let Countries=res.data.Countries;
     let Date=res.data.Date;
    //  const dates=new Date(parseInt(Date));
    //  const lastUpdated= dates.toString();
    this.setState({countries:Countries});
     this.setState({date:Date});
     this.setState({newcases:today});
    //  console.log(Countries);
    //  console.log(today)
    //  console.log(tot);
    }
    );
  }
 
  render() {
  return (
    <div className="App">
      <div className="wrap">
        <div  id="home" >
          <div className="row headerarea">
            <div className="col">
              <h3>LIVE : Worldwide Spread of Corona-Virus <span aria-hidden="true" role="img">🌐</span></h3>
            </div>
            <div className="col">
              <h6>(Last updated on {(this.state.date).toString()})</h6>
            </div>
          </div>
          <hr/>
         
          <div className=" homearea">
            <CardsWorld tot={this.state.total} />
          </div>
          </div>
          {/* <div className="row chartsarea" id="charts">
            <div className="col">
              <h4>New cases, Recovered, Deaths overtime</h4>
              <LiveGraph times={this.state.times} /></div>
            <div className="col">
              <h4>Rate of growth of Corona Positively Tested</h4>
              <TestedGraph tested={this.state.tested} />
            </div>
          </div > */}
          
         
            <div className= "distrarea " id="distr"><CountriesTable country={this.state.countries} /></div> 
           <div className= "mapsarea " id="maps">
              <br /><WorldMap country={this.state.countries} /></div> 
         
          <hr />
          <div className="aboutarea" id="about">
            <About />
          </div>
        
      </div>
      </div>
  );
}
}
export default World;
