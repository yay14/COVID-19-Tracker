import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'

export default function CountriesTable(props)
{
const countryTable=props.country;  
const [searched,setSearched]=useState("")
const filterCountry=countryTable.filter(data=>
    {
        return (searched!==""?(data.Country.toUpperCase()).includes(searched.toUpperCase()):data)
    })
    /*"Country": "Afghanistan",
"CountryCode": "AF",
"Slug": "afghanistan",
"NewConfirmed": 276,
"TotalConfirmed": 30451,
"NewDeaths": 8,
"TotalDeaths": 683,
"NewRecovered": 132,
"TotalRecovered": 10306,*/
const tabledata = filterCountry.map((data,i)=>
{
    
    return(
        <tbody>
        <tr>
          <td>{data.Country}</td>
          <td>{data.TotalConfirmed}</td>
          <td>{data.TotalDeaths}</td>
          <td>{data.TotalRecovered}</td>
          <td>{data.NewConfirmed}</td>
          <td>{data.NewDeaths}</td>
          <td>{data.NewRecovered}</td>
          
        </tr>
        </tbody>
    )
})
return(
    <div className="col">
       <h3>Global Distribution of Covid-19</h3>
       <div style={{maxHeight:"500px",maxWidth: "1500px"}}>
       <Form>
  <Form.Group controlId="formState">
    <Form.Control size="md"  type="text" 
    onChange={ e => 
        setSearched(e.target.value)
        
        }
    placeholder="Search any country" />
  </Form.Group>
  </Form>

       </div>
    
  <div style={{overflow:"auto",maxHeight:"500px",maxWidth: "1500px"}}>

 <Table responsive='sm' bordered hover>
 <thead >
   <tr>
    <th>COUNTRY</th>
     <th>CONFIRMED</th>
     <th>DECEASED</th>
     <th>RECOVERED</th>
     <th> TODAY CASES</th>
     <th> TODAY DEATHS</th>
     <th> TODAY RECOVERIES</th>
    
   </tr>
 </thead>
  {tabledata}
 </Table>
 </div> 
 </div>
  )
}
