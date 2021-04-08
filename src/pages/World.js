import React from 'react';
import Axios from 'axios'
import ScaleLoader from "react-spinners/ScaleLoader"
import moment from 'moment';
import CardsWorld from '../components/CardsWorld'
import CountriesTable from '../components/CountriesTable'
import WorldMap from '../components/WorldMap'
import CountryPicker from "../components/CountryPicker"
import WorldCharts from "../components/WorldCharts"
import News from '../components/News.js';

class World extends React.Component {
  state = {  
    total: [],
    countries: [],
    date: [],
    global: [],
    pickedCountry: "",
    load: "true"
  }

  componentDidMount() {
  
  Axios.get(`https://api.covid19api.com/summary`).then(
    res => { 
    
    let tot = {
     confirmed: res.data.Global.TotalConfirmed,
     deaths: res.data.Global.TotalDeaths,
     recovered: res.data.Global.TotalRecovered,  
     date: res.data.Date,
       
      todconfirmed: res.data.Global.NewConfirmed,
      toddeaths: res.data.Global.NewDeaths,
      todrecovered: res.data.Global.NewRecovered, 
       };  
      
       this.setState({total:tot});
       this.setState({global:tot});
       console.log(global);
    let Countries=res.data.Countries;
     let Date=res.data.Date;
    //  const dates=new Date(parseInt(Date));
    //  const lastUpdated= dates.toString();
    this.setState({countries:Countries});
     this.setState({date:Date});
     
     this.setState({load:false})
     
    //  console.log(Countries);
    //  console.log(today)
    //  console.log(tot);
    }
    );
  }
  
  handleCountryChange = async (pickedCountry) =>{
    if(pickedCountry!=="")
    {
    const chosen = this.state.countries.filter((data,i)=>{
      return(
        data.Country===pickedCountry
      )
    })
    let tot = {
     
      confirmed: chosen[0].TotalConfirmed,
      deaths: chosen[0].TotalDeaths,
      recovered: chosen[0].TotalRecovered,
      date: this.state.date,
      todconfirmed: chosen[0].NewConfirmed,
      toddeaths: chosen[0].NewDeaths,
      todrecovered: chosen[0].NewRecovered,  
    }; 
    this.setState({ total:tot });  
    console.log(this.state.total);
  }
  else{
    console.log(this.state.global);
    const country=this.state.global;
    let tot = {
      confirmed: country.confirmed,
      deaths: country.deaths,
      recovered: country.recovered,
      date: this.state.date,
      todconfirmed: country.todconfirmed,
      toddeaths: country.toddeaths,
      todrecovered: country.todrecovered, 
    }; 
    this.setState({total:tot}); 
    
    console.log(this.state.total); 
   
  }
    
    
    
  }
  render() {
    var time1 = moment(this.state.date, "YYYY-MM-DDTHH:mm:ss.SSS");
    var date = moment(time1,'DD/MM/YYYY HH:mm:ss.SSS').format('LL');
  return (
    <div className="App">
      <div className="wrap">
        <div  id="home" >
          <div className="row headerarea">
            <div className="col">
              <h3> Worldwide Spread of Corona-Virus <span aria-hidden="true" role="img">🌐</span></h3>
            </div>
         
            <div className="col">
              <h6>(Last updated on {date})</h6>
            </div>
            
          </div>
          <hr/>
          <br/>
            <div style={{justifyContent:"center",display:"flex"}}>
              <ScaleLoader
           
                size={50}
                color={"#004D40"}
                loading={this.state.load}
              />
            </div>
      
            <div >
                <CountryPicker data={this.state.countries}  handleCountryChange={this.handleCountryChange}/>
            </div>
           

          <div className=" homearea">
            <CardsWorld tot={this.state.total} />
          </div>
          </div>
       
           <div className="row chartsarea" id="charts" style={{display: "flex" ,justifyContent: "center" ,minWidth: "500px",minHeight: "500px"}}>
          
          <WorldCharts tot={this.state.total}/>
          </div > 
           
         
            <div className= "distrarea " id="distr"><CountriesTable country={this.state.countries} /></div> 
           <hr/>
           <br/>
           
           <div className= "mapsarea " id="maps">
           <h3>WORLD TRENDS OF CORONA-VIRUS</h3>
              <br /><WorldMap country={this.state.countries} /></div> 
         
          <hr />
          <div id="news">
            <News />
          </div>
        
      </div>
      </div>
  );
}
}
export default World;
