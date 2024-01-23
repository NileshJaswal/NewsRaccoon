import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Button } from "flowbite-react";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    try {
      console.log("CDM Render");
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d02a71aef6d04f52acbb31a9a3453c56&page=1&pageSize=12`;
      let data = await fetch(url);
      let parcedData = await data.json();
      console.log(parcedData);
      // Setting the state
      this.setState({
        articles: parcedData.articles,
        totalArticles: parcedData.totalResults,
        loading: false,
      });
    } catch (err) {
      console.error("Error fetching news data:", err);
    }
  }
  HandleNextClick = async () => {
    let pageNumbers = Math.ceil(this.state.totalArticles / 12);
    if (this.state.page + 1 > pageNumbers) {
    } else {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d02a71aef6d04f52acbb31a9a3453c56&page=${this.state.page + 1}&pageSize=12`;
        let data = await fetch(url);
        let parcedData = await data.json();
        this.setState({
          page: this.state.page + 1,
          articles: parcedData.articles,
        });
      } catch (err) {
        console.error("Error fetching news data:", err);
      }
    }
  };
  HandlePrevClick = async () => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d02a71aef6d04f52acbb31a9a3453c56&page=${this.state.page - 1}&pageSize=12`;
      let data = await fetch(url);
      let parcedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parcedData.articles,
      });
    } catch (err) {
      console.error("Error fetching news data:", err);
    }
  };
  render() {
    let { newsheading } = this.props;
    return (
      <>
        <div className="container mx-auto my-3 px-4 md:px-0">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight mb-6">{newsheading}</h1>

          <div className="grid md:grid-cols-12 gap-12">
            {this.state.articles.map((elem) => {
              return (
                <div className="md:col-span-4" key={elem.url}>
                  <NewsItem
                    title={elem.title ? elem.title.slice(0, 45) : ""}
                    description={elem.description ? elem.description?.slice(0, 75) : ""}
                    imageUrl={elem.urlToImage ? elem.urlToImage : "https://placehold.co/350x183"}
                    newsUrl={elem.url}
                  />
                  {/* tittle={element.title.length >= 45 ? element.title.slice(0, 45) : element.title} discription={element.description.length >= 60 ? element.description.slice(0, 60) : element.description} */}
                </div>
              );
            })}
          </div>
          <div className="container flex justify-between mx-auto mt-5">
            <Button  color="dark" disabled={this.state.page <= 1} onClick={this.HandlePrevClick}>&larr; Previous</Button>
            <Button  color="dark" onClick={this.HandleNextClick}>Next &rarr;</Button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
