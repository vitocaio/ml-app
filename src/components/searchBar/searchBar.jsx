import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

class SearchBar extends Component {
  constructor(props) {
    super(props)

      this.state = {
        redirect: false
      }
  }

  render() {
    const { redirect } = this.state

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
          { redirect && 
              <Redirect push to={{ search:  this.state.redirect }}/>
          }
        </div>
      </div>
    )
  }

  handleKeyPress(e) {
    if(e.key === 'Enter') {
      this.search(this.refs.searchInput.value)
    }
  }

  handleOnClick(e) {
    this.search(this.refs.searchInput.value)
  }

  search(value) {
    if(value === '') {
      return
    }

    window.location = '/​items?search=' + value // Não é a solução ideial para as rotas, precisa de melhorias
    
    // return this.setState({
    //   redirect: '/​items?search=' + value
    // })

    this.props.history.push('/​items?search=' + value)
  }
}

export default withRouter(SearchBar)