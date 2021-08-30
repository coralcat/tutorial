import React, { Component } from "react"
import { Route } from "react-router-dom"
import { Main, Charts } from "../pages"


class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Main}/>
        <Route path="/charts" component={Charts} />
      </div>
    )
  }
}

export default App