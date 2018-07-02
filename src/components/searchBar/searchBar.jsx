import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: false
    }
  }

  render() {
    return (
      <div className="col-11">
        <div className="input-group thin-bar">
          <input ref="searchInput" type="text" className="form-control" placeholder="Nunca deixe de buscar"
            onKeyPress={ (e) => this.handleKeyPress(e) }>
          </input>
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <button className="btn btn-default transparent" type="button"
                onClick={ () => this.handleOnClick() }>
                <span className="glyphicon glyphicon-search" aria-hidden="true">
                  <i className="fa fa-search"></i>
                </span>
              </button>
            </span>
          </div>
          {
            this.state.redirect &&
            <Redirect push to={this.state.redirect} />
          }
        </div>
      </div>
    )
  }

  handleKeyPress(event) {
    if(event.key === 'Enter') {
      this.search(this.refs.searchInput.value)
      this.refs.searchInput.value = ''
    }
  }

  handleOnClick() {
    this.search(this.refs.searchInput.value)
  }

  search(query) {
    if(query === '') {
      return
    }

    return this.setState({
      redirect: '/​items?search=' + query
    })
  }
}

export default SearchBar