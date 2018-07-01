import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import listItem from './listItem'

import serviceApi from '../../../services/api/api'

class List extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isLoading: false,
      results: {},
      status: undefined,
      redirect: false
    }

    this.renderProduct = this.renderProduct.bind(this)
    this.viewProduct = this.viewProduct.bind(this)
  }

  componentDidMount() {
    const urlSearchParams = new URLSearchParams(this.props.location.search)
    let params = urlSearchParams.get('search') 
    
    this.loadData(params) 
  }

  render() {
    return (    
      <ul className="list-group">
        {
          this.state.isLoading &&
          <li><p>Carregando, aguarde...</p></li>
        }
        {
          !this.state.isLoading && 
          this.state.status !== undefined &&
          this.state.results.slice(0,4).map(this.renderProduct)
        }
      </ul>  
    )
  }

  loadData(query) {
    this.setState({isLoading: true})
    
    serviceApi.getProductByQuery(query)
      .then((data) => {
        this.setState({
          results: data.results,
          isLoading: false,
          status: "data.status"
        })
      })
  }

  renderProduct(product) {
    return (
      <li key={product.id} className="list-group-item row clickable"
        onClick={() => this.viewProduct(product.id)}>
        <listItem />
      </li>
    )
  }

  viewProduct(id) {
    this.setState({
      redirect:'/items/'+id
    })
  }
}

export default List
