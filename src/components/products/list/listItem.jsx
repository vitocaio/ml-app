import React, { Component } from 'react'

class ListItem extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-3">
                    <div className="product-image">    
                        <img className="img-responsive" src={this.props.product.thumbnail} alt="" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="product-description">
                        <h3>$ {this.props.product.price}</h3>
                        <p>{this.props.product.title}</p>
                    </div>
                </div>
                <div className="col-3 text-right">
                    <div className="product-state">
                        <p>{this.props.product.seller_address.state.name}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListItem