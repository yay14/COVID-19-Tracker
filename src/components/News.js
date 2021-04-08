import React from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './../App.css'


const useStyles = makeStyles({
  root: {
    maxWidth: 630,
  },
  media: {
    height: 140,
  },
});

  export function NewsCard(props)
  {
    const classes= useStyles();
    const {title,summary,date,media,link}=props;
    console.log(title,summary,date,media,link);

    return(
      <>
      <Card className={classes.root} >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <CardMedia
          className={classes.media}
          image={media}
        />
          <Typography variant="body2" color="textSecondary" component="p">
            {summary}
          </Typography>
          
        <Typography>
          Published on {date}
        </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a
        size="small" 
        color="primary"
        href={link}
        >
          Read More
        </a>
      </CardActions>
    </Card>
    <br/>  
    </>
    )
  }

  
  class News extends React.Component
  {
    state={
      all_news: [],
      currentPage: 1,
      newsPerPage: 5,
    };
    constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
      }
      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
    

    componentDidMount()
    {
      const options = {
        method: 'GET',
        url: 'https://covid-19-news.p.rapidapi.com/v1/covid',
        params: {q: 'covid', lang: 'en', media: 'True'},
        headers: {
          'x-rapidapi-key': '0408a754demsha25f860f1667bcep1c134cjsn275fc76a05ba',
          'x-rapidapi-host': 'covid-19-news.p.rapidapi.com'
        }
      };

      axios.request(options).then(response =>
       {
        console.log(response.data.articles);
        let news=response.data.articles;
        this.setState({all_news: news})
      }).catch(function (error) 
      {
        console.error(error);
      });

    }


    render(){
      const { all_news, currentPage, newsPerPage } = this.state;
      const indexOfLastNews = currentPage * newsPerPage;
      const indexOfFirstNews = indexOfLastNews- newsPerPage;
      const currentNews = all_news.slice(indexOfFirstNews, indexOfLastNews);

      const renderNews = currentNews.map((data, index) => {
        return <NewsCard title={data.title} link={data.link} summary={data.summary} media={data.media} date={data.published_date}/>;
      });

      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(all_news.length / newsPerPage); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });


      return(

        <div className="newsContainer" >
          <h2>COVID-19 Latest News</h2> 
            <div className="news">
              <br/>
              {renderNews}
            </div>
            <ul className="page-numbers">
              {renderPageNumbers}
            </ul>
        </div>
      )
  }
}

  export default News;