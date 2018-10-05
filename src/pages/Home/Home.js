import React, { Component } from 'react';
import API from "../../utils/API";
import moment from "moment";

// header and searchbar components
import NytHeader from "../../components/NytHeader/" 
import Card from "../../components/Card"
import SearchBar from "../../components/SearchBar"

// results components
import ResultsHeader from "../../components/ResultsHeader";
import ResultCard from "../../components/ResultCard";

import SavedHeader from "../../components/SavedHeader";

// extra css
import "./Home.css"

class Home extends Component {

  state = {
    articles: [],
    NYTResults: [],
    topic: "",
    from: "",
    to: ""
  };

  getOnlineNYTArticles(topic, from, to){
    var component = this;

    API.getNYTArticles(topic, from, to)
    .then(function(res){

      if(res){
        console.log(res)
    var data = [];
      for (var i=0; i<(5>res.data.response.docs.length ? (res.data.response.docs.length) : 5); i++){
      var link = res.data.response.docs[i].web_url;
      var author = res.data.response.docs[i].byline.original;
      var title = res.data.response.docs[i].headline.main;
      var pub_date = res.data.response.docs[i].pub_date;
      var id = res.data.response.docs[i]._id;
      var synopsis = res.data.response.docs[i].snippet;
      var newdata = {
        _id: id,
        author: author,
        title: title,
        link: link,
        pub_date: pub_date,
        synopsis: synopsis
      }
      data.push(newdata);
      }
      component.setState({NYTResults: data});
      console.log(data); 
    }
  }); 
 ;
  }

  loadArticles(){
    API.getArticles()
    .then(res =>
      this.setState({ articles: res.data, topic: "", from: "", to: ""})
    )
    .catch(err => console.log(err));
  }




  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  createNewArticle = (title, author, link, synopsis) => {
    // console.log(url);
    // const title = event.target.getAttribute("data-title");
    // const author = event.target.getAttribute("data-author");
    // const link = event.target.getAttribute("data-link");
    // const synopsis = event.target.getAttribute("data-synopsis");

    console.log("Saved!!")
    API.saveArticle({
      title: title,
      author: author,
      link: link,
      synopsis: synopsis,
      // pub_date, pub_date
      date: Date.now()
    })
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
      // console.log(this.state.article);
  }


  handleSearchNYT = event => {
    // event.preventDefault();
    console.log("Hello world!")
    if (this.state.topic && this.state.from && this.state.to) {
      // console.log(moment(this.state.from).format("YYYYMMDD"));
      this.getOnlineNYTArticles(this.state.topic, moment(this.state.from).format("YYYYMMDD"), moment(this.state.to).format("YYYYMMDD"));
    }
  };

  // sayHi = event => {
  //   event.preventDefault();
  //   console.log("hello world");
  // }

  render() {
    return (
      <div className="app">
        <div className="container">

          {/* Search bar and header */}
          <Card>
            <NytHeader
              H2words="New York Times Article Search"
              // onClick={this.sayHi()}
            />
            <SearchBar
              onChange={this.handleInputChange}
              onClick={this.handleSearchNYT}            
            />
          </Card>

          {/* Results body */}
          <Card>
            <ResultsHeader
              topic={this.state.topic}
            />

            {this.state.NYTResults.map(article => (

              <ResultCard
                key={article._id}
                title={article.title}
                author={article.author}
                date={article.pub_date}
                synopsis={article.synopsis}
                link={article.link}
                onClick={this.createNewArticle}
              />

            ))}

          </Card>

          <Card>
            <SavedHeader
              header="Your saved articles"
              onChange={this.handleInputChange}              
            />

            {this.state.articles.map(article => (

              <ResultCard
                key={article.id}
                title={article.title}
                author={article.author}
                date={article.date}
                synopsis={article.synopsis}
                link={article.link}
                onClick={this.createNewArticle}
              />

            ))}

          </Card>

        </div>
      </div>
    );
  }
}

export default Home;
