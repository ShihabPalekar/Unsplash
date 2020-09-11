import React from "react"

class Images extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        dogsImgData: [],
        catsImgData: []
    }
  }

  componentDidMount(){
    fetch(`https://api.unsplash.com/search/photos?query=dogs&client_id=5EUbpqIl4q6P2djAjxltw9IvdzyO86mOjHYknVVyYZw`)
      .then(response => response.json())
      .then(resJSON => {
        this.setState({ dogsImgData: resJSON.results })
      })
    fetch(`https://api.unsplash.com/search/photos?query=cats&client_id=5EUbpqIl4q6P2djAjxltw9IvdzyO86mOjHYknVVyYZw`)
      .then(response => response.json())
      .then(resJSON => {
        this.setState({ catsImgData: resJSON.results })
      })
  }

  render(){
    const query = this.props.query

    switch(query){
      case "dogs":
        if (this.state.dogsImgData.length === 0){
          return(
            <div></div>
          )
        } else {
          return(
            <div className="img-container">
              {this.state.dogsImgData.map(item => <img key={item.id} src={item.urls.thumb} alt ={item.alt_description} />)}
            </div>
          )
        }
        
      case "cats":
        return(
          <div className="img-container">
              {this.state.catsImgData.map(item => <img key={item.id} src={item.urls.thumb} alt ={item.alt_description} />)}
          </div>
        )
    }
  }
}

export default Images