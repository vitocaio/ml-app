import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// components
import SearchBar from './components/searchBar/searchBar'
import List from './components/products/list/list'
import Details from './components/products/details/details'

import logo from './img/MercadoLivre.png'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default amarelo-ml">
            <div className="container">
              <div className="col-1">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/">
                    <img alt="logo" className="ml-logo" src={logo}/>
                  </a>
                </div>
              </div>
              <SearchBar />
            </div>
          </nav>
          <div className="container products">
            <Route exact path="/items/:id" component={ Details } />
            <Route path="/​items" component={ List } />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
