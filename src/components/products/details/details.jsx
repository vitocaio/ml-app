import React, { Component } from 'react'
import serviceApi from '../../../services/api/api'

class Details extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      product: {},
      productStatus: undefined,
      description: {},
      descriptionStatus: undefined
    }

    this.loadData = this.loadData.bind(this)
    this.loadDescription = this.loadDescription.bind(this)
  }

  componentDidMount() {
    this.loadData(this.props.match.params.id)
  }

  render() {
    return (
      <div>    
        {
          this.state.isLoading &&
          <p>Carregando, aguarde...</p>
        }
        {
          !this.state.isLoading &&
          this.state.productStatus === undefined &&
          <div className="alert alert-info">
            <p>Este produto não está cadastrado</p>
          </div>
        }
        {
          !this.state.isLoading &&
          this.state.productStatus !== undefined &&
          this.renderDetails()
        }
      </div>
    )
  }

  renderDetails() {
    return (
      <div>
        <div className="panel">
          <div className="panel-body">
            <div className="row">
                <section className="col-8">
                    <img className="img-responsive" src={this.state.product.pictures[0].url} alt="" />
                    <div className="description-product-detail">
                    <h3>Descrição do produto</h3>
                    {
                        this.state.descriptionStatus === undefined &&
                        <p>Carregando descrição...</p>
                    }
                    {
                        this.state.descriptionStatus !== undefined &&
                        <p>{this.state.description.plain_text}</p>
                    }
                    </div>
                </section>
                <aside className="col-4">
                    <p>{this.state.product.title}</p>
                    <h4>{this.state.product.title}</h4>
                    <h1>
                      <span>
                        {
                        this.state.product.price.toLocaleString('pt-BR', 
                            { 
                            style: 'currency',
                            currency: 'USD' 
                            })
                        }
                        </span>
                    </h1>
                    <button className="btn btn-primary btn-lg btn-block">Comprar</button>
                </aside>            
            </div>
          </div>
        </div>
      </div>
    )
  }

  loadData(id) {
    
    this.setState({isLoading: true})

    serviceApi.getProductById(id)
      .then((data) => {
        if(data.status === undefined) {
          this.setState({
            isLoading: false,
            productStatus: data.status
          })
        } else {
          this.setState({
            product: data,
            isLoading: false,
            productStatus: data.status
          })
          
          this.loadDescription(this.props.match.params.id)
        } 
      })
  }

  loadDescription(id) {
    this.setState({isLoading: true})

    serviceApi.getProductDescription(id)
      .then((data) => {
        //console.log(data) 
        if(data === undefined) {
          this.setState({
            isLoading: false,
            descriptionStatus: data
          })
        } else {
          this.setState({
            description: data,
            isLoading: false,
            descriptionStatus: data
          })
        } 
      })
  }
}

export default Details