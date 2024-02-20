import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country: 'in',
    pageSize:8,
    category:'general'
   }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading: false,
      page:1
    }
    document.title=`${this.props.category}-NewsMonkey`;
  }
  async updateNews(){
    this.props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94c867105e864d7b885311dd9f77d698&Page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    this.props.setProgress(30);
    let paredData=await data.json()
    this.props.setProgress(70);
    this.setState({articles:paredData.articles, totalResults: paredData.totalResults,loading:false})
    this.props.setProgress(100);
  }
  async componentDidMount(){
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94c867105e864d7b885311dd9f77d698&Page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data=await fetch(url);
    // let paredData=await data.json()
    // this.setState({articles:paredData.articles, totalResults: paredData.totalResults,loading:false})
    this.updateNews();
  }
  handleNextClick=async()=>{
  //   console.log("n");
  //   if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94c867105e864d7b885311dd9f77d698&Page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true})
  //   let data=await fetch(url);
  //   let paredData=await data.json()
  //   console.log(paredData);
  //   this.setState({
  //     page: this.state.page +1,
  //     articles: paredData.articles,
  //     loading:false
  //   })
  // }
      this.setState({page:this.state.page+1});
      this.updateNews();
  }
  handlePrevClick=async()=>{
    // console.log("p");
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94c867105e864d7b885311dd9f77d698&Page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data=await fetch(url);
    // let paredData=await data.json()
    // this.setState({
    //   page: this.state.page -1,
    //   articles: paredData.articles,
    //   loading:false
    // })
    this.setState({page:this.state.page-1});
    this.updateNews();
  }

  render() {
    return (
      <div className='container my-3'>
        <div className='text-center' style={{marginTop:'90px'}}><h2>NewsMonkey-{this.props.category}</h2></div>
        {this.state.loading && <Loader/>}
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw"} newsUrl={element.url}
            author={element.author?element.author:'unknown'} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News