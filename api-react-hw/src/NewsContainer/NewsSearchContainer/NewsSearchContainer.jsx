import React, {Component} from 'react' 

class NewsSearchContainer extends Component {
    constructor (){
        super();
        this.state = {
            news: []
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props + '<<<<<<<<<<<<<<<<<')
        this.props.newsSearch(this.state);
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
        Which countries news would you like? <input onChange = {this.handleChange} type="text" name="search" />
        <input type="submit" />
        </form>
    }
}

export default NewsSearchContainer;
