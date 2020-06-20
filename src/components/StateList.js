import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

 export default function StateList(props)
  {
const statesTable=props.states;  
return(
<Table responsive='sm'>
<thead>
  <tr>
    <th>#</th>
    <th>STATE/UT</th>
    <th>CONFIRMED</th>
    <th>ACTIVE</th>
    <th>DECEASED</th>
    <th>RECOVERED</th>
    <th>LAST UPDATED</th>
  </tr>
</thead>
{
    statesTable.map((data,i) => {
      
      return (
        <tbody>
        <tr>
          <td>{i+1}</td>
          <td>{data.state}</td>
          <td>{data.confirmed}</td>
          <td>{data.active}</td>
          <td>{data.deaths}</td>
          <td>{data.recovered}</td>
          <td>{data.lastupdatedtime}</td>
        </tr>
        </tbody>
      )
  })}
  </Table>
)
  }
