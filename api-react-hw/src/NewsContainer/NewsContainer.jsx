import React, {Component} from 'react';
import NewsSearchContainer from './NewsSearchContainer/NewsSearchContainer'

class NewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            news: []
        }
    }
    componentDidMount(){
        
    }
    newsSearch = async (formData) => {
         const searchURL = await `https://newsapi.org/v2/top-headlines?country=${formData.search}&apiKey=54ca0d79f89f47638602e1615a69ba53`
        //const searchURL = await `https://newsapi.org/v2/top-headlines?country=us&apiKey=54ca0d79f89f47638602e1615a69ba53`
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        console.log(parsedResult + ',,,,,,,parsed results')
        this.setState({
            news: parsedResult.articles
        })

    }
    render(){
        console.log(this.state)
        const newsList = this.state.news.map((news)=>{
            return(
                <div key={news.title}>
                    <h5>{news.title}</h5>
                </div>
            )
        })
        return <div>
            <h2>Top News Articles!!!</h2>
            <NewsSearchContainer newsSearch={this.newsSearch} ></NewsSearchContainer>
            {newsList}
        </div>
    }
}

export default NewsContainer;