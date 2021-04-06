import React from 'react';
import axios from "axios";


  
  class News extends React.Component
  {
    componentDidMount(){

const options = {
  method: 'GET',
  url: 'https://covid-19-news.p.rapidapi.com/v1/covid',
  params: {q: 'covid', lang: 'en', media: 'True'},
  headers: {
    'x-rapidapi-key': '0408a754demsha25f860f1667bcep1c134cjsn275fc76a05ba',
    'x-rapidapi-host': 'covid-19-news.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    }
    render(){
      return(
        <div/>
      )
    }
  }

  export default News