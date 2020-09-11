import React from "react"

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <nav>
      <header className="header">
          <h1 className="logo">Unsplash</h1>
          <div className="header-links">
            <h3 id="dogs" onClick={this.props.updateQuery}>Dogs</h3>
            <h3 id="cats" onClick={this.props.updateQuery}>Cats</h3>
          </div>
      </header>
      </nav>
    )
  }
}

export default Header