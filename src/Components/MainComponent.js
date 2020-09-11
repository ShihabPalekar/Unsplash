import React from "react"
import Header from "./Header";
import Images from "./Images"

class MainComponent extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [],
      query: "dogs",
      src: ""
    }
  }

  updateQuery = (e) => {
    console.log(e.target.id, this.state.query)
    this.setState({query: e.target.id})
  }

  render(){
    return(
      <div>
        <Header 
          updateQuery = {this.updateQuery}
        />
        <Images 
          query = {this.state.query}
        />
      </div>
    )
  }
}

export default MainComponent